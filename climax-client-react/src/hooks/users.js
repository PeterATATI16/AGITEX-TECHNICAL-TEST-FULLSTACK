import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  fetchClientStats,
  importClients,
  fetchClients,
  fetchClient,
  updateClient,
  deleteClient,
} from "../services/userService";
import { errorToast, successToast } from "../config/toaster";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const users = useQuery("users", fetchClients, {
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors du chargement des utilisateurs";
      errorToast(message);
    },
  });

  const clients_stats = useQuery("clients_stats", fetchClientStats, {
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors du chargement des stats des clients";
      errorToast(message);
    },
  });

  const useUser = (id) =>
    useQuery(["user", id], () => fetchClient(id), {
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          "Erreur lors du chargement du client";
        errorToast(message);
      },
    });

  const updateUserMutation = useMutation(
    ({ id, data }) => updateClient(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        successToast("Utilisateur mis à jour avec succès");
      },
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          "Erreur lors de la mise à jour du client";
        errorToast(message);
      },
    }
  );

  const deleteUserMutation = useMutation((id) => deleteClient(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      successToast("Utilisateur supprimé avec succès");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors de la suppression du client";
      errorToast(message);
    },
  });

  const importClientsMutation = useMutation(importClients, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      successToast("Fichier importé avec succès");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors de l'importation du fichier";
      errorToast(message);
    },
  });

  return {
    users: users.data,
    clients_stats: clients_stats.data,
    importClients: importClientsMutation.mutate,
    useUser,
    updateUser: updateUserMutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    isLoadingUsers: users.isLoading,
    isLoadingClientStats: clients_stats.isLoading,
    isUpdatingUser: updateUserMutation.isLoading,
    isDeletingUser: deleteUserMutation.isLoading,
    isImportingClients: importClientsMutation.isLoading,
  };
};

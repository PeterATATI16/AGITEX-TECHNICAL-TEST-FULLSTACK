import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  fetchUsers,
  fetchUser,
  updateUser,
  deleteUser,
  fetchClientStats,
  importClients,
} from "../services/userService";
import { errorToast, successToast } from "../config/toaster";

export const useUsers = () => {
  const queryClient = useQueryClient();

  const users = useQuery("users", fetchUsers, {
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
    useQuery(["user", id], () => fetchUser(id), {
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          "Erreur lors du chargement de l'utilisateur";
        errorToast(message);
      },
    });

  const updateUserMutation = useMutation(
    ({ id, data }) => updateUser(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        successToast("Utilisateur mis à jour avec succès");
      },
      onError: (error) => {
        const message =
          error.response?.data?.message ||
          "Erreur lors de la mise à jour de l'utilisateur";
        errorToast(message);
      },
    }
  );

  const deleteUserMutation = useMutation((id) => deleteUser(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      successToast("Utilisateur supprimé avec succès");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "Erreur lors de la suppression de l'utilisateur";
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

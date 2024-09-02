import { useMutation } from "react-query";
import {
  getUserFromLocalStorage,
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
} from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../config/toaster";

export const useAuth = () => {
  const [AUTH, setAuth] = useState(getUserFromLocalStorage());
  const [isAuthenticated, setIsAuthenticated] = useState(!!AUTH);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: (credentials) => login(credentials),
    onSuccess: (data) => {
      setAuth(data.auth);
      setIsAuthenticated(true);
      if (data.auth) {
        navigate("/dashboard");
        successToast(`Bienvenue ${data.auth.name}`);
      }
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la connexion"
      );
    },
  });

  const registerMutation = useMutation({
    mutationFn: (form) => register(form),
    onSuccess: (data) => {
      setAuth(data.user);
      setIsAuthenticated(true);
      if (data.user) {
        navigate("/dashboard");
        successToast(`Bienvenue ${data.user.name}`);
      }
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "Une erreur est survenue lors de l'enregistrement"
      );
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      setAuth(null);
      setIsAuthenticated(false);
      navigate("/");
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la déconnexion"
      );
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (form) => forgotPassword(form),
    onSuccess: (data) => {
      if (data) {
        navigate("/reset-password");
      }
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la demande de réinitialisation du mot de passe"
      );
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (form) => resetPassword(form),
    onSuccess: (data, form) => {
      if (data) {
        loginMutation.mutate({
          email: data.result.email,
          password: form.password,
        });
      }
    },
    onError: (error) => {
      errorToast(
        error.response?.data?.message ||
          "Une erreur est survenue lors de la réinitialisation du mot de passe"
      );
    },
  });

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isAuthenticated,
    AUTH,
    data: loginMutation.data,
    isLoadingLogin: loginMutation.isLoading,
    isLoadingRegister: registerMutation.isLoading,
    isLoggingOut: logoutMutation.isLoading,
    forgotPassword: forgotPasswordMutation.mutate,
    isLoadingForgotPassword: forgotPasswordMutation.isLoading,
    resetPassword: resetPasswordMutation.mutate,
    isLoadingResetPassword: resetPasswordMutation.isLoading,
  };
};

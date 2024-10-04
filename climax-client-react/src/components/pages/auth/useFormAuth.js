import { useState } from "react";
import { useAuth } from "../../../hooks/auth";
import { errorToast } from "../../../config/toaster";
import validateForm from "./validator";

const useFormAuth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",

    code: "",
  });

  const {
    login,
    register,
    isLoadingLogin,
    isLoadingRegister,

    forgotPassword,
    isLoadingForgotPassword,

    resetPassword,
    isLoadingResetPassword,
  } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const error = validateForm(formData, "login");
    if (error) {
      errorToast(error);
      return;
    }

    const credentials = {
      username: formData.username,
      password: formData.password,
    };

    login(credentials);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const error = validateForm(formData, "register");
    if (error) {
      errorToast(error);
      return;
    }

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    register(data);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    const error = validateForm(formData, "forgot");
    if (error) {
      errorToast(error);
      return;
    }

    const data = {
      email: formData.email,
    };

    forgotPassword(data);
  };

  const handleReset = (e) => {
    e.preventDefault();
    const error = validateForm(formData, "reset");
    if (error) {
      errorToast(error);
      return;
    }

    const data = {
      email: formData.email,
      code: formData.code,
      password: formData.password,
    };

    resetPassword(data);
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleLogin,
    handleRegister,
    isLoadingLogin,
    isLoadingRegister,

    handleForgot,
    isLoadingForgotPassword,

    handleReset,
    isLoadingResetPassword,
  };
};

export default useFormAuth;

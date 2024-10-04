import React from "react";
import { Link } from "react-router-dom";
import useFormAuth from "../useFormAuth";
import Form from "../../../ui/forms/Form";

function Login() {
  const { formData, handleChange, handleLogin, isLoadingLogin } = useFormAuth();
  const fields = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
      name: "username",
      value: formData.username,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
      value: formData.password,
    },
  ];
  return (
    <div>
      <div className="sign-in-from">
        <h1 className="mb-0 text-center">Sign in</h1>
        <p className="text-center text-dark">
          Enter your password and password to access admin panel.
        </p>
        <Form
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleLogin}
          buttonText="Sign in"
          isLoading={isLoadingLogin}
          formPage={"login"}
        />
        <div className="sign-info text-center">
          <span className="text-dark dark-color d-inline-block line-height-2">
            Don't have an account? <Link to={"/register"}>Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

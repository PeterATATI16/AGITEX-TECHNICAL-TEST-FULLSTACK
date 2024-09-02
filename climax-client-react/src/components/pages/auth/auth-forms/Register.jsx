import React from "react";
import { Link } from "react-router-dom";
import useFormAuth from "../useFormAuth";
import Form from "../../../ui/forms/Form";

function Register() {
  const { formData, handleChange, handleRegister, isLoadingRegister } =
    useFormAuth();

  const fields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter name",
      name: "name",
      value: formData.name,
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter email",
      name: "email",
      value: formData.email,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
      value: formData.password,
    },
    {
      id: "confirm_password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      name: "confirm_password",
      value: formData.confirm_password,
    },
  ];

  return (
    <div>
      <div className="sign-in-from">
        <h1 className="mb-0 text-center">Register</h1>
        <Form
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleRegister}
          buttonText="Register"
          isLoading={isLoadingRegister}
          formPage={"register"}
        />
        <div className="text-center mt-3">
          <span className="text-dark dark-color d-inline-block line-height-2">
            Already have an account? <Link to={"/"}>Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;

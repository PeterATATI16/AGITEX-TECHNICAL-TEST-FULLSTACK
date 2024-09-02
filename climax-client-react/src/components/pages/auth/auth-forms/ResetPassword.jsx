import React from "react";
import useFormAuth from "../useFormAuth";
import Form from "../../../ui/forms/Form";

function ResetPassword() {
  const { formData, handleChange, handleReset, isLoadingResetPassword } =
    useFormAuth();
  const fields = [
    {
      id: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter email",
      name: "email",
      value: formData.email,
    },
    {
      id: "code",
      label: "Code",
      type: "text",
      placeholder: "Enter Code",
      name: "code",
      value: formData.code,
    },
    {
      id: "password",
      label: "New password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
      value: formData.password,
    },
    {
      id: "confirm_password",
      label: "Confirm password",
      type: "password",
      placeholder: "Repeat password",
      name: "confirm_password",
      value: formData.confirm_password,
    },
  ];
  return (
    <div className=" bg-white sign-in-page-data">
      <div className="sign-in-from">
        <h1 className="mb-0">Reset Password</h1>
        <p className="text-dark">
          Enter your email address and the code to reset your password.
        </p>
        <Form
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleReset}
          buttonText="Reset password"
          isLoading={isLoadingResetPassword}
          formPage={"reset"}
        />
      </div>
    </div>
  );
}

export default ResetPassword;

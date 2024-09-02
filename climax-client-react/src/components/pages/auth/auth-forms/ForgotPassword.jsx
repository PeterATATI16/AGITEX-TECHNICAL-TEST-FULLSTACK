import React from "react";
import useFormAuth from "../useFormAuth";
import Form from "../../../ui/forms/Form";

function ForotPassword() {
  const { formData, handleChange, handleForgot, isLoadingForgotPassword } =
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
  ];
  return (
    <div className=" bg-white sign-in-page-data">
      <div className="sign-in-from">
        <h1 className="mb-0">Reset Password</h1>
        <p className="text-dark">
          Enter your email address and we'll send you an email with instructions
          to reset your password.
        </p>
        <Form
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleForgot}
          buttonText="Send code"
          isLoading={isLoadingForgotPassword}
          formPage={"forgot"}
        />
      </div>
    </div>
  );
}

export default ForotPassword;

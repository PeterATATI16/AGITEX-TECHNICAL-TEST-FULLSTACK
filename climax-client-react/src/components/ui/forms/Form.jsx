import React from "react";
import FormGroup from "./FormGroup";
import Button from "../buttons/Button";

function Form({
  fields,
  handleChange,
  handleSubmit,
  buttonText,
  isLoading,
  formPage,
  clss
}) {
  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormGroup
          key={field.name}
          id={field.id}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={field.value}
          handleChange={handleChange}
          formPage={formPage}
        />
      ))}
      <div className="sign-info text-center">
        <Button title={buttonText} loader={isLoading} progress={100} clss={clss}/>
      </div>
    </form>
  );
}

export default Form;

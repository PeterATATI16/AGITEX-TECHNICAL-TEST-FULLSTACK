import React from "react";
import { Link } from "react-router-dom";

function FormGroup(props) {
  const { id, label, type, placeholder, name, value, handleChange, formPage } =
    props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      {formPage === "login" && type === "password" && (
        <Link to={"/forgot-password"} className="float-right">
          Forgot password?
        </Link>
      )}
      <input
        type={type}
        className="form-control mb-0"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormGroup;

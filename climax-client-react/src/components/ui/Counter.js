import React from "react";
import { getLength, pluralize } from "../../utils/Util";

const Counter = ({ title, data }) => {
  const value = getLength(data);
  return (
    <button type="button" className="btn mb-1 iq-bg-primary">
      {pluralize(value, title)}{" "}
      <span className="badge badge-primary ml-2">{value}</span>
    </button>
  );
};

export default Counter;

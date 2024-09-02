import React from "react";

function LoadingButton({ title, loader, clss, action, icon }) {
  return (
    <button
      type="submit"
      className={clss ? clss : "btn btn-outline-primary d-block w-100 mb-2"}
      disabled={loader}
      onClick={action}
    >
      {loader ? (
        <span className="d-flex align-items-center">
          <span
            className="spinner-grow flex-shrink-0 me-2"
            role="status"
            style={{ width: "1rem", height: "1rem" }}
          ></span>
          <span>Traitement...</span>
        </span>
      ) : (
        <>
          {icon ? icon : <i className="fa fa-paper-plane"></i>}&nbsp;{title}
        </>
      )}
    </button>
  );
}

export default LoadingButton;

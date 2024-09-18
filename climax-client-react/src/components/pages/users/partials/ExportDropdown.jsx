import React from "react";
import Swal from "sweetalert2";
import { successToast } from "../../../../config/toaster";
import useAlert from "../../../../config/ShowAlert";

function ExportDropdown(props) {
  const { data, deleteAction, isDeleting, updateAction, isUpdating } = props;
  const { showConfirmation } = useAlert();

  const handleDelete = () => {
    showConfirmation({
      title: "Suppression !",
      text: `Etes vous sur de vouloir supprimer ${data.nom}?`,
      icon: "warning",
      confirmButtonText: "Oui, supprimé",
      cancelButtonText: "Non, annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAction(data.id);
      }
    });
  };
  return (
    <div className="iq-card-header-toolbar d-flex align-items-center">
      <div className="dropdown show">
        <span
          className="dropdown-toggle text-primary"
          id="dropdownMenuButton5"
          data-toggle="dropdown"
          aria-expanded="true"
        >
          <i className="ri-more-fill" />
        </span>
        <div
          className="dropdown-menu dropdown-menu-right "
          aria-labelledby="dropdownMenuButton5"
          x-placement="bottom-end"
          style={{
            position: "absolute",
            willChange: "transform",
            top: 0,
            left: 0,
            transform: "translate3d(-138px, 22px, 0px)",
          }}
        >
          <button
            type="button"
            className="dropdown-item"
            href="#"
            onClick={handleDelete}
          >
            <i className="ri-delete-bin-6-fill mr-2" />
            Supprimer
          </button>
          <a className="dropdown-item" href="#">
            <i className="ri-pencil-fill mr-2" />
            Modifier
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExportDropdown;

import Swal from "sweetalert2";
const useAlert = () => {
  const showAlert = (options) => {
    Swal.fire(options);
  };

  const showConfirmation = (options) => {
    return Swal.fire({
      ...options,
      showCancelButton: true,
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
    });
  };

  return { showAlert, showConfirmation };
};

export default useAlert;

import React, { useState } from "react";
import { useUsers } from "../../../hooks/users";
import Loader from "../../ui/loader/Loader";
import Breadcrumb from "../../ui/Breadcrumb";
import { filterData, getLength } from "../../../utils/Util";
import Empty from "../../ui/Empty";
import Counter from "../../ui/Counter";
import Pagination from "../../ui/pagination/Pagination";
import ExportDropdown from "./partials/ExportDropdown";
import { errorToast } from "../../../config/toaster";
import LoadingButton from "../../ui/buttons/LoadingButton";
import ICON from "../../ui/ICONS/ICON";

function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");
  const { users, isLoadingUsers, importClients, isImportingClients } =
    useUsers();

  const filterKeys = ["nom", "prenom", "profession", "age", "salaire"];
  const filteredUsers = filterData(users, searchTerm, filterKeys);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredUsers?.length / itemsPerPage);
  const paginatedUsers = filteredUsers?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const breadcrumbItems = [
    { label: "Tableau de bord", href: "/", icon: "ri-home-4-line" },
    { label: "Clients" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setFilePreview(reader.result);
    };
    reader.readAsText(file);
  };

  const handleImport = () => {
    if (selectedFile) {
      importClients(selectedFile);
    } else {
      errorToast("Veuillez sélectionner un fichier à importer.");
    }
  };

  return (
    <>
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-header d-flex ">
              <div className="iq-header-title">
                <h4 className="card-title">
                  <Counter title={"Client"} data={filteredUsers} />
                </h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="row justify-content-between">
                <div className="col-sm-12 col-md-8">
                  <label htmlFor="">Importer la liste de clients à partir d'un fichier : </label>{" "}
                  <input type="file" onChange={handleFileChange} />
                </div>
                <LoadingButton title={"Importer"} loader={isImportingClients} action={handleImport} icon={ICON.add_ico} clss={"btn btn-primary d-block w-25"}/>
              </div>
              {filePreview && (
                <div className="row mt-4">
                  <div className="col-sm-12 col-md-6">
                    <div className="file-preview p-3" style={{ whiteSpace: "pre-wrap", backgroundColor: "#f8f9fa", borderRadius: "5px", overflowY: "auto", maxHeight: "200px" }}>
                      {filePreview}
                    </div>
                  </div>
                </div>
              )}
              <div className="table-responsive">
                <div className="row justify-content-between">
                  <div className="col-sm-12 col-md-6">
                    <div
                      id="user_list_datatable_info"
                      className="dataTables_filter"
                    >
                      <form className="mr-3 position-relative">
                        <div className="form-group mb-0">
                          <input
                            type="search"
                            className="form-control"
                            id="exampleInputSearch"
                            placeholder="Recherchez"
                            aria-controls="user-list-table"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            title="Vous pouvez rechercher par le nom , le prénom, l'age, la profession, ou le salaire du client"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <table
                  id="user-list-table"
                  className="table table-striped table-bordered mt-4"
                  role="grid"
                  aria-describedby="user-list-page-info"
                >
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Nom</th>
                      <th>Prénom</th>
                      <th>Age</th>
                      <th>Profession</th>
                      <th>Salaire</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoadingUsers ? (
                      <tr>
                        <td colSpan="6" className="text-center">
                          <Loader />
                        </td>
                      </tr>
                    ) : (
                      <>
                        {getLength(paginatedUsers) !== 0 ? (
                          paginatedUsers?.map((user) => (
                            <tr key={user.id}>
                              <td className="text-center">
                                <img
                                  className="rounded img-fluid avatar-40"
                                  src="assets/images/user/01.jpg"
                                  alt="profile"
                                />
                              </td>
                              <td>{user.nom}</td>
                              <td>{user.prenom}</td>
                              <td>{user.age}</td>
                              <td>{user.profession}</td>
                              <td>{user.salaire + " k€"}</td>
                              <td>
                                <div className="col-sm-12 col-md-6">
                                  <div className="user-list-files d-flex float-right">
                                    <ExportDropdown />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              <Empty />
                            </td>
                          </tr>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
                data={filteredUsers}
                entry={"client"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;

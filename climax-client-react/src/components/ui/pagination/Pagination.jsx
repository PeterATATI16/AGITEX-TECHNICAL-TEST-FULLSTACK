import React from "react";
import { getLength, pluralize } from "../../../utils/Util";

function Pagination({ currentPage, totalPages, onPageChange, data, entry }) {
  const count = getLength(data);
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="row justify-content-between mt-3">
      <div id="user-list-page-info" className="col-md-6">
        <span>
           Page {currentPage} sur {totalPages} de {count}{" "}
          {pluralize(count, entry)}
        </span>
      </div>
      <div className="col-md-6">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end mb-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Précédent
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Suivant
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;

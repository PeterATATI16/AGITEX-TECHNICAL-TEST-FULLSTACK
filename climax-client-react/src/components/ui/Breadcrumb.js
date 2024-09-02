import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb iq-bg-primary mb-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.href}>
                {item.icon && <i className={`${item.icon} mr-1 float-left`} />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;

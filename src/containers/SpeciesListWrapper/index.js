import React from "react";
import PropTypes from "prop-types";

import Pagination from "@/components/Pagination";

import "./styles.scss";

function SpeciesListWrapper({
  loadPage,
  nextPage,
  prevPage,
  totalPages,
  page,
  children,
}) {
  return (
    <nav className="flex-column flex-grow overflow-hidden vertical-center horizontal-center species-list-wrapper-view">
      <Pagination
        loadPage={loadPage}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
        page={page}
      />
      <ul className="flex-column species-list-wrapper overflow-auto">
        {children}
      </ul>
    </nav>
  );
}

SpeciesListWrapper.propTypes = {
  children: PropTypes.node,
  loadPage: PropTypes.func,
  nextPage: PropTypes.number,
  prevPage: PropTypes.number,
  totalPages: PropTypes.number,
  page: PropTypes.number,
};

export default SpeciesListWrapper;

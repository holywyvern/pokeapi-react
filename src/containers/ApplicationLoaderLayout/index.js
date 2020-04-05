import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import Loader from "@/containers/Loader";

import "./styles.scss";

function ApplicationLoaderLayout({ children, loading }) {
  const classes = cx("language-loader", {
    loading,
  });
  return (
    <>
      {children}
      <div className={classes}>
        <Loader />
      </div>
    </>
  );
}

ApplicationLoaderLayout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

export default ApplicationLoaderLayout;

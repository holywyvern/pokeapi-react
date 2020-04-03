import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import cx from "classnames";

import { actions as localeActions } from "@/state/reducers/locales";

import useActions from "@/hooks/useActions";

import Loader from "@/components/Loader";

import "./styles.scss";

function ApplicationLoader({ children }) {
  const actions = useActions(localeActions);
  const { loading } = useSelector((state) => state.locales);
  useEffect(() => {
    actions.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

ApplicationLoader.propTypes = {
  children: PropTypes.node,
};

export default ApplicationLoader;

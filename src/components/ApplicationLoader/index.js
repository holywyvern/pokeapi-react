import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { actions as localeActions } from "@/state/reducers/locales";
import { actions as speciesActions } from "@/state/reducers/species";

import useActions from "@/hooks/useActions";

import ApplicationLoaderLayout from "@/containers/ApplicationLoaderLayout";

const pageSelector = ({ species, locales }) => ({
  loading: [species, locales].some((i) => i.loading),
  nextPage: species.nextPage,
});

function ApplicationLoader({ children }) {
  const i18n = useActions(localeActions);
  const species = useActions(speciesActions);
  const { loading, nextPage } = useSelector(pageSelector);
  useEffect(() => {
    i18n.init();
    species.loadPage(nextPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ApplicationLoaderLayout loading={loading}>
      {children}
    </ApplicationLoaderLayout>
  );
}

ApplicationLoader.propTypes = {
  children: PropTypes.node,
};

export default ApplicationLoader;

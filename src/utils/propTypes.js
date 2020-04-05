import PropTypes from "prop-types";

export const internationalString = PropTypes.shape({
  en: PropTypes.string,
  es: PropTypes.string,
  fr: PropTypes.string,
  gr: PropTypes.string,
  it: PropTypes.string,
  ja: PropTypes.string,
  ko: PropTypes.string,
  "zh-Hant": PropTypes.string,
  "zh-Hans": PropTypes.string,
});

export const speciesSummary = PropTypes.shape({
  id: PropTypes.number,
  names: internationalString,
});

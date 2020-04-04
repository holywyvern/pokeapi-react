import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

function LanguageButton({ currentLocale, locale, label, onChange }) {
  return (
    <button
      className="language-button"
      onClick={() => onChange(locale)}
      disabled={locale === currentLocale}
    >
      {label}
    </button>
  );
}

LanguageButton.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguageButton;

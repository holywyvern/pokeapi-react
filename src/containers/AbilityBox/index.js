import React from "react";
import PropTypes from "prop-types";

import cx from "classnames";

import "./styles.scss";

function AbilityBox({ ability, language, hidden, t }) {
  const classes = cx("ability-box", { hidden });
  return (
    <div className={classes}>
      <h4 className="flex-row title">
        <span className="flex-grow">{ability.names[language]}</span>
        {hidden && <span>{t("hidden")}</span>}
      </h4>
      <p className="contents">{ability.flavorText[language]}</p>
    </div>
  );
}

AbilityBox.propTypes = {
  ability: PropTypes.any,
  language: PropTypes.string,
  hidden: PropTypes.bool,
  t: PropTypes.func,
};

export default AbilityBox;

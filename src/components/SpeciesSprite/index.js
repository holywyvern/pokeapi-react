import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import cx from "classnames";

import Loader from "@/containers/Loader";

import { findImage } from "./utils";

import "./styles.scss";

function SpeciesSprite({ moved }) {
  const selectedSpecies = useSelector((state) => state.species.selectedSpecies);
  const classes = cx(
    "flex-row flex-grow vertical-center horizontal-center pokedex-image-wrapper",
    { moved }
  );
  return (
    <div className={classes}>
      {selectedSpecies ? (
        <img className="sprite" alt="sprite" src={findImage(selectedSpecies)} />
      ) : (
        <Loader fixed />
      )}
    </div>
  );
}

SpeciesSprite.propTypes = {
  moved: PropTypes.bool,
};

export default SpeciesSprite;

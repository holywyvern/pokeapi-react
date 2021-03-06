import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

import cx from "classnames";

import SafeImage from "@/components/SafeImage";
import Loader from "@/containers/Loader";

import "./styles.scss";

const pageSelector = (state) => state.species.selectedSpecies;

function SpeciesSprite({ moved }) {
  const selectedSpecies = useSelector(pageSelector);
  const classes = cx(
    "flex-row flex-grow vertical-center horizontal-center pokedex-image-wrapper",
    { moved }
  );
  return (
    <div className={classes}>
      {selectedSpecies ? (
        <SafeImage
          key={selectedSpecies.id}
          images={selectedSpecies.images}
          className="sprite"
        />
      ) : (
        <Loader fixed className="sprite" />
      )}
    </div>
  );
}

SpeciesSprite.propTypes = {
  moved: PropTypes.bool,
};

export default SpeciesSprite;

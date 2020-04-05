import React, { useState } from "react";
import PropTypes from "prop-types";

import Loader from "@/containers/Loader";

function SafeImage({
  images,
  alt,
  failedComponent: LoaderComponent,
  ...props
}) {
  const [index, setIndex] = useState(0);
  if (index >= images.length) {
    return <LoaderComponent />;
  }
  const handleError = (error) => {
    error.target.error = null;
    setIndex(index + 1);
  };
  return <img {...props} onError={handleError} src={images[index]} alt={alt} />;
}

SafeImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  failedComponent: PropTypes.any,
  alt: PropTypes.string,
};

SafeImage.defaultProps = {
  failedComponent: Loader,
};

export default SafeImage;

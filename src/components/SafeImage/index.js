import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "@/containers/Loader";

function SafeImage({
  images,
  alt,
  failedComponent: LoaderComponent,
  className,
  ...props
}) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const image = useMemo(() => new Image(), []);
  useEffect(() => {
    image.src = images[index];
    image.onerror = () => {
      image.error = null;
      setIndex(index + 1);
    };
    image.onload = () => setLoaded(true);
  }, [images, image, index]);
  if (index >= images.length) {
    return <LoaderComponent fixed className={className} />;
  }
  if (!loaded) {
    return <LoaderComponent className={className} />;
  }
  return <img {...props} className={className} src={image.src} alt={alt} />;
}

SafeImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  failedComponent: PropTypes.any,
  className: PropTypes.string,
  alt: PropTypes.string,
};

SafeImage.defaultProps = {
  failedComponent: Loader,
};

export default SafeImage;

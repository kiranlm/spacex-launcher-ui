import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { PLACEHOLDER_IMAGE } from "../../../constants";

/**
 * Component for image lazy loading
 *
 * @param {String} src | Source image
 * @param {String} alt | Alt for image
 *
 * @returns {HTMLElement} | image tag with loaded image src
 */
function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <img
      loading="lazy"
      src={!loaded ? PLACEHOLDER_IMAGE : src}
      alt={alt}
      ref={imgRef}
      onLoad={() => setLoaded(true)}
      className={loaded ? "loaded" : ""}
      width="170"
      height="170"
    />
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default LazyImage;
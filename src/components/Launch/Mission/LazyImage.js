import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Component for image lazy loading
 *
 * @param {String} src | Source image
 * @param {String} alt | Alt for image
 *
 * @returns {HTMLElement} | image tag with loaded image src
 */
function LazyImage({ src, alt }) {
  const imgRef = useRef();
  useEffect(() => {
    let observer;
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imgRef.current.src = src
          observer = observer.disconnect()
        }
      })
    })
    observer.observe(imgRef.current);
    return () => observer && observer.disconnect()
  }, [src])
  return (
    <img
      alt={alt}
      ref={imgRef}
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

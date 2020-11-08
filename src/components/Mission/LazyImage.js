import React, { useState, useEffect, useRef } from "react";

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
      src={src}
      alt={alt}
      ref={imgRef}
      onLoad={() => setLoaded(true)}
      className={loaded ? "loaded" : ""}
      width="170"
      height="170"
    />
  );
}
export default LazyImage;

import React, { useEffect, useRef, useState } from "react";

export default function Image({ className, src, objectFit, ...props }) {
  const imgRef = useRef({} as any);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current.complete) setImgLoaded(true);
  }, []);

  function handleOnLoad() {
    setImgLoaded(true);
  }

  return (
    <div className={`relative pointer-events-none`}>
      {!imgLoaded && (
        <div
          className={`absolute w-full h-full z-0 bg-gray-lighter ${
            className || ""
          }`}
          aria-hidden="true"
        />
      )}

      <picture>
        <img
          {...props}
          ref={imgRef}
          onLoad={handleOnLoad}
          className={className}
          src={src}
        />
      </picture>
    </div>
  );
}

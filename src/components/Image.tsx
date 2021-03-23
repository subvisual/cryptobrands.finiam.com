import React, { useEffect, useRef, useState } from "react";

const imageLoader = (require as any).context(
  `../../public?webp`,
  true,
  /\.(png|jpeg|jpg)$/,
);

const webpLoader = (require as any).context(
  `../../public?webp`,
  true,
  /\.(png|jpeg|jpg)$/,
);

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
        <source srcSet={webpLoader(`.${src}`)} type="image/webp" />
        <source srcSet={imageLoader(`.${src}`)} type="image/jpeg" />
        <img
          {...props}
          ref={imgRef}
          onLoad={handleOnLoad}
          className={className}
          src={imageLoader(`.${src}`)}
        />
      </picture>
    </div>
  );
}

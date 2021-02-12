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

export default function Image({ src, ...props }) {
  const imgRef = useRef({} as any);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current.complete) setImgLoaded(true);
  }, []);

  function handleOnLoad() {
    setImgLoaded(true);
  }

  return (
    <div className="relative h-full">
      <div
        className="absolute w-full h-full z-0 bg-gray-lighter"
        aria-hidden="true"
      />

      <picture>
        <source srcSet={webpLoader(`.${src}`)} type="image/webp" />
        <source srcSet={imageLoader(`.${src}`)} type="image/jpeg" />
        <img
          {...props}
          className={`bg-gray-lightest opacity-0 transition-opacity absolute w-full h-full z-10 ${
            imgLoaded ? "opacity-100" : ""
          }`}
          onLoad={handleOnLoad}
          src={imageLoader(`.${src}`)}
        />
      </picture>
    </div>
  );
}

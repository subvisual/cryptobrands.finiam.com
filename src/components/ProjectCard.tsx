import React from "react";
import ExternalLinkLogo from "./ExternalLinkLogo";
import Image from "./Image";

export default function ProjectCard({
  link,
  title,
  image_path,
  link_name,
  studio_name,
  studio_link,
}) {
  return (
    <div className="bg-gray-lightest transition-transform duration-100 ease-in-out transform hover:scale-101 rounded-sm overflow-hidden">
      <div className="hover:bg-purple-lighter relative">
        <a
          className="absolute w-full h-full"
          href={link}
          target="_blank"
          rel="noopener"
          aria-label={title}
        ></a>
        <div className="p-2 pb-0">
          <Image
            className="w-full sm:min-h-250 md:min-h-180 lg:min-h-250"
            src={image_path}
            alt="Project's showcase"
            layout="fill"
            loading="lazy"
            objectFit="cover"
          />
        </div>
        <div className="px-4 pt-2 pb-4">
          <div className="flex items-center">
            <h1 className="text-base text-purple-dark mr-2 font-bold">
              {title}
            </h1>

            <ExternalLinkLogo />
          </div>
          <a
            className="text-tiny text-gray-light font-sans"
            href={link}
            target="_blank"
            rel="noopener"
            aria-label={title}
          >
            {link_name}
          </a>
        </div>
      </div>
      <div
        className={`border-t border-gray-lighter relative ${
          studio_name ? "hover:bg-purple-lighter" : ""
        }`}
      >
        <div className="px-4 py-3 text-tiny text-gray-light flex flex-wrap items-center font-sans">
          {studio_name ? (
            <>
              <a
                className="absolute w-full h-full z-20"
                href={studio_link}
                target="_blank"
                rel="noopener"
                aria-label={studio_name}
              ></a>
              <span className="mr-1">Designed by</span>
              <span className="text-purple-dark border-b border-purple-dark inline-block mr-2">
                {studio_name}
              </span>
              <ExternalLinkLogo />
            </>
          ) : (
            <>
              <span className="mr-1">Designed by</span>
              <span className="text-purple-dark inline-block flex-grow mr-1">
                Unknown :(
              </span>
              <a
                href="mailto:cryptobrands@finiam.com?subject=I%20know%20who%20designed%20this!"
                className="text-purple-dark border-b border-purple-dark"
              >
                I know!
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

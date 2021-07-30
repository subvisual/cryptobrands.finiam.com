import React from "react";
import Image from "next/image";
import sanityLoader from "root/utils/sanityLoader";
import ExternalLinkLogo from "./ExternalLinkLogo";
import ProjectCardUpvote from "./ProjectCardUpvote";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-lightest transition-transform duration-100 ease-in-out transform hover:scale-101 rounded-sm overflow-hidden">
      <div className="hover:bg-purple-lighter relative">
        <a
          className="absolute w-full h-full"
          href={project.link}
          target="_blank"
          rel="noopener"
          aria-label={project.name}
        ></a>
        <div className="p-2 pb-0">
          <div className="relative w-full min-h-32 sm:min-h-64 md:min-h-44 lg:min-h-44">
            <Image
              loader={sanityLoader}
              src={project.imagePath}
              alt="Project's showcase"
              layout="fill"
              loading="lazy"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={project.imagePlaceholder}
            />
          </div>
        </div>
        <div className="px-4 pt-2 pb-4">
          <div className="flex items-center">
            <h1 className="text-base text-purple-dark mr-2 font-bold">
              {project.name}
            </h1>

            <ExternalLinkLogo />
          </div>
          <a
            className="text-tiny text-gray-light font-sans"
            href={project.link}
            target="_blank"
            rel="noopener"
            aria-label={project.name}
          >
            {project.linkText}
          </a>
        </div>
      </div>
      <div
        className={`border border-gray-lighter relative ${
          project.studioName ? "hover:bg-purple-lighter" : ""
        }`}
      >
        <div className="px-4 py-3 text-tiny text-gray-light flex flex-wrap items-center font-sans">
          {project.studioName ? (
            <>
              <a
                className="absolute w-full h-full z-20"
                href={project.studioUrl}
                target="_blank"
                rel="noopener"
                aria-label={project.studioName}
              ></a>
              <span className="mr-1 border-b border-transparent">
                Designed by
              </span>
              <span className="text-purple-dark border-b border-purple-dark inline-block mr-2">
                {project.studioName}
              </span>
              <ExternalLinkLogo />
            </>
          ) : (
            <>
              <span className="mr-1 border-b border-transparent">
                Designed by
              </span>
              <span className="text-purple-dark border-b border-transparent inline-block flex-grow mr-1">
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

      <ProjectCardUpvote project={project} />
    </div>
  );
}

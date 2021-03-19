import React from "react";
import getProjects from "../../backend/getProjects";
import ProjectCard from "../components/ProjectCard";

export default function HomePage({ projects }) {
  return (
    <>
      <div className="custom-rings" aria-label="Pretty decorative rings"></div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <a
        href="https://github.com/finiam/cryptobrands.finiam.com"
        className="block mt-4 text-white text-tiny text-opacity-75"
      >
        <span className="border-b border-white border-opacity-75">
          Open-source
        </span>{" "}
        project ❤
      </a>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

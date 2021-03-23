import React, { ReactNode, useState } from "react";
import useIsMounted from "../hooks/useIsMounted";
import Heart from "./Heart";

function ProjectCardContainer({ children }: { children?: ReactNode }) {
  return (
    <div className="px-4 py-2 text-tiny text-gray-light font-sans">
      {children}
    </div>
  );
}

export default function ProjectCardUpvote({ project }: { project: Project }) {
  const isMounted = useIsMounted();
  const [upvoting, setUpvoting] = useState(false);
  const [votedThisSession, setVotedThisSession] = useState(false);
  const [error, setError] = useState(null);

  const alreadyVoted = isMounted
    ? window.localStorage.getItem(project.name) === "true"
    : false;

  async function handleUpvote() {
    if (alreadyVoted) return;

    document.documentElement.classList.add("in-progress");
    setUpvoting(true);
    try {
      const response = await fetch("/api/upvoteProject", {
        method: "post",
        body: JSON.stringify({ projectName: project.name }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) setError(true);
      else window.localStorage.setItem(project.name, "true");
    } catch (e) {
      setError(e);
    } finally {
      document.documentElement.classList.remove("in-progress");
      setUpvoting(false);
      setVotedThisSession(true);
    }
  }

  if (upvoting) {
    return (
      <ProjectCardContainer>
        <p>Upvoting...</p>
      </ProjectCardContainer>
    );
  }

  if (error) {
    return (
      <ProjectCardContainer>
        <p>Error! Contact us if this persists.</p>
      </ProjectCardContainer>
    );
  }

  const buttonDisabled = !isMounted || upvoting;

  return (
    <ProjectCardContainer>
      {alreadyVoted && !votedThisSession && (
        <div
          className="flex items-center space-x-2 cursor-help"
          title="You already upvoted this project!"
        >
          <Heart className="fill-red" />

          <span>
            Votes: <span className="text-black">{project.votes}</span>
          </span>
        </div>
      )}

      {!alreadyVoted && !votedThisSession && (
        <button
          onClick={handleUpvote}
          disabled={buttonDisabled}
          className={`flex items-center space-x-2 cursor-pointer ${
            buttonDisabled ? "cursor-wait" : "group hover:text-red"
          }`}
        >
          <Heart className="fill-transparent stroke-black group-hover:stroke-red" />

          <span>
            Votes:{" "}
            <span className="text-black group-hover:text-red">
              {project.votes}
            </span>
          </span>
        </button>
      )}

      {votedThisSession && <p>Thank you. {project.title} to the moon! 🚀</p>}
    </ProjectCardContainer>
  );
}

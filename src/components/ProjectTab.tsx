import { useState } from "react";
import MovieRoom from "./MovieRoom";
import IdealIdea from "./IdealIdea";
import Portfolio from "./Portfolio";
import TurnOff from "./TurnOff";

const projects = [
  { name: "MOVIE ROOM", content: <MovieRoom /> },
  { name: "ideal idea", content: <IdealIdea /> },
  { name: "Turn Off", content: <TurnOff /> },
  { name: "Portfolio", content: <Portfolio /> },
];

function ProjectTab() {
  const [select, setSelect] = useState(0);

  return (
    <div className="w-full flex flex-col font-scd my-12">
      <ul className="flex text-center max-sm:text-sm">
        {projects.map((project, index) => (
          <li
            className="flex-1 p-4 cursor-pointer transition-[filter] bg-white hover:brightness-95 dark:bg-black dark:hover:brightness-200"
            onClick={() => setSelect(index)}
            key={project.name}
          >
            {project.name}
          </li>
        ))}
      </ul>
      <div
        className={`w-[${
          100 / projects.length
        }%] h-1 mb-2 bg-green transition translate-x-[${select * 100}%]`}
      />
      <div>{projects[select].content}</div>
    </div>
  );
}

export default ProjectTab;

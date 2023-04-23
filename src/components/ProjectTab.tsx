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

  const handleClick = (index: number) => {
    setSelect(index);
  };
  //border-b-2 border-green
  return (
    <div className="w-full flex flex-col font-scd my-12">
      <ul className="flex text-center max-sm:text-sm">
        {projects.map((project, index) => (
          <li
            className="flex-1 p-4 cursor-pointer transition-[filter] bg-white hover:brightness-95 dark:bg-black dark:hover:brightness-200"
            onClick={() => handleClick(index)}
            key={project.name}
          >
            {project.name}
          </li>
        ))}
      </ul>
      <div
        className={`flex w-[25%] h-1 mb-2 bg-green transition translate-x-[${
          select * 100
        }%]`}
      />
      <div>{projects[select].content}</div>
    </div>
  );
}

export default ProjectTab;

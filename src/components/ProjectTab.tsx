import { useState } from "react";
import MovieRoom from "./MovieRoom";
import Portfolio from "./Portfolio";
import TurnOff from "./TurnOff";

const projects = [
  { name: "MOVIE ROOM", content: <MovieRoom /> },
  { name: "Turn Off", content: <TurnOff /> },
  { name: "Portfolio", content: <Portfolio /> },
];

function ProjectTab() {
  const [select, setSelect] = useState(0);

  const handleClick = (index: number) => {
    setSelect(index);
  };

  return (
    <div className="max-w-[800px] w-[90%] flex flex-col font-scd my-12">
      <ul className="flex text-center mb-2">
        {projects.map((project, index) => (
          <li
            className={`flex-1 p-4 cursor-pointer transition-[filter] bg-white hover:brightness-95 dark:bg-black dark:hover:brightness-200 ${
              select === index && "border-b-2 border-green"
            }`}
            onClick={() => handleClick(index)}
            key={project.name}
          >
            {project.name}
          </li>
        ))}
      </ul>
      <div>{projects[select].content}</div>
    </div>
  );
}

export default ProjectTab;

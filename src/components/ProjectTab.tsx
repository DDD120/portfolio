import { useState } from "react"
import MovieRoom from "./MovieRoom"
import IdealIdea from "./IdealIdea"
import Etc from "./Etc"
import TurnOff from "./TurnOff"

const projects = [
  { id: 0, name: "MOVIE ROOM", content: <MovieRoom /> },
  { id: 1, name: "ideal idea", content: <IdealIdea /> },
  { id: 2, name: "Turn Off", content: <TurnOff /> },
  { id: 3, name: "etc.", content: <Etc /> },
]

function ProjectTab() {
  const [select, setSelect] = useState(0)

  return (
    <div className="w-full flex flex-col font-scd my-12">
      <ul className="flex text-center max-sm:text-sm">
        {projects.map((project) => (
          <li
            className="flex-1 p-4 cursor-pointer transition-[filter] bg-white dark:bg-black"
            onClick={() => setSelect(project.id)}
            key={project.id}
          >
            {project.name}
          </li>
        ))}
      </ul>
      <div
        className={`w-[25%] h-1 mb-2 bg-green rounded-md transition`}
        style={{ transform: `translateX(${select * 100}%)` }}
      />
      <div>{projects[select].content}</div>
    </div>
  )
}

export default ProjectTab

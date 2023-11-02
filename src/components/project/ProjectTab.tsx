import { useState } from "react"
import MovieRoom from "./MovieRoom"
import IdealIdea from "./IdealIdea"
import Etc from "./Etc"
import TurnOff from "./TurnOff"
import MafiaGMaster from "./MafiaGMaster"

const projects = [
  { id: 0, name: "마피아 G 마스터", content: <MafiaGMaster /> },
  { id: 1, name: "MOVIE ROOM", content: <MovieRoom /> },
  { id: 2, name: "ideal idea", content: <IdealIdea /> },
  { id: 3, name: "Turn Off", content: <TurnOff /> },
  { id: 4, name: "etc.", content: <Etc /> },
]

function ProjectTab() {
  const [select, setSelect] = useState(0)

  return (
    <div className="w-full flex flex-col font-scd my-12">
      <div className="mb-5">
        {projects.map(({ id, name }) => (
          <span
            className={`inline-flex rounded-lg py-2 px-4 cursor-pointer transition-[filter] bg-white dark:bg-black ${
              select === id && "text-green bg-neutral-200 dark:bg-neutral-200"
            }`}
            onClick={() => setSelect(id)}
            key={id}
          >
            {name}
          </span>
        ))}
      </div>

      <div>{projects[select].content}</div>
    </div>
  )
}

export default ProjectTab

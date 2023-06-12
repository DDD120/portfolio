import { ReactComponent as Github } from "@/assets/images/aboutme-github.svg"
import { ReactComponent as Tistory } from "@/assets/images/aboutme-tistory.svg"
import { ReactComponent as Resume } from "@/assets/images/aboutme-resume.svg"

interface Props {
  name: string
}

interface ArchivingType {
  [key: string]: {
    link: string
    icon: JSX.Element
  }
}

const Archiving: ArchivingType = {
  깃허브: {
    link: "https://github.com/DDD120",
    icon: <Github className="w-8 h-8 fill-white" />,
  },
  블로그: {
    link: "https://ddd120.tistory.com/",
    icon: <Tistory className="w-8 h-8 fill-white" />,
  },
  이력서: {
    link: "",
    icon: <Resume className="w-7 h-7 fill-white" />,
  },
}

function ArchivingItem({ name }: Props) {
  return (
    <a
      href={Archiving[name].link}
      target="_blank"
      className="p-3 bg-white hover:brightness-90 rounded-xl w-24 transition-[filter] dark:bg-black dark:hover:brightness-150"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-lsy mb-2">{name}</h3>
        <div className="bg-black w-12 h-12 rounded-xl flex justify-center items-center">
          {Archiving[name].icon}
        </div>
      </div>
    </a>
  )
}

export default ArchivingItem

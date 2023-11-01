import Heading from "@components/Heading"
import ProjectTab from "@components/project/ProjectTab"

function Project() {
  return (
    <section
      id="project"
      className="flex flex-col items-center my-12 max-w-[800px] w-[90%]"
    >
      <Heading>PROJECT</Heading>
      <ProjectTab />
    </section>
  )
}

export default Project

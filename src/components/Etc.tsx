import ProjectTemplate, { ProjectInfo } from "./ProjectTemplate"

const info: ProjectInfo = {
  title: "Portfolio",
  siteUrl: "https://ddd120.github.io/portfolio",
  description: "포토폴리오 사이트",
  skills: ["React.js", "Tailwind CSS", "TypeScript"],
  githubUrl: "https://github.com/DDD120/portfolio",
}

function Etc() {
  return (
    <ProjectTemplate info={info}>
      <p>현재 보고 있는 사이트입니다.</p>
      <p>
        빌드 도구인 <b>vite</b>를 사용하여 프로젝트를 생성 및 빌드하였습니다.
        기존의 많이 사용하던 웹팩과 비교하여 더 빠른 속도를 경험하였습니다.
      </p>
      <p>
        <b>Tailwind CSS</b>를 사용하여 빠른 스타일 지정 및 비교적 쉽게 다크
        모드를 적용하였습니다.
      </p>
      <p>
        심플하고 깔끔한, 일관성 있는 디자인과 함께 저에 대해 알 수 있도록 내용을
        최대한 내포할 수 있도록 구성하였습니다.
      </p>
    </ProjectTemplate>
  )
}

export default Etc

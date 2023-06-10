import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate"
import IMG1 from "@/assets/images/project-turn-off-1.png"
import IMG2 from "@/assets/images/project-turn-off-2.png"
import IMG3 from "@/assets/images/project-turn-off-3.png"
import IMG4 from "@/assets/images/project-turn-off-4.png"

const images: ProjectImages[] = [
  { src: IMG1, alt: "Turn Off 메인 페이지" },
  { src: IMG2, alt: "Turn Off 웹툰 장면" },
  { src: IMG3, alt: "Turn Off 웹툰 장면" },
  { src: IMG4, alt: "Turn Off 웹툰 장면" },
]

const info: ProjectInfo = {
  title: "Turn Off",
  siteUrl: "https://turn-off.netlify.app",
  description: "사용자의 상호작용을 통해 진행되는 인터랙티브 웹툰",
  skills: ["Gatsby", "styled-components", "Framer Motion"],
  githubUrl: "https://github.com/DDD120/turn-off",
  reviewUrl: "https://ddd120.tistory.com/49",
}

function TurnOff() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>
        졸업작품으로 제작하게 된 프로젝트입니다. 영상문화학과에서 배운 경험과 웹
        개발이 융합된 콘텐츠를 만들고 싶어 고민하다가 사용자 상호작용을 기반으로
        하는 웹툰을 제작하게 되었습니다.
      </p>
      <p>
        <b>Gatsby</b>를 사용하여 프로젝트를 개발하였습니다. 이미지가 많은
        프로젝트임을 고려하여 <b>gatsby-plugin-image</b> 외 이미지 플러그인을
        사용하여 이미지 최적화를 하였습니다. 또한 이미지 사이즈 줄이기, webp로
        확장자를 변경하였습니다.
      </p>
      <p>
        <b>Framer Motion</b>를 사용하여 다양한 UI 애니메이션 효과와 적용하였고,
        클릭, 입력 등의 사용자의 상호작용을 처리하였습니다.
      </p>
      <p>
        Lighthouse을 사용하여 웹 성능을 측정하였고, 진행 별로 Gatsby의
        createPages API과 코드 스플리팅을 적용하여 기존보다 FCP(First Contentful
        Paint)를 1.8초 감소시켰습니다.
      </p>
      <p>
        이외에도 전체 화면 기능, Local Storage를 통한 진행 단계를 저장 등을 통해
        사용자 경험을 향상시켰습니다.
      </p>
      <p>
        졸업작품 제출을 위해 <b>Electron</b>를 사용하여 쉽게 데스크탑
        애플리케이션으로 배포하였습니다.
      </p>
    </ProjectTemplate>
  )
}

export default TurnOff

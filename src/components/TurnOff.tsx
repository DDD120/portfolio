import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate";
import IMG1 from "@/assets/images/project-turn-off-1.png";
import IMG2 from "@/assets/images/project-turn-off-2.png";
import IMG3 from "@/assets/images/project-turn-off-3.png";
import IMG4 from "@/assets/images/project-turn-off-4.png";

const images: ProjectImages[] = [
  { src: IMG1, alt: "Turn Off 메인 페이지" },
  { src: IMG2, alt: "Turn Off 웹툰 장면" },
  { src: IMG3, alt: "Turn Off 웹툰 장면" },
  { src: IMG4, alt: "Turn Off 웹툰 장면" },
];

const info: ProjectInfo = {
  title: "Turn Off",
  siteUrl: "https://turn-off.netlify.app",
  description: "졸업작품 인터랙티브 웹툰",
  skills: ["Gatsby", "styled-components", "framer-motion"],
  githubUrl: "https://github.com/DDD120/turn-off",
  reviewUrl: "https://ddd120.tistory.com/49",
};

function TurnOff() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>졸업작품으로 제작된 인터랙티브 웹툰입니다.</p>
      <p>
        정적 사이트 생성 프레임워크인 <b>Gatsby</b>를 사용하였습니다. 그동안
        주로 create-reat-app으로 개발환경을 구축한 저에게는 새로운 시도였습니다.
      </p>
      <p>
        <b>framer-motion</b> 라이브러리를 사용하여 CSS animation을 쉽고 편리하게
        구현하였습니다.
      </p>
      <p>
        이미지가 많은 프로젝트임을 고려하여 Gatsby 플러그인인{" "}
        <b>gatsby-plugin-image</b>를 사용하여 이미지 최적화를 하였습니다.
      </p>
      <p>
        졸업작품 제출을 위해 <b>Electron</b>를 사용하여 데스크탑 앱을
        만들었습니다.
      </p>
    </ProjectTemplate>
  );
}

export default TurnOff;

import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate"
import IMG1 from "@/assets/images/project-ideal-idea-1.png"
import IMG2 from "@/assets/images/project-ideal-idea-2.png"

const images: ProjectImages[] = [
  { src: IMG1, alt: "ideal idea 메인 페이지" },
  { src: IMG2, alt: "ideal idea 캔버스 화면" },
]

const info: ProjectInfo = {
  title: "ideal idea",
  siteUrl: "https://ideal-idea.vercel.app",
  description: "이상적인 아이디어를 도출할 수 있는 공유 캔버스 서비스",
  skills: ["Next.js", "TypeScript", "Socket.IO", "Three.js", "Nest.js"],
  githubUrl: "https://github.com/DDD120/ideal-idea",
  reviewUrl: "https://ddd120.tistory.com/57",
}

function TurnOff() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>
        최대 4명의 사용자가 실시간으로 캔버스를 공유하며 이상적인 아이디어를
        창출할 수 있는 서비스입니다. 실시간 서비스를 만들고 싶다는 생각이 들었을
        무렵, 우연히 비슷한 서비스를 보고 영감을 받아 제작하게 되었습니다.
      </p>
      <p>
        실시간 통신 기능을 위해 웹소켓 프로토콜 기반인 <b>Socket.IO</b>를
        사용하였습니다. 이를 통해 캔버스 공유와 채팅, 두 가지 기능을
        만들었습니다.
      </p>
      <p>
        <b>Canvas API</b>를 통해 선, 도형 등의 그래픽 요소를 그리는 기능을
        구현하였습니다. Mouse Event, Touch Event를 통해 다양한 사용자 인터렉션을
        받아 처리하였습니다. 키보드 단축키를 통해 도구 옵션을 선택하도록 하여
        사용자 경험을 향상하였습니다.
      </p>
      <p>
        <b>Three.js (React Drei, Fiber)</b>를 사용하여 3D 화면 구성을 통해 메인
        화면을 화려하고 멋진 시각적 효과를 구성하였습니다.
      </p>
      <p>
        <b>Next.js</b>를 기반으로 한 프로젝트를 개발하였고, 정적 타입 체크를
        지원하는 <b>TypeScript</b>를 사용하여 빠른 에러 파악과 코드의 유지보수를
        용이하게 했습니다.
      </p>
      <p>
        <b>Nest.js</b>를 통하여 클라이언트 통신을 처리하였습니다. 모듈 기반의
        아키텍처인 Nest.js를 사용하면서 애플리케이션 개발을 보다 구조적으로
        관리할 수 있다는 점을 느꼈습니다.
      </p>
    </ProjectTemplate>
  )
}

export default TurnOff

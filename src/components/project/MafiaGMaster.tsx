import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate"
import IMG1 from "@/assets/images/project-mafia-g-master-1.png"
import IMG2 from "@/assets/images/project-mafia-g-master-2.png"
import IMG3 from "@/assets/images/project-mafia-g-master-3.png"
import IMG4 from "@/assets/images/project-mafia-g-master-4.png"

const images: ProjectImages[] = [
  { src: IMG1, alt: "마피아 G 마스터 메인 페이지" },
  { src: IMG2, alt: "마피아 G 마스터 플레이 화면" },
  { src: IMG3, alt: "마피아 G 마스터 플레이 화면" },
  { src: IMG4, alt: "마피아 G 마스터 플레이 화면" },
]

const info: ProjectInfo = {
  title: "마피아 G 마스터",
  siteUrl: "https://mafia-g-master-ddd120.vercel.app/",
  description: "오프라인 마피아 게임을 위한 진행 가이드",
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "XState",
    "Recoil",
    "React Spring",
    "PWA",
  ],
  githubUrl: "https://github.com/DDD120/mafia-g-master",
  reviewUrl: "https://ddd120.tistory.com/80",
}

function MafiaGMaster() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>
        <b>Next.js 13</b> 업데이트로 인한 주요 기능인 App Router, Server
        Components 등에 대해 배우고 적용하였습니다.
      </p>
      <p>
        보다시피 마피아 게임을 기반으로 하고 있어, 초반에는 전역 상태, 메소드 및
        로직을 어떻게 구현해야 할지 막막한 부분이 있었습니다. 이런 어려움을
        겪다가 복잡한 상태 관리에 관한{" "}
        <a
          target="_blank"
          href="https://youtu.be/Hv_PhrfwerQ?si=pNhflwlVfaMLwjEW"
          className="text-green font-bold"
        >
          영상
        </a>
        을 발견하게 되었고, <b>FSM 및 XState</b>에 대해 알게 되었습니다. 이를
        통해 문제를 해결할 방안이 보여 마피아 게임 시스템을 XState를 통해 상태를
        관리하게 되었습니다.
      </p>
      <p>
        이 프로젝트의 특성상 PC보다는 모바일 환경에서 더 많이 사용될 것으로
        예상되어, 초기 단계부터 모바일 환경을 주요 대상으로 디자인과 UI를
        기획하고 개발했습니다. 이후 점진적으로 PC 환경을 위한 반응형 처리를
        하였습니다. 또한 모바일 네이티브 앱과 유사한 사용자 경험을 제공하기 위해{" "}
        <b>PWA(Progressive Web App)</b>도 도입하였습니다.
      </p>
      <p>
        Lottie 파일을 최적화하여 기존의 번들 사이즈와 Total Blocking Time을
        개선하였습니다.
      </p>
    </ProjectTemplate>
  )
}

export default MafiaGMaster

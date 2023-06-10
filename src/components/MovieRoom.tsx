import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate"
import IMG1 from "@/assets/images/project-movie-room-1.png"
import IMG2 from "@/assets/images/project-movie-room-2.png"
import IMG3 from "@/assets/images/project-movie-room-3.png"
import IMG4 from "@/assets/images/project-movie-room-4.png"
import IMG5 from "@/assets/images/project-movie-room-5.png"

const images: ProjectImages[] = [
  { src: IMG1, alt: "MOVIE ROOM 메인 페이지" },
  { src: IMG2, alt: "MOVIE ROOM 영화 상세 페이지" },
  { src: IMG3, alt: "MOVIE ROOM 리뷰 쓰기 모달" },
  { src: IMG4, alt: "MOVIE ROOM 영화 검색 모달" },
  { src: IMG5, alt: "MOVIE ROOM My 페이지" },
]

const info: ProjectInfo = {
  title: "MOVIE ROOM",
  siteUrl: "https://ddd120.github.io/movie-room",
  description: "영화 관련 정보와 영화 리뷰를 쓸 수 있는 영화 서비스",
  skills: [
    "JavaScript",
    "React.js",
    "Emotion",
    "RTK Query",
    "Express.js",
    "MongoDB",
    "Mongoose",
  ],
  githubUrl: "https://github.com/DDD120/movie-room",
  reviewUrl: "https://ddd120.tistory.com/51",
}

function MovieRoom() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>
        수강하던 강의에서 만들었던 영화 서비스를 나만의 프로젝트로 다시
        만들어보고 싶어 시작하게 되었습니다.
      </p>
      <p>
        React <b>Hooks</b>을 작성하면서 함수 컴포넌트 개발 능력을 향상했고,
        재사용할 수 있는 <b>Custom Hook</b>을 만들어 로직을 추상화하였습니다.
        React에 대해 전반적인 이해도가 크게 상승하게 된 프로젝트입니다.
      </p>
      <p>
        <b>Redux Toolkit</b>을 사용하여 사용자 상태를 전역으로 관리하였고,{" "}
        <b>RTK Query</b>를 사용한 데이터 페칭을 통해 서버 상태를 받아왔습니다.
      </p>
      <p>
        <b>Emotion</b>을 사용하여 UI 스타일링을 하였으며, 스타일 객체를 만들어
        일관성을 유지하고 생산성과 유지보수성을 향상하였습니다.{" "}
        <b>Framer Motion</b>을 통해 UI 애니메이션 효과를 적용하였습니다.
      </p>
      <p>
        <b>Express</b>를 사용해 리뷰의 CRUD 기능을 구현하였고 <b>MongoDB</b>와{" "}
        <b>Mongoose</b>를 사용하여 스키마 생성 및 데이터 저장을 하였습니다.
        백엔드 개발을 통해 프론트엔드 개발자로서 전반적인 웹 개발 이해도의
        향상과 서버와 클라이언트의 통신을 이해할 수 있었습니다. 또한 <b>JWT</b>
        를 사용하여 쿠키에 토큰을 담아 보내는 형식으로 로그인 유지 기능을
        구현하였습니다.
      </p>
      <p>
        GitHub Actions로 CI/CD를 구축하였고 Google App Engine으로 서버를
        배포하였습니다.
      </p>
    </ProjectTemplate>
  )
}

export default MovieRoom

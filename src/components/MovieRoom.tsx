import ProjectTemplate, { ProjectImages, ProjectInfo } from "./ProjectTemplate";
import IMG1 from "@/assets/images/project-movie-room-1.png";
import IMG2 from "@/assets/images/project-movie-room-2.png";
import IMG3 from "@/assets/images/project-movie-room-3.png";
import IMG4 from "@/assets/images/project-movie-room-4.png";
import IMG5 from "@/assets/images/project-movie-room-5.png";

const images: ProjectImages[] = [
  { src: IMG1, alt: "MOVIE ROOM 메인 페이지" },
  { src: IMG2, alt: "MOVIE ROOM 영화 상세 페이지" },
  { src: IMG3, alt: "MOVIE ROOM 리뷰 쓰기 모달" },
  { src: IMG4, alt: "MOVIE ROOM 영화 검색 모달" },
  { src: IMG5, alt: "MOVIE ROOM My 페이지" },
];

const info: ProjectInfo = {
  title: "MOVIE ROOM",
  siteUrl: "https://ddd120.github.io/movie-room",
  description: "영화 목록, 상세정보 보기 및 리뷰 쓰기 서비스",
  skills: [
    "React.js",
    "Emotion",
    "RTK-query",
    "Express",
    "MongoDB",
    "Mongoose",
  ],
  githubUrl: "https://github.com/DDD120/movie-room",
  reviewUrl: "https://ddd120.tistory.com/51",
};

function MovieRoom() {
  return (
    <ProjectTemplate images={images} info={info}>
      <p>
        시청하던 강의 영상에서 알게된 영화 API를 이용하여 나만의 영화 웹
        서비스를 다시 만들어보고 싶어 제작하게 되었습니다.
      </p>
      <p>
        <b>React hooks</b> 통한 함수 컴포넌트를 작성하였습니다.
      </p>
      <p>
        <b>Redux Toolkit</b>을 이용하여 유저의 상태 관리 <b>RTK Query</b>를
        사용한 Data fetching을 통해 서버 데이터를 관리하였습니다.
      </p>
      <p>
        <b>Express</b>를 사용해 리뷰의 CRUD 기능을 구현하였고 <b>MongoDB</b>와
        <b>Mongoose</b> 사용하여 스키마 생성 및 데이터 저장을 하였습니다.
      </p>
      <p>
        <b>JWT</b>를 사용하여 쿠키에 토큰을 담아 보내는 형식으로 로그인 유지
        기능을 구현하였습니다.
      </p>
      <p>
        중간 졸업작품 병행과 시간에 쫓기지 않고 막히는 부분이 있을 때 그 개념을
        확실하게 잡느라 제작한 시간은 다소 오래 걸렸고 그만큼 제일 애정가는
        서비스입니다.
      </p>
    </ProjectTemplate>
  );
}

export default MovieRoom;

import { ReactComponent as Link } from "@/assets/images/project-link.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import IMG1 from "@/assets/images/project-movie-room-1.png";
import IMG2 from "@/assets/images/project-movie-room-2.png";
import IMG3 from "@/assets/images/project-movie-room-3.png";
import IMG4 from "@/assets/images/project-movie-room-4.png";
import IMG5 from "@/assets/images/project-movie-room-5.png";
import "swiper/css";
import "swiper/css/pagination";

function MovieRoom() {
  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={IMG1} alt="Movie Room 메인 페이지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IMG2} alt="Movie Room 영화 상세 페이지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IMG3} alt="Movie Room 리뷰 쓰기 모달" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IMG4} alt="Movie Room 영화 검색 모달" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IMG5} alt="Movie Room My 페이지" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-4">
        <a href="#" target="_blank">
          <h2 className="flex items-center gap-2 text-2xl font-lsy mb-2">
            <Link width="24px" height="24px" />
            MOVIE ROOM
          </h2>
        </a>
        <p>- 영화 목록, 상세정보 보기 및 리뷰 쓰기 서비스</p>
        <p>React.js, Emotion, Redux-Tookit, Express, MongoDB, Mongoose</p>
        <div className="my-3">
          <a href="https://github.com/DDD120/movie-room" target="_blank">
            <p className="flex items-center gap-2">
              <Link width="16px" height="16px" /> GitHub
            </p>
          </a>
          <a href="#" target="_blank">
            <p className="flex items-center gap-2">
              <Link width="16px" height="16px" />
              프로젝트 회고
            </p>
          </a>
        </div>
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
          중간 졸업작품 병행과 시간에 쫓기지 않고 막히는 부분이 있을 때 그
          개념을 확실하게 잡느라 제작한 시간은 다소 오래 걸렸고 그만큼 제일
          애정가는 서비스입니다.
        </p>
      </div>
    </div>
  );
}

export default MovieRoom;

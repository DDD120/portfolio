import { ReactComponent as Link } from "@/assets/images/project-link.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import IMG1 from "@/assets/images/project-ideal-idea-1.png";
import IMG2 from "@/assets/images/project-ideal-idea-2.png";
import "swiper/css";
import "swiper/css/pagination";

function TurnOff() {
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
            <img src={IMG1} alt="ideal idea 메인 페이지" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={IMG2} alt="ideal idea 캔버스 화면" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-4">
        <a href="https://ideal-idea.vercel.app/" target="_blank">
          <h2 className="flex items-center gap-2 text-2xl font-lsy mb-2">
            <Link width="24px" height="24px" />
            ideal idea
          </h2>
        </a>
        <p>- 이상적인 아이디어를 도출할 공유 캔버스 서비스</p>
        <p>Next.js, TypeSciprt, Socket.IO, Three.js, Nest.js</p>
        <div className="my-3">
          <a href="https://github.com/DDD120/ideal-idea" target="_blank">
            <p className="flex items-center gap-2">
              <Link width="16px" height="16px" /> GitHub
            </p>
          </a>
          <a href="https://ddd120.tistory.com/57" target="_blank">
            <p className="flex items-center gap-2">
              <Link width="16px" height="16px" />
              프로젝트 회고
            </p>
          </a>
        </div>
        <div className="max-sm:text-sm">
          <p>
            최대 4명의 사용자들이 실시간으로 캔버스를 공유하며 이상적인
            아이디어를 창출할 수 있는 서비스입니다.
          </p>
          <p>
            실시간 통신 기능를 위해 웹소켓 프로토콜을 기반인 <b>Socket.IO</b>를
            사용하여 사용자들 간에 캔버스 공유 기능을 구현했습니다.
          </p>
          <p>
            <b>Three.js (React Drei, Fiber)</b>을 사용한 3D 화면 구성을 통해
            화려하고 멋진 시각적 효과를 향상했습니다.
          </p>
          <p>
            정적 타입 체크를 지원하는 <b>TypeSciprt</b>를 사용하여 빠른 에러
            파악과 코드의 유지보수를 용이하게 했습니다.
          </p>
          <p>
            <b>Nest.js</b>를 통하여 서비스, 컨트롤러, 모듈 등의 개념을 도입과
            데코레이터 패턴에 대해 알게되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TurnOff;

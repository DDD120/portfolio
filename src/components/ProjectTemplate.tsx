import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export interface ProjectImages {
  src: string;
  alt: string;
}

export interface ProjectInfo {
  title: string;
  siteUrl: string;
  description: string;
  skills: string[];
  githubUrl: string;
  reviewUrl?: string;
}

interface Props {
  images: ProjectImages[];
  info: ProjectInfo;
  children: React.ReactNode;
}

function ProjectTemplate({ images, info, children }: Props) {
  return (
    <div>
      <div className="w-full aspect-[1536/745]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          navigation
          loop
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image) => (
            <SwiperSlide>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-4">
        <h2 className="flex items-center gap-2 text-2xl font-lsy mb-2 link-underline">
          <a href={info.siteUrl} target="_blank">
            {info.title}
          </a>
        </h2>
        <p>{info.description}</p>
        <p>{info.skills.join(", ")}</p>
        <div className="my-3">
          <span className="flex items-center gap-2 link-underline">
            <a href={info.githubUrl} target="_blank">
              GitHub
            </a>
          </span>
          {info.reviewUrl && (
            <span className="flex items-center gap-2 link-underline">
              <a href={info.reviewUrl} target="_blank">
                프로젝트 회고
              </a>
            </span>
          )}
        </div>
        <div className="max-sm:text-sm">{children}</div>
      </div>
    </div>
  );
}

export default ProjectTemplate;

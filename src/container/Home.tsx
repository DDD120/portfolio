import { ReactComponent as Circle } from "@/assets/images/home-circle.svg";
import { ReactComponent as Heart } from "@/assets/images/home-heart.svg";
import Avatar from "@/assets/images/home-avatar.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center gap-8 py-32 font-lsy text-5xl tracking-tighter max-sm:text-4xl max-sm:flex-col"
    >
      <div className="relative">
        <p className="flex items-center">
          안녕하세요! <Heart className="animate-home-heart w-8 h-6" />
        </p>
        <p>웹 프론트엔드 개발자</p>
        <p>이수민입니다</p>
        <Circle className="home-circle absolute -bottom-1 -left-1 w-28 h-14 max-sm:w-20 max-sm:-bottom-2 max-sm:left-0" />
      </div>
      <div className="w-36 h-36 rounded-md overflow-hidden">
        <img src={Avatar} alt="아바타" />
      </div>
    </section>
  );
}
export default Home;

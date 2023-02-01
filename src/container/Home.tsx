import { ReactComponent as Circle } from "@/assets/images/home-circle.svg";
import { ReactComponent as Heart } from "@/assets/images/home-heart.svg";

function Home() {
  return (
    <section className="flex justify-center gap-8 py-32 font-lsy text-5xl tracking-tighter">
      <div className="relative">
        <p className="flex items-center">
          안녕하세요! <Heart className="home-heart w-8 h-6" />
        </p>
        <p>웹 프론트엔드 개발자</p>
        <p>이수민입니다</p>
        <Circle className="home-circle absolute -bottom-1 -left-1 w-28 h-14 " />
      </div>
      <div className="w-36 h-36 bg-gray-300 rounded-md"></div>
    </section>
  );
}
export default Home;

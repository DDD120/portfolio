import ArchivingItem from "@components/ArchivingItem";
import Heading from "@components/Heading";

const motto = '"Do it, Draw it, Dream it."'.split("");

function AboutMe() {
  return (
    <section
      id="aboutme"
      className="flex flex-col items-center my-12 max-sm:w-11/12"
    >
      <Heading>ABOUT ME</Heading>
      <div className="my-12 font-scd text-center">
        <p className="italic text-3xl">
          {motto.map((char, index) => (
            <span
              key={char + index}
              className="whitespace-pre inline-block cursor-default transition hover:-skew-y-12 hover:scale-105"
            >
              {char}
            </span>
          ))}
        </p>
        <p className="text-sm mt-6">
          꾸준히 노력하고, 그리고, 꿈꾸면 이룰 수 있다고 믿습니다
        </p>
      </div>
      <div className="flex gap-2">
        <ArchivingItem name="깃허브" />
        <ArchivingItem name="티스토리" />
        <ArchivingItem name="이력서" />
      </div>
    </section>
  );
}

export default AboutMe;

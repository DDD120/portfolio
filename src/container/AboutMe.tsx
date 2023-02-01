import ArchivingItem from "@components/ArchivingItem";
import Heading from "@components/Heading";

function AboutMe() {
  return (
    <section className="flex flex-col items-center my-12">
      <Heading>ABOUT ME</Heading>
      <div className="my-12 font-scd text-lg text-center">
        <p>"잘하고 싶은 욕심이 있습니다. 그래서 꾸준하게 노력합니다."</p>

        <p className="text-sm italic mt-12">
          난 나의 보폭으로 갈게. <br /> 불안해 돌아보면서도 <br /> 별 큰일 없이
          <br /> 지나온 언제나처럼. <br /> IU - unlucky
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

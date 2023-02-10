import Heading from "@components/Heading";
import InterviewItem from "@components/InterviewItem";

function Interview() {
  return (
    <div
      id="interveiw"
      className="flex flex-col items-center my-12 max-w-[800px] w-[90%]"
    >
      <Heading>INTERVIEW</Heading>
      <div className="my-12 w-full flex flex-col gap-4">
        <InterviewItem question="프론트엔드 개발자의 꿈을 꾸게 된 계기는">
          때는 2019년 여름, 웹 디자인 관련 영상을 시청하다가 반응형 웹 사이트를
          만드는 튜토리얼 영상이 알고리즘으로 뜨게 되었습니다. 그 영상은 HTML과
          CSS로 간단한 레이아웃 페이지를 만드는 내용이었습니다. 그동안 인생에서
          IT나 개발에 전혀 연관이 없던 저에게 코드 몇 줄로 시각적 화면이
          보인다는 점에 꽤나 놀라웠습니다. 그 후 웹 개발에 대해 꾸준히 알아보고
          흥미가 점점 커져 프론트엔드 개발자란 꿈을 가지게 되었습니다.
        </InterviewItem>
      </div>
    </div>
  );
}

export default Interview;

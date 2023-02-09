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
        <InterviewItem question="프론트엔드 개발자의 꿈을 꾸게 된 계기">
          Duis eu enim sit veniam nisi in. Deserunt eiusmod labore sint aute
          non. Ad irure ut id veniam in exercitation elit. Irure sint Lorem
          ullamco in aute ea officia nostrud velit aliqua occaecat do labore ut.
        </InterviewItem>
      </div>
    </div>
  );
}

export default Interview;

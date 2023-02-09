import { useState } from "react";
import { ReactComponent as Down } from "@/assets/images/interview-down.svg";

interface Props {
  question: string;
  children: React.ReactNode;
}

function InterviewItem({ question, children }: Props) {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className="w-full border-2 rounded-xl p-4">
      <div
        onClick={handleClick}
        className="flex justify-between cursor-pointer"
      >
        <h3 className="font-lsy text-xl">{question}</h3>
        <Down
          width="24px"
          height="24px"
          className={`${isShow && "rotate-180"}`}
        />
      </div>

      {isShow && <div className="mt-4 font-scd">{children}</div>}
    </div>
  );
}

export default InterviewItem;

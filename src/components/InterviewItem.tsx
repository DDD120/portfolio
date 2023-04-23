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
          fill="#288C66"
          className={`${isShow && "rotate-180"}`}
        />
      </div>

      <div
        className={`font-scd max-sm:text-sm transition-all origin-top ${
          isShow ? "mt-4" : "h-0"
        }`}
      >
        {isShow && children}
      </div>
    </div>
  );
}

export default InterviewItem;

import Heading from "@components/Heading";
import SkillItem from "@components/SkillItem";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Styled-Components",
  "Emotion",
  "Node.js",
  "Express",
  "Jest",
  "VS Code",
  "Git",
  "Photoshop",
  "Figma",
];

function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center my-12">
      <Heading>SKILLS</Heading>
      <div className="font-scd text-lg my-12 text-center">
        <p>시맨틱 마크업을 고려한 HTML 마크업</p>
        <p>CSS 미디어쿼리를 사용한 반응형 레이아웃</p>
        <p>ES6+ 문법을 사용한 JavaScript 작성</p>
        <p>TypeScript를 사용한 타입 시스템 적용</p>
        <p>React를 사용한 컴포넌트 단위의 개발</p>
        <p>Styled-Components, emotion, tailwind css을 사용한 UI Styling</p>
        <p>사용자 경험을 고려하는 UI Component 구현</p>
        <p>React Context API 와 Redux를 사용한 상태관리</p>
        <p>HTTP REST API 요청 및 응답 처리</p>
        <p>웹 성능 최적화 및 개선</p>
      </div>
      <div className="flex justify-center gap-2 flex-wrap w-96 mb-8">
        {skills.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </div>
    </section>
  );
}

export default Skills;

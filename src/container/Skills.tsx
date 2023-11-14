import Heading from '@components/Heading'
import SkillItem from '@components/SkillItem'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'React Query',
  'Redux',
  'Recoil',
  'Styled-Components',
  'Emotion',
  'Tailwind CSS',
  'Chakra UI',
  'Node.js',
  'Express.js',
  'Nest.js',
  'Websocket',
  'Jest',
  'React Native',
  'Java',
  'VS Code',
  'Git',
  'Photoshop',
  'Figma',
]

function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center my-12 '>
      <Heading>SKILLS</Heading>
      <div className='w-full font-scd text-lg my-12 text-center break-keep max-sm:text-base'>
        <p>시맨틱 마크업을 고려한 HTML 마크업</p>
        <p>CSS 미디어 쿼리를 사용한 반응형 레이아웃</p>
        <p>ES6+ 문법을 사용한 모던 JavaScript 작성</p>
        <p>TypeScript를 사용한 타입 시스템 적용</p>
        <p>React.js를 사용한 컴포넌트 단위의 UI 개발</p>
        <p>Emotion, Tailwind CSS 등 CSS 프레임워크를 사용한 UI Styling</p>
        <p>효율적인 상태 관리 (with React Query, Redux, Recoil 등)</p>
        <p>REST API를 사용한 데이터 요청 및 응답 처리</p>
        <p>웹 성능 최적화 및 개선</p>
      </div>
      <div className='flex justify-center gap-2 flex-wrap w-96 mb-8 max-sm:text-base'>
        {skills.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </div>
    </section>
  )
}

export default Skills

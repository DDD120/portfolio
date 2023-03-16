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
        <InterviewItem question="프론트엔드 개발자의 꿈을 꾸게 된 계기는?">
          때는 2019년 여름, 웹 디자인 관련 영상을 시청하다가 반응형 웹 사이트를
          만드는 튜토리얼 영상이 알고리즘으로 뜨게 되었습니다. 그 영상은 HTML과
          CSS로 간단한 레이아웃 페이지를 만드는 내용이었습니다. 그동안 인생에서
          IT나 개발에 전혀 연관이 없던 저에게 코드 몇 줄로 시각적 화면이
          보인다는 점에 꽤나 놀라웠습니다. 그 후 웹 개발에 대해 꾸준히 알아보고
          흥미가 점점 커져 프론트엔드 개발자란 꿈을 가지게 되었습니다.
        </InterviewItem>
        <InterviewItem question="프론트엔드 개발 공부를 어떻게 하였나요?">
          초반에는 HTML, CSS, Javascript에 대한 기초적인 문법 지식을 공부하고,
          강의 영상을 따라 클론 코딩을 하며 웹 사이트를 만드는 흐름을 꾸준히
          익혔습니다. 웹의 상호작용을 위한 Vanilla JS와 Jquery를 학습한 다음 JS
          프레임워크인 Vue와 React로 웹 사이트를 개발하는 방법을 배웠습니다.
          React를 집중적으로 학습하기로 결정한 후 직접 프로젝트를 만들면서
          스스로 웹 사이트 개발하였습니다. 많은 삽질의 시간을 통해 의미있는
          경험을 쌓았습니다
        </InterviewItem>
        <InterviewItem question="비전공자로서 개발 관련 공부 ">
          <p>
            비전공자이지만 재학 중 소프트웨어융합연계전공의 '웹 프로그래밍',
            '프로그래밍 기초','자료구조', '알고리즘', '데이터베이스', '컴퓨터
            네트워크' 과목을 수강하였습니다.
          </p>
          <div className="my-2">
            <h4>
              <b>웹 프로그래밍</b>
            </h4>
            <p>
              HTML, CSS, Javascipt에 대한 이론적 내용을 학습하여 웹 사이트의
              구축에 필요한 지식을 습득하였습니다.
            </p>
          </div>
          <div className="my-2">
            <h4>
              <b>컴퓨터 네트워크</b>
            </h4>
            <p>
              OSI 7계층 모델을 기초로 하여 현재 인터넷의 실질적인 표준이 된
              TCP/IP 프로토콜 위주로 학습하였습니다.
            </p>
          </div>
          <div className="my-2">
            <h4>
              <b>프로그래밍기초</b>
            </h4>
            <p>
              C 프로그래밍의 과정으로 기본적인 C 언어 문법과 프로그래밍 능력을
              배웠습니다. 가장 기억에 남던 건 JS와 달리 float, double 등 숫자의
              타입이 여러개였다는 점과 메모리의 주소값을 저장하는 변수인
              포인터가 있다는 점이었습니다.
            </p>
          </div>
          <div className="my-2">
            <h4>
              <b>자료구조</b>
            </h4>
            <p>
              배열과 리스트, 스택, 큐, 트리의 기본 개념, 이론에 대한 학습을
              하였습니다. Java 언어를 통해 응용 문제를 해결하였습니다.
            </p>
          </div>
          <div className="my-2">
            <h4>
              <b>알고리즘</b>
            </h4>
            <p>
              분할정복 알고리즘, 그리디 알고리즘, 동적계획 알고리즘, 정렬
              알고리즘에 대해 배웠습니다.
            </p>
          </div>
          <div className="my-2">
            <h4>
              <b>데이터베이스</b>
            </h4>
            <p>
              데이터베이스의 기본 개념, 데이터베이스 시스템 개념과 아키텍처, ER
              데이터 모델링, 관계 데이터베이스, SQL 작성 실습을 학습했습니다.
            </p>
          </div>
          <p></p>
        </InterviewItem>
        <InterviewItem question="전공에서는 무엇을 배웠나요?">
          <p className="my-2">
            '영상문화학과'는 영상미학, 방송/영상그래픽, 애니메이션,
            게임/문화산업정책, 스토리텔링 등 문화콘텐츠 제작과 관련된 전문적인
            이론과 실기를 폭넓고 균형있게 공부하는 학과입니다. 포토샵,
            일러스트레이션, 프리미어 프로 등 프로그램 기술 능력과 콘텐츠 제작을
            위한 시나리오 및 스토리보드 작성 등의 기획, 팀 프로젝트를 통한
            팀원들 간의 커뮤니케이션을 통해 문화콘텐츠 제작을 위한 전반적인
            과정을 학습하였습니다.
          </p>

          <p>
            '신화와 스토리텔링' 수업에서는 4인 시나리오를 쓰는 프로젝트
            '행사기획' 수업 부팀장으로서 수강하는 학생 약 18명의 전체 인원
            온라인 행사를 진행하였습니다. 학과 동아리에서 애니메이션 감독을 맡아
            4명의 인원을 통솔하여 애니메이션 작품을 제작하였습니다.
          </p>
          <p className="my-2">
            지금 가장 기억에 남은 순간은 개발을 접하지 않았을 당시 수강한
            '대중문화연구' 수업입니다. 기말발표의 주제는 대중문화콘텐츠를
            기획하여 발표를 했어야 했습니다. 제가 그때 기획한 콘텐츠는 공연장
            좌석의 시야 사진을 공유하는 어플리케이션을 기획하여 발표를 했습니다.
            발표를 하고 난 후 동기 학우들의 좋은 반응에 뿌듯한 마음이
            들었습니다. 지금 생각하면 기획에서 끝난지 않고 실제로 구현할 수
            있겠다는 생각이 들었습니다.
          </p>
        </InterviewItem>
        <InterviewItem question="어떤 개발자가 되고 싶나요?">

        </InterviewItem>
      </div>
    </div>
  );
}

export default Interview;

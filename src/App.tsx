import Switcher from "@components/Switcher";

function App() {
  return (
    <div className="bg-white h-full text-black dark:bg-black dark:text-white">
      <Switcher />
      <p className="font-lsy text-6xl">이서윤체</p>
      <p className="font-scd text-6xl">에스코어드림체</p>
    </div>
  );
}

export default App;

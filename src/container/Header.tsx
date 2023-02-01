import Switcher from "@components/Switcher";

function Header() {
  return (
    <header className="flex justify-between items-center h-12 px-8 font-lsy">
      <h1 className="text-2xl">DDD120</h1>
      <div className="flex gap-4">
        <Switcher />
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#project">PROJECT</a>
            </li>
            <li>
              <a href="#interview">INTERVIEW</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

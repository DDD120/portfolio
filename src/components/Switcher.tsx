import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useTheme from "@/hooks/useTheme";

function Switcher() {
  const { inverseTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(inverseTheme === "light" ? true : false);

  const handleChange = (checked: boolean) => {
    setTheme(inverseTheme);
    setIsDark(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={isDark} onChange={handleChange} size={30} />
    </>
  );
}

export default Switcher;

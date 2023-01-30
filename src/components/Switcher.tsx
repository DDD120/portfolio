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
    <DarkModeSwitch
      checked={isDark}
      onChange={handleChange}
      size={24}
      sunColor={"#222222"}
      moonColor={"#F6F6F6"}
    />
  );
}

export default Switcher;

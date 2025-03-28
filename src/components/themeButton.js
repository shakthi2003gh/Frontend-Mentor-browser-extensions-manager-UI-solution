import insertSvg from "../utilities/insertSvg.js";
import { getCurrentTheme, toggleTheme } from "../helpers/theme.js";

export default function ThemeButton() {
  const button = document.createElement("button");

  button.classList.add("theme-btn");

  const setup = (isDark) => {
    const svgURL = `/public/assets/images/icon-${isDark ? "sun" : "moon"}.svg`;
    insertSvg(svgURL, button);
  };

  setup(getCurrentTheme("B"));
  button.onclick = () => setup(toggleTheme()("B"));

  return button;
}

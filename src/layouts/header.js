import Logo from "../components/logo.js";
import ThemeButton from "../components/themeButton.js";

export default function Header() {
  const header = document.createElement("header");

  const logo = Logo();
  const themeBtn = ThemeButton();

  header.append(logo, themeBtn);

  return header;
}

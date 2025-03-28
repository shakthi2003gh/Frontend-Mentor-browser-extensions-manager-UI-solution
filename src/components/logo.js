import insertSvg from "../utilities/insertSvg.js";

export default function Logo() {
  const logo = document.createElement("div");

  logo.id = "LOGO";
  insertSvg("/public/assets/images/logo.svg", logo);

  return logo;
}

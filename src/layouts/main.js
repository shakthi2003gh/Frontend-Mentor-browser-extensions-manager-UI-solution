import ExtensionsHeader from "./extensionHeader.js";

export default function Main() {
  const main = document.createElement("main");

  main.append(ExtensionsHeader());

  return main;
}

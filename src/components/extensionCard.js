import insertSvg from "../utilities/insertSvg.js";
import { removeData, toggleActive } from "../helpers/data.js";
import Button from "./button.js";
import Toggle from "./toggle.js";

export default function ExtensionCard(data, onNodata) {
  const { id, logo, name, description, isActive, itemCount } = data || {};

  const card = document.createElement("article");
  const main = document.createElement("div");
  const icon = document.createElement("div");
  const mainContent = document.createElement("div");
  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  const footer = document.createElement("div");

  card.classList.add("extension__card");
  main.classList.add("main");
  icon.classList.add("icon");
  mainContent.classList.add("content");
  title.classList.add("text--primary");
  paragraph.classList.add("description");
  footer.classList.add("footer");

  card.id = "extension-" + id;
  card.style.setProperty("--delay", 0.1 * (itemCount - 1) + "s");

  insertSvg(logo, icon);

  title.textContent = name;
  paragraph.textContent = description;

  const handleToggle = () => {
    toggleActive(id);

    const listItem = document.querySelector("li#list-" + id);
    const isActive = listItem.getAttribute("active") !== "true";

    listItem.setAttribute("active", isActive);
  };

  const handleRemove = () => {
    const { hasData } = removeData(id);
    if (!hasData) onNodata();

    const list = document.querySelector("ul.extensions-list");
    const listItem = document.querySelector("li#list-" + id);
    if (listItem) list.removeChild(listItem);
  };

  const button = Button("remove", handleRemove);
  const toggle = Toggle(isActive, handleToggle);

  mainContent.append(title, paragraph);
  main.append(icon, mainContent);
  footer.append(button, toggle);
  card.append(main, footer);

  return card;
}

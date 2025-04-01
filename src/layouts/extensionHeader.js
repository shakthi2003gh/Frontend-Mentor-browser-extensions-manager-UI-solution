import Link from "../components/link.js";

export default function ExtensionsHeader() {
  const extensionHeader = document.createElement("div");
  const heading = document.createElement("h1");
  const filters = document.createElement("div");

  extensionHeader.classList.add("header");

  heading.classList.add("text--primary");
  heading.textContent = "Extensions List";

  filters.classList.add("filters");

  const labels = ["all", "active", "inactive"];
  const links = labels.map((label) => Link(label, "?filters=" + label));

  filters.append(...links);
  extensionHeader.append(heading, filters);

  return extensionHeader;
}

import { fetchAndSetData, getData } from "../helpers/data.js";
import ExtensionsHeader from "./extensionHeader.js";
import ExtensionsList from "./extensionList.js";
import NoData from "./noData.js";

function addFilterListener() {
  const value = ["active", "inactive"];
  const selectors = ["[active='true']", "[active='false']"];

  const handleAlert = () => {
    const { filter } = window.history.state || { filter: "all" };

    const alert = document.querySelector("main p.alert");
    if (!alert) return;

    if (!value.includes(filter)) return (alert.style.display = "none");

    const selector = selectors[Number(filter !== value[0])];
    const isNotEmpty = !!document.querySelectorAll("li" + selector).length;
    if (isNotEmpty) return (alert.style.display = "none");

    alert.style.display = "block";

    alert.textContent =
      filter === value[0]
        ? "You currently have no extensions active."
        : "All your extensions are currently active.";
  };

  const handleFilter = () => {
    const { filter } = window.history.state || { filter: "all" };

    const filterLinks = document.querySelectorAll(".filters a.link");
    const extensionsList = document.querySelectorAll(".extensions-list li");

    filterLinks.forEach((link) => {
      link.classList.toggle(value[0], link.id === filter);
    });

    extensionsList.forEach((list) => {
      const itemActive = list.getAttribute(value[0]) === "true";

      if (filter === value[0] && !itemActive) list.style.display = "none";
      else if (filter === value[1] && itemActive) list.style.display = "none";
      else list.style = "";
    });

    handleAlert();
  };

  window.addEventListener("urlchange", handleFilter);
  window.addEventListener("popstate", handleFilter);
}

function handleReset() {
  fetchAndSetData().then((data) => {
    const main = document.querySelector("main");
    const alert = document.createElement("p");

    alert.classList.add("alert");
    alert.style.display = "none";

    main.innerHTML = "";
    main.append(ExtensionsHeader(), ExtensionsList(data, handleNoData), alert);
  });
}

function handleNoData() {
  const main = document.querySelector("main");

  main.innerHTML = "";
  main.appendChild(NoData(handleReset));
}

export default function Main() {
  const main = document.createElement("main");
  const alert = document.createElement("p");

  alert.classList.add("alert");
  alert.style.display = "none";

  getData().then((data) => {
    if (!data.length) return main.appendChild(NoData(handleReset));

    main.append(ExtensionsHeader(), ExtensionsList(data, handleNoData), alert);
  });

  addFilterListener();

  return main;
}

import ExtensionCard from "../components/extensionCard.js";

export default function ExtensionsList(data, onNodata) {
  const getListContainer = () => {
    let listContainer = document.querySelector(".extensions-list");
    if (listContainer) return listContainer;

    listContainer = document.createElement("ul");
    listContainer.classList.add("extensions-list");
    return listContainer;
  };

  const list = getListContainer();
  const listItems = data.map((value, index) => {
    const { id, isActive } = value;
    const { filter } = window.history.state || { filter: "all" };

    value.itemCount = index + 1;

    const li = document.createElement("li");

    li.id = "list-" + id;
    li.setAttribute("active", isActive);
    li.appendChild(ExtensionCard(value, onNodata));

    if (filter === "active" && !isActive) li.style.display = "none";
    else if (filter === "inactive" && isActive) li.style.display = "none";
    else li.style = "";

    return li;
  });

  list.append(...listItems);

  return list;
}

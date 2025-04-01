export default function NoData(onReset) {
  const container = document.createElement("div");
  const title = document.createElement("h1");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");

  container.classList.add("no-data");

  title.classList.add("text--primary");
  title.textContent = "No extensions available.";
  paragraph.textContent = "All extensions have been removed.";

  container.append(title, paragraph);

  if (onReset) {
    button.classList.add("btn--primary");
    button.textContent = "Reset";
    button.onclick = onReset;

    container.appendChild(button);
  }

  return container;
}

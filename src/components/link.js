export default function Link(label, to) {
  if (!to) throw Error("Missing 'to' prop in link");

  const link = document.createElement("a");

  link.id = label;
  link.className = "link text--primary";
  link.textContent = label || "Link";
  link.href = to;

  const { filter } = window.history.state || { filter: "all" };
  link.classList.toggle("active", link.id === filter);

  link.onclick = (e) => {
    e.preventDefault();

    window.history.pushState({ filter: label }, "", to);
    window.dispatchEvent(new Event("urlchange"));
  };

  return link;
}

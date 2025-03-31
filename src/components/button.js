export default function Button(label, onClick) {
  const button = document.createElement("button");

  button.classList.add("btn--primary");
  button.textContent = label || "button";
  button.onclick = onClick;

  return button;
}

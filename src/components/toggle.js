import generateId from "../utilities/generateId.js";

export default function Toggle(value, onToggle) {
  const toggle = document.createElement("label");
  const knob = document.createElement("span");
  const checkbox = document.createElement("input");

  const id = "toggle-" + generateId();

  toggle.htmlFor = id;
  toggle.classList.add("toggle");
  toggle.onchange = onToggle;

  checkbox.id = id;
  checkbox.name = "toggle";
  checkbox.type = "checkbox";
  checkbox.checked = value;

  toggle.append(knob, checkbox);
  return toggle;
}

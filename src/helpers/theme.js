const themeKey = "fmbe-theme";

function setDefaultTheme() {
  const defaultTheme = "light";
  localStorage.setItem(themeKey, defaultTheme);

  return defaultTheme;
}

export function getCurrentTheme(type) {
  if (type === "B") return localStorage.getItem(themeKey) === "dark";

  return localStorage.getItem(themeKey);
}

export function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const updatedTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem(themeKey, updatedTheme);
  document.documentElement.setAttribute("theme", updatedTheme);

  return getCurrentTheme;
}

export default function setupTheme() {
  const currentTheme = getCurrentTheme() || setDefaultTheme();

  document.documentElement.setAttribute("theme", currentTheme);
}

const dataKey = "fmbe-data";

export function toggleActive(id) {
  const data = JSON.parse(localStorage.getItem(dataKey));
  const index = data.findIndex((value) => value.id === id);
  if (index < 0) return;

  data[index].isActive = !data[index].isActive;

  localStorage.setItem(dataKey, JSON.stringify(data));
}

export function removeData(id) {
  let data = JSON.parse(localStorage.getItem(dataKey));
  data = data.filter((value) => value.id !== id);
  localStorage.setItem(dataKey, JSON.stringify(data));

  return { hasData: !!data.length };
}

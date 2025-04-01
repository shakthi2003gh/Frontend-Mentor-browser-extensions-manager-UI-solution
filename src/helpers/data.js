import generateId from "../utilities/generateId.js";

const dataKey = "fmbe-data";

export async function fetchAndSetData() {
  return fetch("/public/data.json")
    .then((res) => res.json())
    .then((data) => {
      data = data.map((data) => {
        data.id = generateId();
        return data;
      });

      localStorage.setItem(dataKey, JSON.stringify(data));
      return data;
    })
    .catch((err) => {
      console.error(err);

      localStorage.setItem(dataKey, []);
      return [];
    });
}

export async function getData() {
  const data = JSON.parse(localStorage.getItem(dataKey));
  if (!data) return fetchAndSetData();

  return new Promise((resolve) => resolve(data));
}

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

export default function insertSvg(svgURL, element) {
  if (!svgURL) throw Error("No SVG URL");
  if (!element) throw Error("No Element to insert");

  fetch(svgURL)
    .then((res) => {
      if (res.status !== 200) throw Error("SVG not found");

      return res.text();
    })
    .then((data) => (element.innerHTML = data));
}

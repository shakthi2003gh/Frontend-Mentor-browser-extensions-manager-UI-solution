import setupTheme from "./helpers/theme.js";
import Header from "./layouts/header.js";

setupTheme();

const header = Header();

document.body.appendChild(header);

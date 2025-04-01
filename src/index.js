import setupTheme from "./helpers/theme.js";
import Header from "./layouts/header.js";
import Main from "./layouts/main.js";

setupTheme();

const header = Header();
const main = Main();

document.body.append(header, main);

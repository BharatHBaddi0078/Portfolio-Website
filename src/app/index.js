import Layout from "./views/Layout";
import routes from "./consts/routes";
import startTitleAnimation from "./helpers/startTitleAnimation";
import localeHandler from "./helpers/localeHandler";
import loadCssFile from "./helpers/loadCssFile";
import replacePath from "./helpers/replacePath";
import { initializeSkillsTabs } from "./helpers/skillsTabs.js";

import "styles/styles.sass";

const rootId = "root";
async function render() {
    const path = routes[window.location.pathname] ?? routes["/404"];

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await Layout(
        (
            await import(`./views/${path.element}`)
        ).default,
        path
    );

    // Initialize skills tabs if on about page
    if (path.name === 'about') {
        setTimeout(() => {
            initializeSkillsTabs();
        }, 100);
    }
}

replacePath()
    .then(() => render())
    .then(() => localeHandler());

"use strict";
(self["webpackChunkbharath_portfolio"] = self["webpackChunkbharath_portfolio"] || []).push([[68],{

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects)
});

// EXTERNAL MODULE: ./src/app/components/Path.js
var Path = __webpack_require__(778);
;// ./src/app/consts/projects.js
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "darksight",
        links: {
            github: "BharatHBaddi0078/DarkSight"
        },
        techs: ["python"],
        hasImage: false,
    },
    {
        id: "money-map",
        links: {
            github: "BharatHBaddi0078/Money-Map",
        },
        techs: ["ts", "next", "react"],
        hasImage: false
    },
    {
        id: "codex-snippet-manager",
        links: {
            github: "BharatHBaddi0078/CodeX-Snippet-Manager"
        },
        techs: ["ts", "react", "node"],
        hasImage: false,
    },
    {
        id: "client-server-auto-recovery",
        links: {
            github: "BharatHBaddi0078/Client-Server-System-with-Auto-Recovery"
        },
        techs: ["python"],
        hasImage: false,
    },
    {
        id: "sms-spam-detection",
        techs: ["python", "jupyter"],
        links: {
            github: "BharatHBaddi0078/SMS-Spam-detection-analysis-NLP"
        },
        hasImage: false,
    },
    {
        id: "speech-to-text",
        techs: ["python", "jupyter"],
        links: {
            github: "BharatHBaddi0078/Speech-to-text-recognition"
        },
        hasImage: false,
    },
    {
        id: "chatbot-llm",
        techs: ["python"],
        links: {
            github: "BharatHBaddi0078/Chatbot-using-Google-LLM"
        },
        hasImage: false,
        isSmall: true,
    },
    {
        id: "portfolio",
        techs: ["js", "sass", "webpack"],
        links: {
            github: "BharatHBaddi0078/Portfolio-Website",
        },
        hasImage: false,
    },
    {
        id: "web-scraping",
        techs: ["python"],
        links: {
            github: "BharatHBaddi0078/web-scraping",
        },
        isSmall: true,
    },
    {
        id: "stt-tts",
        techs: ["python"],
        links: {
            github: "BharatHBaddi0078/STT-TTS",
        },
        isSmall: true,
    },
];

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/Project.js





function mapLinks(links) {
    function map(link) {
        let href =
        "https://" + (link === "live" ? "" : websites/* default */.A[link]) + links[link];

        if (link === "figma") href = `https://figma.com/community/file/${links[link]}`
        if (link === "github" && links[link].startsWith("/")) href = media/* default */.A.github + links[link]


        const className = link === "cached" ? "button__secondary" : "";
        const name = `${link[0].toUpperCase()}${link.slice(1)}`;

        return /*html*/ `<a href="${href}" class="button ${className}">${name} =></a>`;
    }

    return Object.keys(links).map(map).join("");
}

/* harmony default export */ const Project = (({ id }, t) => {
    const { hasImage, techs: projectTech, links } = consts_projects.find(
        (project) => project.id === id
    );

    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs/* default */.A[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
});

;// ./src/app/components/ProjectList.js




/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
    return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ""}
            <div class="project-list">
                ${consts_projects
                    .filter(filter)
                    .slice(0, limit)
                    .sort((a, b) => a.hasImage - b.hasImage)
                    .map(({ id }) => Project({ id }, t))
                    .join("")}
            </div>
        ${title ? "</div>" : ""}
    `;
});

;// ./src/app/views/Projects.js





/* harmony default export */ const Projects = ((t, t2) => {
    return /*html*/ `
        ${(0,Path/* default */.A)({ description: t.description })}
        ${ProjectList({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${ProjectList({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}
    `;
});


/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});

/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ts: "TypeScript",
    js: "JavaScript",
    python: "Python",
    c: "C",
    cpp: "C++",
    sql: "SQL",
    sqlite: "SQLite",
    postgresql: "PostgreSQL",
    mysql: "MySQL",
    'sql-server': "SQL Server",
    mongo: "MongoDB",
    postgreSql: "PostgreSQL",
    html: "HTML",
    css: "CSS",
    streamlit: "Streamlit",
    jupyter: "Jupyter Notebook",
    sass: "SASS",
    scss: "SCSS",
    less: "Less",
    stylus: "Stylus",
    ejs: "EJS",
    jinja: "Jinja2",
    node: "Node.js",
    npm: "NPM",
    bash: "Bash",
    vscode: "VSCode",
    nvim: "NeoVim",
    figma: "Figma",
    git: "Git",
    github: "GitHub",
    tableau: "Tableau",
    xfce: "XFCE",
    react: "React",
    tensorflow: "TensorFlow",
    pytorch: "PyTorch",
    "scikit-learn": "Scikit-Learn",
    pandas: "Pandas",
    numpy: "NumPy",
    matplotlib: "Matplotlib",
    seaborn: "Seaborn",
    plotly: "Plotly",
    huggingface: "Hugging Face",
    nltk: "NLTK",
    discordJs: "Discord.js",
    flask: "Flask",
    quart: "Quart",
    express: "Express",
    rtk: "RTK",
    zod: "Zod",
    webpack: "WebPack",
    pug: "Pug",
    gulp: "Gulp",
    next: "Next.js",
    nextjs: "Next.js",
    deno: "Deno",
    pixijs: "PixiJS",
    preact: "Preact",
    "shadcn-ui": "shadcn/ui",
});

/***/ })

}]);
"use strict";
(self["webpackChunkbharath_portfolio"] = self["webpackChunkbharath_portfolio"] || []).push([[611],{

/***/ 611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ views_About)
});

// EXTERNAL MODULE: ./src/app/components/Path.js
var Path = __webpack_require__(778);
;// ./src/app/blocks/about/About.js
/* harmony default export */ const About = ((t) => {
    return /*html*/`
        <section class="about">
            <div class="about__text">
                ${t.description.map(text => /*html*/`
                    <p class="about__description">${text}</p>
                `).join("")}
                ${t.experience ? /*html*/`
                    <div class="about__section">
                        <div class="about__chip">${t.experienceTitle || "Experience"}</div>
                        <div class="skill-block__list">
                            ${t.experience.map(item => /*html*/`
                                <div class="skill-block">
                                    <span class="skill-block__name">${item}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                ` : ""}
                ${t.education ? /*html*/`
                    <div class="about__section">
                        <div class="about__chip">${t.educationTitle || "Education"}</div>
                        <div class="skill-block__list">
                            ${t.education.map(item => /*html*/`
                                <div class="skill-block">
                                    <span class="skill-block__name">${item}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                ` : ""}
            </div>
        </section>
    `
});
// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
;// ./src/app/components/SkillBlock.js


/* harmony default export */ const SkillBlock = (({ id }, t) => {
    const skillName = techs/* default */.A[id] || id;
    
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${skillName}</div>
        </div>
    `;
});

;// ./src/app/consts/skills.js
/* harmony default export */ const skills = ({
    // Programming Languages
    python: { category: 'language' },
    c: { category: 'language' },
    cpp: { category: 'language' },
    
    // Databases
    postgresql: { category: 'database' },
    mysql: { category: 'database' },
    sqlite: { category: 'database' },
    'sql-server': { category: 'database' },
    
    // Frontend
    html: { category: 'frontend' },
    css: { category: 'frontend' },
    js: { category: 'frontend' },
    react: { category: 'frontend' },
    'nextjs': { category: 'frontend' },
    streamlit: { category: 'frontend' },
    'shadcn-ui': { category: 'frontend' },
    
    // Tools
    npm: { category: 'tool' },
    vscode: { category: 'tool' },
    huggingface: { category: 'tool' },
    git: { category: 'tool' },
    github: { category: 'tool' },
    figma: { category: 'tool' },
    jupyter: { category: 'tool' },
    bash: { category: 'tool' },
    tableau: { category: 'tool' },
    
    // Frameworks & Libraries
    tensorflow: { category: 'framework' },
    pytorch: { category: 'framework' },
    'scikit-learn': { category: 'framework' },
    pandas: { category: 'framework' },
    numpy: { category: 'framework' },
    matplotlib: { category: 'framework' },
    seaborn: { category: 'framework' },
    plotly: { category: 'framework' },
    nltk: { category: 'framework' }
});
;// ./src/app/blocks/about/Skills.js



/* harmony default export */ const Skills = ((t, t2) => {
    const tabNames = {
        language: 'Programming Languages',
        database: 'Databases', 
        frontend: 'Frontend',
        tool: 'Tools',
        framework: 'Frameworks & Libraries'
    };

    const skillsByCategory = {};
    Object.keys(skills).forEach(skillId => {
        const category = skills[skillId].category;
        if (!skillsByCategory[category]) {
            skillsByCategory[category] = [];
        }
        skillsByCategory[category].push(skillId);
    });

    return /*html*/`
        <section class="skills">
            <h2 class="h2">${t.title}</h2>
            <div class="skills__tabs">
                ${Object.keys(skillsByCategory).map((tab, index) => `
                    <button 
                        class="skills__tab ${index === 0 ? 'skills__tab--active' : ''}" 
                        data-tab="${tab}"
                    >
                        ${tabNames[tab]}
                    </button>
                `).join('')}
            </div>
            <div class="skills__indicator"></div>
            <div class="skills__content">
                ${Object.keys(skillsByCategory).map((tab, index) => `
                    <div class="skills__panel ${index === 0 ? 'skills__panel--active' : ''}" data-panel="${tab}">
                        <div class="skills__grid">
                            ${skillsByCategory[tab].map(skill => SkillBlock({ id: skill }, t2)).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `
});

;// ./src/app/views/About.js






/* harmony default export */ const views_About = ((t, locale) => {
    return /*html*/ `
        ${(0,Path/* default */.A)({ description: t.description })}
        ${About(t.about)}
        ${Skills(t.skills, locale.skills)}
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
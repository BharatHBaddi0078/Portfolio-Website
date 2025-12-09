"use strict";
(self["webpackChunkbharath_portfolio"] = self["webpackChunkbharath_portfolio"] || []).push([[543],{

/***/ 543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// ./src/app/components/Dots.js
const radius = 4;
const gap = 16;

/* harmony default export */ const Dots = (({ width = 5, height = 5 } = {}) => {
    const svgWidth = (radius * 2 + gap) * width - gap
    const svgHeight = (radius * 2 + gap) * height - gap

    return /*html*/ `
        <svg width="100%" class="dots" viewBox="0 0 ${svgWidth} ${svgHeight}">
            ${new Array(width)
                .fill(new Array(height).fill(""))
                .map((arr, i) =>
                    arr.map((_, j) => {
                        const x = radius + i * (radius * 2 + gap);
                        const y = radius + j * (radius * 2 + gap);

                        return /*html*/ `<circle cx="${x}" cy="${y}" r="${radius}" />`;
                    }).join("")
                )
                .join("")}
        </svg>
    `;
});

;// ./src/app/blocks/home/Hero.js


/* harmony default export */ const Hero = ((t) => {
    return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="#contacts">${t.button} =></a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="" class="hero__logo">
                ${Dots({})}
            </div>
        </section>
    `;
});

;// ./src/app/blocks/home/Quote.js
/* harmony default export */ const Quote = ((t) => {
    return /*html*/`
        <figure class="quote">
            <blockquote class="quote__text">${t.text}</blockquote>
            <figcaption class="quote__author">${t.author}</figcaption>
        </figure>
    `
});
;// ./src/app/components/GitHubStats.js


/* harmony default export */ const GitHubStats = ((_, t) => {
    return /*html*/ `
        <section class="github-stats">
            <div class="container">
                <h2 class="github-stats__title">GitHub Summary</h2>
                <div class="github-stats__content">
                    <div class="github-stats__card">
                        <h3>Summary Cards</h3>
                        <div class="github-stats__grid">
                            <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards" target="_blank" rel="noopener" aria-label="Profile Details card source">
                                <img src="https://raw.githubusercontent.com/BharatHBaddi0078/BharatHBaddi0078/master/profile-summary-card-output/nord_dark/0-profile-details.svg" alt="Profile Details summary card" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.outerHTML='\u003cp class=\'github-stats__error\'\u003eProfile Details card temporarily unavailable\u003c/p\u003e'" />
                            </a>
                            <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards" target="_blank" rel="noopener" aria-label="Repos Per Language card source">
                                <img src="https://raw.githubusercontent.com/BharatHBaddi0078/BharatHBaddi0078/master/profile-summary-card-output/nord_dark/1-repos-per-language.svg" alt="Repos Per Language summary card" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.outerHTML='\u003cp class=\'github-stats__error\'\u003eRepos Per Language card temporarily unavailable\u003c/p\u003e'" />
                            </a>
                            <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards" target="_blank" rel="noopener" aria-label="Most Commit Language card source">
                                <img src="https://raw.githubusercontent.com/BharatHBaddi0078/BharatHBaddi0078/master/profile-summary-card-output/nord_dark/2-most-commit-language.svg" alt="Most Commit Language summary card" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.outerHTML='\u003cp class=\'github-stats__error\'\u003eMost Commit Language card temporarily unavailable\u003c/p\u003e'" />
                            </a>
                            <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards" target="_blank" rel="noopener" aria-label="Stats card source">
                                <img src="https://raw.githubusercontent.com/BharatHBaddi0078/BharatHBaddi0078/master/profile-summary-card-output/nord_dark/3-stats.svg" alt="Stats summary card" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.outerHTML='\u003cp class=\'github-stats__error\'\u003eStats card temporarily unavailable\u003c/p\u003e'" />
                            </a>
                            <a href="https://github.com/vn7n24fzkq/github-profile-summary-cards" target="_blank" rel="noopener" aria-label="Productive Time card source">
                                <img src="https://raw.githubusercontent.com/BharatHBaddi0078/BharatHBaddi0078/master/profile-summary-card-output/nord_dark/4-productive-time.svg" alt="Productive Time summary card" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.outerHTML='\u003cp class=\'github-stats__error\'\u003eProductive Time card temporarily unavailable\u003c/p\u003e'" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
});
// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/blocks/home/Contacts.js


const contacts = [
    {
        name: "discord",
        text: media/* default */.A.discordTag,
    },
    {
        name: "email",
        text: media/* default */.A.emailRaw,
    }
];

/* harmony default export */ const Contacts = ((t) => {
    return /*html*/ `
        <section class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media/* default */.A[contact.name]}">
                                <img src="/images/icons/${
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </section>
    `;
});

;// ./src/app/views/Home.js








/* harmony default export */ const Home = ((t, locale) => {
    return /*html*/`
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${GitHubStats()}
        ${Contacts(t.contacts)}
    `;
});


/***/ })

}]);
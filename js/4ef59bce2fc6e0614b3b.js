"use strict";
(self["webpackChunkbharath_portfolio"] = self["webpackChunkbharath_portfolio"] || []).push([[365],{

/***/ 365:
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
;// ./src/app/components/GitHubStreak.js
/* harmony default export */ const GitHubStreak = ((username = "BharatHBaddi0078") => {
    const primary = `https://streak-stats.demolab.com/?user=${username}&theme=dark&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B35&currStreakNum=58A6FF&sideNums=58A6FF&currStreakLabel=C9D1D9&sideLabels=C9D1D9&dates=8B949E&hide_border=true`;
    const fallback = `https://streak-stats.demolab.com/?user=${username}&theme=github-dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`;

    const handler = `
        function streakFallback(img){
            if(!img.dataset.fallback){
                img.dataset.fallback='used';
                img.src='${fallback}';
            } else {
                img.outerHTML = '<p style="color:#8B949E;text-align:center;padding:20px;">Streak stats temporarily unavailable</p>';
            }
        }
    `;

    return /*html*/ `
        <div class="github-streak">
            <img src="${primary}" 
                 alt="GitHub Contribution Streak" 
                 onerror="streakFallback(this)"
                 onload="this.style.opacity='1'"
                 style="opacity:0; transition: opacity 0.5s ease; max-width: 100%; height: auto;" />
            <script>${handler}</script>
        </div>
    `;
});
;// ./src/app/components/GitHubStats.js


/* harmony default export */ const GitHubStats = ((_, t) => {
    return /*html*/ `
        <section class="github-stats">
            <div class="container">
                <h2 class="github-stats__title">GitHub Stats</h2>
                <div class="github-stats__content">
                    <div class="github-stats__card">
                        <h3>Profile Statistics</h3>
                            <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=BharatHBaddi0078&show_icons=true&count_private=true&theme=dark&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff&hide_border=true" 
                                alt="GitHub Stats" 
                                onerror="this.outerHTML='<p style=\'color:#8B949E;text-align:center;padding:20px;\'>Profile statistics temporarily unavailable</p>'" />
                    </div>
                    <div class="github-stats__card">
                        <h3>Contribution Streak</h3>
                        ${GitHubStreak("BharatHBaddi0078")}
                    </div>
                    <div class="github-stats__card">
                        <h3>Top Languages</h3>
                                <img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=BharatHBaddi0078&layout=compact&theme=dark&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&hide_border=true&langs_count=6" 
                                    alt="Top Languages" 
                                    onerror="this.src='assets/images/meta/top-langs-fallback.svg'" />
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
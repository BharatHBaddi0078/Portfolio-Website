/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    discord: "discord.com/users/",
    github: "github.com/",
    figma: "figma.com/@",
    replit: "replit.com/@",
    stackOverflow: "stackoverflow.com/users/",
    codewars: "codewars.com/users/",
    devTo: "dev.to/",
    cssBattle: "cssbattle.dev/player/",
    codepen: "codepen.io/",
    dribble: "dribbble.com/",
    linkedin: "linkedin.com/in/",
    instagram: "instagram.com/",
    email: "mailto:"
});

/***/ }),

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/components/MediaIcon.js


/* harmony default export */ const MediaIcon = (({ name }) => {
    return /*html*/ `
        <a href="${media/* default */.A[name]}" class="media">
            <img src="/images/icons/${name}.svg" alt="${name}" class="media__icon"/>
        </a>`;
});

;// ./src/app/components/Footer.js



/* harmony default export */ const Footer = ((t) => {
    return /*html*/ `
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__info">
                        <div class="footer__header">
                            <div class="logo">
                                <img src="/images/logo.svg" alt="logo" class="logo__img">
                                <div class="logo__name">Bharath</div>
                            </div>
                            <a class="footer__email" href="${media/* default */.A.email}">${media/* default */.A.emailRaw}</a>
                        </div>

                        <p class="footer__description">${t.description}</p>
                    </div>
                    <div class="footer__media">
                        <div class="footer__title">${t.media}</div>
                        <div class="footer__list">
                            ${["instagram", "linkedin", "discord", "github"]
                                .map((name) => MediaIcon({ name }))
                                .join("")}
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
});

// EXTERNAL MODULE: ./src/app/consts/routes.js
var routes = __webpack_require__(739);
;// ./src/app/components/Header.js



const paths = ["/", "/projects", "/about-me"]

/* harmony default export */ const Header = ((t) => {
    return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${["discord", "github", "linkedin", "email"]
                        .map((name) => MediaIcon({ name }))
                        .join("")}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="Bharath logo">
                        <span class="logo__name">Bharath</span>
                    </a>
                    <div class="header__links">
                        ${paths
                            .map(
                                (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                                    window.location.pathname === path
                                        ? "header__link_active"
                                        : ""
                                }">${t[routes/* default */.A[path].name]}</a>
                            `
                            )
                            .join("")}
                    </div>

                </div>
            </div>
            

        </header>
    `;
});

// EXTERNAL MODULE: ./src/app/helpers/localeHandler.js
var localeHandler = __webpack_require__(788);
;// ./src/app/views/Layout.js




/* harmony default export */ const Layout = (async (content, path) => {
    const locale = await (0,localeHandler/* getLocale */.J)()

    return /*html*/ `
        ${Header(locale.header)}
        <div class="container content">
            ${content(locale.pages[path.name], locale)}
        </div>
        ${Footer(locale.footer)}
    `;
});


/***/ }),

/***/ 739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * @type {import("../../types/Routes").Routes}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "/": {
        name: "home",
        element: "Home",
    },
    "/projects": {
        name: "projects",
        element: "Projects",
    },
    "/about-me": {
        name: "about",
        element: "About",
    },
    "/404": {
        name: "404",
        element: "PageNotFound",
    },
    
    // "/contacts": {
    //     name: "contacts",
    //     element: "Contacts",
    // },
});

/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   J: () => (/* binding */ getLocale)
/* harmony export */ });
const defaultLocale = "en"


function setLocaleHander() {
    const options = document.querySelectorAll(".dropdown__option");
    const label = document.querySelector(".dropdown__label");

    options.forEach((option) => {
        if (option.innerHTML === localStorage.locale) 
            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

        option.addEventListener("click", () => {
            localStorage.locale = option.innerHTML;

            window.location.reload();
        });
    });
}

async function getLocale() {
    const locale = localStorage.locale ?? defaultLocale

    return fetch(`/locales/${locale}.json`).then(res => res.json())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocaleHander);



/***/ }),

/***/ 887:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": [
		611,
		611
	],
	"./About.js": [
		611,
		611
	],
	"./Contacts": [
		960,
		960
	],
	"./Contacts.js": [
		960,
		960
	],
	"./Home": [
		543,
		543
	],
	"./Home.js": [
		543,
		543
	],
	"./Layout": [
		669
	],
	"./Layout.js": [
		669
	],
	"./PageNotFound": [
		573,
		573
	],
	"./PageNotFound.js": [
		573,
		573
	],
	"./Projects": [
		68,
		68
	],
	"./Projects.js": [
		68,
		68
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 887;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ consts_media)
});

// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
;// ./src/app/proxies/media.js



/* harmony default export */ const media = ({
    get(target, name) {
        if (name === "emailRaw") 
            return target.email
        
        if (name === "discord") return `https://${websites/* default */.A.discord}${target.discord.id}`
        if (name === "discordTag") return target.discord.tag

        return `${name === "email" ? "" : "https://"}${websites/* default */.A[name] ?? ""}${target[name]}`
    }
});
;// ./src/app/consts/media.js


const media_media = {
    username: "brucewayyyne",
    discord: {
        id: "brucewayyyne",
        tag: "brucewayyyne",
    },
    stackOverflow: {
        id: "",
        name: "brucewayyyne",
    },
    github: "BharatHBaddi0078",
    figma: "brucewayyyne",
    replit: "brucewayyyne",
    codewars: "brucewayyyne",
    devTo: "brucewayyyne",
    cssBattle: "brucewayyyne",
    codepen: "brucewayyyne",
    dribble: "brucewayyyne",
    email: "bharathbaddi007.8@gmail.com",
    linkedin: "bharath-b-966430293",
    instagram: "igbharathh",
    reddit: "Impressive_Goal_2117"

}

/* harmony default export */ const consts_media = (new Proxy(media_media, media));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"68":"f8b230c3532409b25529","543":"ff2edc86fb96b7010281","573":"92d030a2a1050b82d723","611":"4e2778fb83bbd3252477","960":"900b8000f7db5e72d5de"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 611) return "css/611.css";
/******/ 			if (chunkId === 543) return "css/543.css";
/******/ 			if (chunkId === 68) return "css/68.css";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bharath-portfolio:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"68":1,"543":1,"611":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbharath_portfolio"] = self["webpackChunkbharath_portfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/app/views/Layout.js + 3 modules
var Layout = __webpack_require__(669);
// EXTERNAL MODULE: ./src/app/consts/routes.js
var routes = __webpack_require__(739);
;// ./src/app/helpers/startTitleAnimation.js

const steps = "/-\\|";
const FPS = 2
const frameInterval = 1000 / FPS;

let step = 0;
let lastTimestep = 0;

/* harmony default export */ const startTitleAnimation = ((pathName) => {
    window.requestAnimationFrame(animation);

    function animation(timestamp) {
        if (lastTimestep + frameInterval < timestamp) {
            document.title = `${steps[step++]} Bharath | ${pathName}`;

            step %= steps.length;
            lastTimestep = timestamp;
        }

        window.requestAnimationFrame(animation);
    }
});
// EXTERNAL MODULE: ./src/app/helpers/localeHandler.js
var localeHandler = __webpack_require__(788);
;// ./src/app/helpers/loadCssFile.js
/* harmony default export */ const loadCssFile = ((pathName) => {
    const link = document.createElement("link")
    link.href = `/css/${pathName}.css`;
    link.rel = "stylesheet"
    
    document.head.appendChild(link)
});
;// ./src/app/helpers/replacePath.js

// From https://github.com/rafgraph/spa-github-pages
/* harmony default export */ const replacePath = (async () => {
    const l = window.location;

    if (l.search[1] === "/") {
        let decoded = l.search
            .slice(1)
            .split("&")
            .map((s) => s.replace(/~and~/g, "&"))
            .join("?");

        window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
});
;// ./src/app/helpers/skillsTabs.js
function initializeSkillsTabs() {
    const tabs = document.querySelectorAll('.skills__tab');
    const indicator = document.querySelector('.skills__indicator');
    
    if (!tabs.length || !indicator) return;

    // Initialize indicator position
    updateIndicator();

    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.target.dataset.tab;
            switchTab(targetTab);
        });
    });

    // Handle window resize
    window.addEventListener('resize', updateIndicator);
}

function switchTab(tabName) {
    // Remove active classes from current tab and panel
    const currentActiveTab = document.querySelector('.skills__tab--active');
    const currentActivePanel = document.querySelector('.skills__panel--active');
    
    if (currentActiveTab) currentActiveTab.classList.remove('skills__tab--active');
    if (currentActivePanel) currentActivePanel.classList.remove('skills__panel--active');

    // Add active classes to new tab and panel
    const newActiveTab = document.querySelector(`[data-tab="${tabName}"]`);
    const newActivePanel = document.querySelector(`[data-panel="${tabName}"]`);
    
    if (newActiveTab) newActiveTab.classList.add('skills__tab--active');
    if (newActivePanel) newActivePanel.classList.add('skills__panel--active');

    // Update indicator position
    updateIndicator();
}

function updateIndicator() {
    const activeTab = document.querySelector('.skills__tab--active');
    const indicator = document.querySelector('.skills__indicator');
    const tabsContainer = document.querySelector('.skills__tabs');
    
    if (!activeTab || !indicator || !tabsContainer) return;

    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    
    const offsetLeft = tabRect.left - containerRect.left;
    const width = tabRect.width;
    
    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${width}px`;
}
;// ./src/app/index.js










const rootId = "root";
async function render() {
    const path = routes/* default */.A[window.location.pathname] ?? routes/* default */.A["/404"];

    loadCssFile(path.name);
    startTitleAnimation(path.name);

    document.getElementById(rootId).innerHTML = await (0,Layout["default"])(
        (
            await __webpack_require__(887)(`./${path.element}`)
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
    .then(() => (0,localeHandler/* default */.A)());

})();

/******/ })()
;
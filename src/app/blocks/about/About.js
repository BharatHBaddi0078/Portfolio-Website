export default (t) => {
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
                            ${t.experience.map(item => {
                                const isObj = typeof item === 'object';
                                if (!isObj) {
                                    return /*html*/`<div class="skill-block"><span class="skill-block__name">${item}</span></div>`;
                                }
                                const title = `${item.role} at ${item.company}`;
                                const years = item.years ? ` <span class="skill-block__years">— ${item.years}</span>` : "";
                                const linkStart = item.link ? `<a href="${item.link}" target="_blank" rel="noopener">` : "";
                                const linkEnd = item.link ? `</a>` : "";
                                const img = item.image ? `<img class="skill-block__logo" src="${item.image}" alt="${item.company} logo" onerror="this.style.display='none'"/>` : "";
                                return /*html*/`
                                <div class="skill-block">
                                    ${img}
                                    ${linkStart}<span class="skill-block__name">${title}${years}</span>${linkEnd}
                                </div>`;
                            }).join("")}
                        </div>
                    </div>
                ` : ""}
                ${t.education ? /*html*/`
                    <div class="about__section">
                        <div class="about__chip">${t.educationTitle || "Education"}</div>
                        <div class="skill-block__list">
                            ${t.education.map(item => {
                                const isObj = typeof item === 'object';
                                const name = isObj ? item.name : item;
                                const years = isObj && item.years ? ` <span class="skill-block__years">— ${item.years}</span>` : "";
                                const linkStart = isObj && item.link ? `<a href="${item.link}" target="_blank" rel="noopener">` : "";
                                const linkEnd = isObj && item.link ? `</a>` : "";
                                const img = isObj && item.image ? `<img class="skill-block__logo" src="${item.image}" alt="${item.name} logo" onerror="this.style.display='none'"/>` : "";
                                return /*html*/`
                                <div class="skill-block">
                                    ${img}
                                    ${linkStart}<span class="skill-block__name">${name}${years}</span>${linkEnd}
                                </div>`
                            }).join("")}
                        </div>
                    </div>
                ` : ""}
            </div>
        </section>
    `
}
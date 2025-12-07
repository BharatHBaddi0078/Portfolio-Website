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
}
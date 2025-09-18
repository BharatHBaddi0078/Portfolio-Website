import SkillBlock from "@/components/SkillBlock"
import skills from "@/consts/skills"

export default (t, t2) => {
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
}

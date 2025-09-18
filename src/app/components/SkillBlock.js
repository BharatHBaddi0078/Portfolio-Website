import techs from "@/consts/techs";

export default ({ id }, t) => {
    const skillName = techs[id] || id;
    
    return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name">${skillName}</div>
        </div>
    `;
};

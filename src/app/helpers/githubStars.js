const createParticles = (container) => {
    const colors = ["#FACC15", "#F97316", "#C778DD", "#58A6FF"];

    colors.forEach((color, index) => {
        const particle = document.createElement("span");
        particle.className = "footer__github-particle";
        particle.style.setProperty("--particle-color", color);
        particle.style.setProperty("--particle-angle", `${index * 90}deg`);
        container.appendChild(particle);
    });
};

export const initializeGitHubStars = () => {
    const button = document.querySelector("[data-github-stars]");
    if (!button) return;

    const icon = button.querySelector("[data-github-stars-icon]");
    const particles = button.querySelector("[data-github-stars-particles]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    button.setAttribute("aria-busy", "false");
    button.classList.add("footer__github-button--loaded");
    icon.classList.add("footer__github-star--filled");

    if (!reducedMotion) {
        createParticles(particles);
        button.classList.add("footer__github-button--burst");
    }
};

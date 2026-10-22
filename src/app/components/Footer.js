import media from "@/consts/media";

export default (t) => {
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
                            <a class="footer__email" href="${media.email}">${media.emailRaw}</a>
                        </div>

                        <p class="footer__description">${t.description}</p>
                    </div>
                    <div class="footer__github">
                        <a class="footer__github-button" href="https://github.com/BharatHBaddi0078/Portfolio-Website" target="_blank" rel="noopener" data-github-stars data-username="BharatHBaddi0078" data-repo="Portfolio-Website" aria-busy="true">
                            <svg class="footer__github-logo" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 7.3c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48A10.002 10.002 0 0 0 22 12C22 6.477 17.523 2 12 2Z"/>
                            </svg>
                            <span class="footer__github-label">${t.githubStar}</span>
                            <span class="footer__github-star" data-github-stars-icon aria-hidden="true">★</span>
                            <span class="footer__github-particles" data-github-stars-particles aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <div class="footer__copyright">© ${t.copyright}</div>
            </div>

        </footer>
    `;
};

import GitHubStreak from "./GitHubStreak.js";

export default (_, t) => {
    return /*html*/ `
        <section class="github-stats">
            <div class="container">
                <h2 class="h2">GitHub Summary</h2>
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
};
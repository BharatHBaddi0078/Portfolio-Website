import GitHubStreak from "./GitHubStreak.js";

export default (_, t) => {
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
                                        onerror="this.onerror=null; const p=this.parentElement; this.remove(); const msg=document.createElement('div'); msg.className='github-stats__error'; msg.textContent='Top Languages temporarily unavailable.'; p.appendChild(msg);" />
                    </div>
                </div>
            </div>
        </section>
    `;
};
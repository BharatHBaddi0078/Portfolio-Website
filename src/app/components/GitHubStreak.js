export default (username = "BharatHBaddi0078") => {
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
};
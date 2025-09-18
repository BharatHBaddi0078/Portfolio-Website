export default (username = "BharatHBaddi0078") => {
    const streakServices = [
        `https://streak-stats.demolab.com/?user=${username}&theme=github-dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`,
        `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=github-dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D`,
        `https://streak-stats.demolab.com/?user=${username}&theme=dark&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B35&currStreakNum=58A6FF&sideNums=58A6FF&currStreakLabel=C9D1D9&sideLabels=C9D1D9&dates=8B949E&hide_border=true`,
        `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B35&currStreakNum=58A6FF&sideNums=58A6FF&currStreakLabel=C9D1D9&sideLabels=C9D1D9&dates=8B949E&hide_border=true`
    ];

    const fallbackHandler = `
        let currentIndex = 0;
        const services = ${JSON.stringify(streakServices)};
        
        function tryNextService(img) {
            currentIndex++;
            if (currentIndex < services.length) {
                img.src = services[currentIndex];
            } else {
                img.style.display = 'none';
                img.parentElement.innerHTML += '<p style="color: #8B949E; text-align: center; padding: 20px;">Streak stats temporarily unavailable</p>';
            }
        }
    `;

    return /*html*/ `
        <div class="github-streak">
            <img src="${streakServices[0]}" 
                 alt="GitHub Contribution Streak" 
                 onerror="tryNextService(this)"
                 onload="this.style.opacity='1'"
                 style="opacity:0; transition: opacity 0.5s ease; max-width: 100%; height: auto;" />
            <script>
                ${fallbackHandler}
            </script>
        </div>
    `;
};
export default (_, t) => {
    return /*html*/ `
        <section class="github-stats">
            <div class="container">
                <h2 class="h2">GitHub Summary</h2>
                <div class="github-stats__content">
                    <div class="github-stats__card">
                        <img src="https://ghstats.dev/api/card?username=BharatHBaddi0078&theme=midnight_sakura&border_radius=20.5&custom_title=Bharath%27s+GitHub+Stats&hide=hours%2Cissues%2Cavg" alt="Bharath's GitHub Stats Card" loading="lazy" referrerpolicy="no-referrer" />
                    </div>
                </div>
            </div>
        </section>
    `;
};
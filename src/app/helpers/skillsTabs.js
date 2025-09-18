export function initializeSkillsTabs() {
    const tabs = document.querySelectorAll('.skills__tab');
    const indicator = document.querySelector('.skills__indicator');
    
    if (!tabs.length || !indicator) return;

    // Initialize indicator position
    updateIndicator();

    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.target.dataset.tab;
            switchTab(targetTab);
        });
    });

    // Handle window resize
    window.addEventListener('resize', updateIndicator);
}

function switchTab(tabName) {
    // Remove active classes from current tab and panel
    const currentActiveTab = document.querySelector('.skills__tab--active');
    const currentActivePanel = document.querySelector('.skills__panel--active');
    
    if (currentActiveTab) currentActiveTab.classList.remove('skills__tab--active');
    if (currentActivePanel) currentActivePanel.classList.remove('skills__panel--active');

    // Add active classes to new tab and panel
    const newActiveTab = document.querySelector(`[data-tab="${tabName}"]`);
    const newActivePanel = document.querySelector(`[data-panel="${tabName}"]`);
    
    if (newActiveTab) newActiveTab.classList.add('skills__tab--active');
    if (newActivePanel) newActivePanel.classList.add('skills__panel--active');

    // Update indicator position
    updateIndicator();
}

function updateIndicator() {
    const activeTab = document.querySelector('.skills__tab--active');
    const indicator = document.querySelector('.skills__indicator');
    const tabsContainer = document.querySelector('.skills__tabs');
    
    if (!activeTab || !indicator || !tabsContainer) return;

    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    
    const offsetLeft = tabRect.left - containerRect.left;
    const width = tabRect.width;
    
    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${width}px`;
}
const tabContentIds = ['All', 'Manga', 'Manhwa', 'AboutPage', 'UpdateLog','Other'];
const tabIds = ['tabs-1', 'tabs-2', 'tabs-3', 'tabs-4', 'tabs-5','tabs-6'];

function hideAllContents() {
    tabContentIds.forEach(id => {
        const element = document.getElementById(id);
        element.classList.remove('slide-up');
        element.classList.add('hidden');
    });
}

function showContent(contentId) {
    const element = document.getElementById(contentId);
    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

tabIds.forEach((tabId, index) => {
    document.getElementById(tabId).addEventListener('click', () => {
        hideAllContents();
        showContent(tabContentIds[index]);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

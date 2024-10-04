const tabContentIds = ['All', 'Manga', 'Manhwa', 'AboutPage', 'UpdateLog'];

function hideAllContents() {
    tabContentIds.forEach(id => {
        const element = document.getElementById(id);
        if (element && !element.classList.contains('hidden')) {
            element.classList.remove('slide-up');
            element.classList.add('hidden');
        }
    });
}

// Click event listener for each tab
document.getElementById('tabs-1').addEventListener('click', function () {
    hideAllContents(); // Hide all contents first
    const element = document.getElementById('All');
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('slide-up');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

document.getElementById('tabs-2').addEventListener('click', function () {
    hideAllContents();
    const element = document.getElementById('Manga');
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('slide-up');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

document.getElementById('tabs-3').addEventListener('click', function () {
    hideAllContents();
    const element = document.getElementById('Manhwa');
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('slide-up');
        element.scrollIntoView({
            behavior: '',
            block: 'start'
        });
    }
});

document.getElementById('tabs-4').addEventListener('click', function () {
    hideAllContents();
    const element = document.getElementById('AboutPage');
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('slide-up');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

document.getElementById('tabs-5').addEventListener('click', function () {
    hideAllContents();
    const element = document.getElementById('UpdateLog'); 
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('slide-up');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

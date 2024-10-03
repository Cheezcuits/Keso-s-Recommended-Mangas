const tabContentIds = ['All', 'Manga', 'Manhwa', 'AboutPage'];

function hideAllContents() {
    tabContentIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element.classList.contains('hidden')) {
            element.classList.remove('slide-up');
            element.classList.add('hidden');
        }
    });
}

document.getElementById('tabs-1').addEventListener('click', function () {
    hideAllContents(); // Hide all contents first
    const element = document.getElementById('All');

    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById('tabs-2').addEventListener('click', function () {
    hideAllContents(); // Hide all contents first
    const element = document.getElementById('Manga');

    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById('tabs-3').addEventListener('click', function () {
    hideAllContents(); // Hide all contents first
    const element = document.getElementById('Manhwa');

    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById('tabs-4').addEventListener('click', function () {
    hideAllContents(); // Hide all contents first
    const element = document.getElementById('AboutPage');

    element.classList.remove('hidden');
    element.classList.add('slide-up');
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

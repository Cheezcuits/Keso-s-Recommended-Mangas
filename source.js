const tabs = document.querySelectorAll('#tabs-1, #tabs-2, #tabs-3, #tabs-4');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
const tabs = document.querySelectorAll('#tabs-1, #tabs-2, #tabs-3, #tabs-4, #tabs-5, #tabs-6');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            return;
        } else {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

//Go back button and smooth scrolling
document.getElementById('GoBack').addEventListener('click', function() {
    const element = document.getElementById('Tabs-Container');
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; 
    let start = null;

    function easeOut(t) {
        return t * (2 - t); // ease-out function
    }

    function scrollStep(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const t = Math.min(progress / duration, 1); 
        const easedT = easeOut(t);

        window.scrollTo(0, startPosition + easedT * distance);

        if (progress < duration) {
            window.requestAnimationFrame(scrollStep); 
        }
    }

    window.requestAnimationFrame(scrollStep); 
});

const button = document.getElementById('GoBack');

let isDragging = false;
let offsetX, offsetY;

// Mouse down event to start dragging
button.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - button.getBoundingClientRect().left;
    offsetY = e.clientY - button.getBoundingClientRect().top;
});

// Mouse move event to drag the button
document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        button.style.left = `${e.clientX - offsetX}px`;
        button.style.top = `${e.clientY - offsetY}px`;
    }
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', function () {
    isDragging = false;
});

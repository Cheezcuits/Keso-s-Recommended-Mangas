document.addEventListener("DOMContentLoaded", function() {
    // Select the elements you want to animate
    const animatedElements = document.querySelectorAll('.animated');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the animation
                entry.target.classList.add('visible');
                // Unobserve the element once it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the element is in view
    });

    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
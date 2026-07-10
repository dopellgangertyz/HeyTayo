document.addEventListener("DOMContentLoaded", () => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item) => observer.observe(item));

    const counters = document.querySelectorAll(".counter");

    const runCounter = (counter) => {
        const target = Number(counter.dataset.target);
        let current = 0;

        const update = () => {
            current += 2;

            if (current >= target) {
                counter.textContent = target + "%";
                return;
            }

            counter.textContent = current + "%";
            requestAnimationFrame(update);
        };

        update();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.6
    });

    counters.forEach(counter => counterObserver.observe(counter));
});
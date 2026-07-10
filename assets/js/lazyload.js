document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");

    if (!("IntersectionObserver" in window)) {
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");

            observer.unobserve(img);
        });
    }, {
        rootMargin: "200px"
    });

    images.forEach(img => observer.observe(img));
});
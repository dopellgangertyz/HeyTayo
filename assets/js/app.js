document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".bottom-nav a");
    const loader = document.getElementById("loader");

    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 20) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    updateHeader();

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    window.addEventListener("load", () => {
        if (loader) {
            loader.classList.add("hide");
        }
    });

    const glow = document.querySelector(".cursor-glow");

    if (glow && window.innerWidth > 768) {
        window.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        }, { passive: true });
    }
});
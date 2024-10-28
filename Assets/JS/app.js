    document.addEventListener("DOMContentLoaded", function () {
        const infoItems = document.querySelectorAll(".info-item");

        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        }

        function handleScroll() {
            infoItems.forEach(item => {
                if (isInViewport(item)) {
                    item.classList.add("animated");
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();
    });

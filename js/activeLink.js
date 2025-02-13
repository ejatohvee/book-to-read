(function pageLoad() {
    const menuLinks = document.querySelectorAll(".menu a");

    const currentPage = document.location.pathname.split("/").pop();
    menuLinks.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("menu__link--active");
        }
    });
})();
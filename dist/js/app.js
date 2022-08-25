(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const html = document.querySelector("html");
    document.addEventListener("click", (function(e) {
        const targetElement = e.target;
        if (targetElement.closest(".header__icon")) {
            html.classList.toggle("menu-open");
            html.classList.toggle("lock");
        } else if (!targetElement.closest(".menu__body")) {
            html.classList.remove("menu-open");
            html.classList.remove("lock");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();
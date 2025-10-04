const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector("#btnClose");
const media = window.matchMedia("(width < calc(700 / 16 * 1rem))");

function openMobileMenu() {
    btnOpen.setAttribute("aria-expanded", true);
}

function closeMobileMenu() {
    btnOpen.setAttribute("aria-expanded", false);
}

function setTopNav(e) {
    if(e.matches) {
        console.log("is mobile");
    } else {
        console.log("is desktop");
        closeMobileMenu(e);
    }
}

setTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function(e) {
    setTopNav(e);
});
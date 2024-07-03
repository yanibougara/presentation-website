// Commande servant à animer le déploiement du bouton de navigation
const blurBackground = document.querySelector(".blur");
const navCornerVisible = document.querySelector(".nav-corner-visible");
const navCorner = document.querySelector(".nav-corner");
const others = document.querySelectorAll(".others");
const body = document.body;

let isNavCornerVisible = false;

navCornerVisible.addEventListener("click", () => {
    if (!isNavCornerVisible) {
        blurBackground.classList.add("blur-appear");
        navCorner.classList.add("nav-appear");
        setTimeout(() => {
            others.forEach((other) => {
                other.classList.add("appear");
            });
        }, 1000);
    } else {
        others.forEach((other) => {
            other.classList.remove("appear");
        });
        setTimeout(() => {
            navCorner.classList.remove("nav-appear");
            blurBackground.classList.remove("blur-appear");
        }, 500);
    }
    isNavCornerVisible = !isNavCornerVisible;
});
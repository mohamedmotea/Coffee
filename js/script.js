let nav = document.querySelector("header nav");
document.querySelector("#menu-btn").onclick = function() {
    nav.classList.toggle("show");
    card.classList.remove("active");
    search.classList.remove("active");
}
let card = document.querySelector(".card-cen");
document.querySelector("#shop-btn").onclick = () => {
    card.classList.toggle("active");
    nav.classList.remove("show");
    search.classList.remove("active");
}
let search = document.querySelector("header form");
document.querySelector("#search-btn").onclick = () => {
    search.classList.toggle("active");
    nav.classList.remove("show");
    card.classList.remove("active");
}
window.onscroll = () => {
    nav.classList.remove("show");
    card.classList.remove("active");
    search.classList.remove("active");
};
// Initialize and add the map
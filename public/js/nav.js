let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("show-input");
    if ( navbar.classList.contains("show-input") ) {
        searchBox.classList.replace("bx-search", "bx-x")
    } else {
        searchBox.classList.replace("bx-x", "bx-search")
    }
});

// sidebar menu open & close
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let navLinks = document.querySelector(".nav-links");
let menuCloseBtn = navLinks.querySelector(".bx-x");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

menuCloseBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
});

// sidebar sub-menu open & close
let blogArrow = document.querySelector(".blog-arrow");

blogArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show1");
});

let moreArrow = document.querySelector(".more-arrow");

moreArrow.addEventListener("click", () => {
    navLinks.classList.toggle("show2");
});

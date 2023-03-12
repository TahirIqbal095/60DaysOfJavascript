// sidebar

let openBtn = document.getElementById("open")
let imgBtn1 = document.getElementById("imgBtn1")
let imgBtn2 = document.getElementById("imgBtn2")
let sidebarEl = document.getElementById("sidebar")
let linkTextEl = document.querySelectorAll(".link-text")

for (let i = 0; i < linkTextEl.length; i++) {
    openBtn.addEventListener("click", () => {

        sidebarEl.classList.toggle("w-[16rem]")
        imgBtn1.classList.toggle("hidden")
        imgBtn2.classList.toggle("hidden")

        setTimeout(() => { linkTextEl[i].classList.toggle("hidden") }, 100)

    })
}


// Gsap Animation gallery
const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 })
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
tl.to(".intro-gallery", { y: "-100%", duration: 1 }, "<")
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
tl.fromTo(".welcome-msg", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
tl.fromTo(".main-gallery", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")

// navbar gallery
const hambrgerBtn = document.querySelector(".hamburger")
const hamburgerItems = document.querySelector(".hamburger-items")
const items = document.querySelectorAll(".hamburger-items li")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerCloseIcon = document.querySelector(".hamburger-close-icon")

hambrgerBtn.addEventListener("click", () => {
    hamburgerItems.classList.toggle("open")
    hamburgerIcon.classList.toggle("hidden")
    hamburgerCloseIcon.classList.toggle("hidden")

    items.forEach(link => {
        link.classList.toggle("fade")
    })
})

// Caruosel gallery

var splide = new Splide('#main-carousel', {
    pagination: false
}).mount();

var splide = new Splide('#main-carousel', {
    pagination: false,
});

var thumbnails = document.getElementsByClassName('thumbnail');
var current;

for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
        splide.go(index);
    });
}

splide.on('mounted move', function () {
    var thumbnail = thumbnails[splide.index];
    if (thumbnail) {
        if (current) {
            current.classList.remove('is-active');
        }
        thumbnail.classList.add('is-active');
        current = thumbnail;
    }
});
splide.mount();

let openBtn = document.getElementById("open")
let toggleImgBtn1 = document.getElementById("toggleImg1")
let toggleImgBtn2 = document.getElementById("toggleImg2")
let sidebarEl = document.getElementById("sidebar")
let linkTextEl = document.querySelectorAll(".link-text")

for(let i=0; i<linkTextEl.length; i++){
    openBtn.addEventListener("click", () => {
        linkTextEl[i].classList.toggle("hidden")
        sidebarEl.classList.toggle("w-[16rem]")
        toggleImgBtn1.classList.toggle("hidden")
        toggleImgBtn2.classList.toggle("hidden")
    })
}

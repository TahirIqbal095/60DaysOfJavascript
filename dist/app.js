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

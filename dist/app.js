//sidebar

let sidebarEl = document.getElementById("sidebar")
let sidebarBtn = document.getElementById("sidebar-btn")

sidebarBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("hidden")
})
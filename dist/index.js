
let textEl = document.getElementById("text-el")

let bgColors = ["#804674", "#609966", "#5D3891", "#609EA2", "#EA8FEA"]

function backgroundColorFlipper(){
    let num = Math.floor(Math.random()*5)

    if(num == 0){
        textEl.textContent = "Background color:" + " " + "Purple"
    }else if(num == 1){
        textEl.textContent = "Background color:" + " " + "Green"
    }else if(num ==2){
        textEl.textContent = "Background color:" + " " + "Voilet"
    }else if(num ==3){
        textEl.textContent = "Background color:" + " " + "Teal"
    }else{
        textEl.textContent = "Background color:" + " " + "Pink"
    }

    document.body.style.backgroundColor = bgColors[num]
}

// color Flipper

let textEl = document.getElementById("text-el")

let bgColors = ["#804674", "#609966", "#5D3891", "#609EA2", "#EA8FEA"]

function backgroundColorFlipper() {
    let num = Math.floor(Math.random() * 5)

    if (num == 0) {
        textEl.textContent = "Background color:" + " " + "Purple"
    } else if (num == 1) {
        textEl.textContent = "Background color:" + " " + "Green"
    } else if (num == 2) {
        textEl.textContent = "Background color:" + " " + "Voilet"
    } else if (num == 3) {
        textEl.textContent = "Background color:" + " " + "Teal"
    } else {
        textEl.textContent = "Background color:" + " " + "Pink"
    }

    document.body.style.backgroundColor = bgColors[num]
}

// counter

let numberEl = document.getElementById("number-el")

let count = 0

function increment() {
    count += 1
    numberEl.textContent = count
    if (count > 0) {
        numberEl.style = "color: green;"
    }
}

function decrement() {
    count -= 1
    numberEl.textContent = count
    if (count < 0) {
        numberEl.style = "color: red;"
    }
}

function reset() {
    count = 0
    numberEl.textContent = count
    if (count == 0) {
        numberEl.style = "color: black;"
    }
}

// reviews

let nameEl = document.getElementById("name-el")
let professionEl = document.getElementById("profession-el")
let paraEl = document.getElementById("para-el")

let employee1 = {
    name: "Susan Smith",
    profession: "Web developer",
    review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
}

let employee2 = {
    name: "Tahir Iqbal",
    profession: "Full stack Web developer",
    review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
}

let employee3 = {
    name: "Adil Hussain",
    profession: "Front End developer",
    review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
}

let employee4 = {
    name: "Sameer manzoor",
    profession: "Intern",
    review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
}

let allEmployees = [employee2, employee3, employee4]
let totalEmloyees = allEmployees.length
let num = 0

function nextEl() {
    if (num < totalEmloyees) {
        nameEl.textContent = allEmployees[num].name
        professionEl.textContent = allEmployees[num].profession
        paraEl.textContent = allEmployees[num].review
        num += 1
    }
}



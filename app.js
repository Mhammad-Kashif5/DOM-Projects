/*  Task 01: Personal Profile Card  */

const profileName = document.querySelector("#profileName")
const EnterUsername = document.querySelector("#username")
const changeBtn = document.querySelector("#userBtn")

changeBtn.addEventListener("click", () => {
    let name = EnterUsername.value;
    if (name === "") {
        alert("Please enter your name")
        return;
    }
    profileName.classList.add("clicked")
    profileName.textContent = name
})

/* Task 02: Background Color Changer */

const colorsBtns = document.querySelectorAll(".btn")
const bgColor = document.querySelector(".btns")
const bg = document.querySelector("#bg")
colorsBtns.forEach((color) => {
    color.addEventListener("click", () => {
        bgColor.style.color = "white"
        if (color.textContent === "Red") {
            bg.textContent = "Background color Red"
            bgColor.style.backgroundColor = "red"
        } else if (color.textContent === "Blue") {
            bg.textContent = "Background color Blue";
            bgColor.style.backgroundColor = "blue"
        } else if (color.textContent === "Green") {
            bg.textContent = "Background color Green"
            bgColor.style.backgroundColor = "green"
        }

    })
})

/* Task 03: Image Attribute Controller */

const showImg = document.querySelector("#show")
const hideImg = document.querySelector("#hide")
const images = document.querySelector("img");
const img = document.querySelector("#img")
const changeImg = document.querySelector("#change")
const textImg = document.querySelector("#clickImg")

const originalImage = images.getAttribute("src")

showImg.addEventListener("click", () => {
    images.setAttribute("src", originalImage)
    textImg.textContent = "Show Image"
})
hideImg.addEventListener("click", () => {
    images.removeAttribute("src");
    textImg.textContent = "Hide Image"
})
changeImg.addEventListener("click", () => {
    img.setAttribute("src", "mountain.jpg")
    textImg.textContent = "Change Image"
})



/*  Task 04: Live typing text....*/
const textArea = document.querySelector("#text")
const textChar = document.querySelector("#textCount")

textArea.addEventListener("input", () => {
    if (textArea.value.length <= 100) {
        textChar.textContent = `Typing...: ${textArea.value} `
        return
    } else {
        alert("text is enough")
    }

})
/* Task 05: Dynamic To-Do List */

const users = document.querySelector("#users")
const addBtn = document.querySelector("#addUsers")
const list = document.querySelector("#list")

addBtn.addEventListener("click", () => {
    const name = users.value.trim();
    if (name === "") {
        alert("Input filed is empty")
        return;
    }
    const li = document.createElement("li")
    const text = document.createElement("span")
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("removeBtn")
    removeBtn.textContent = "Remove";
    text.textContent = name
    li.appendChild(text)
    li.appendChild(removeBtn)
    list.append(li)
    removeBtn.addEventListener("click", () => {
        li.remove()
    })
})


/* Task 06: Password Visibility Toggle */
const password = document.querySelector("#password")
const showPassword = document.querySelector("#showPas")
showPassword.addEventListener("click", () => {
    const show = password.classList.toggle("type")
    return show ? password.setAttribute("type", "text") : password.setAttribute("type", "password")
})

/* Task 07: Student Registration Form */

let studentForm = document.querySelector("#studentForm")
let studentName = document.querySelector("#stdName")
let studentEmail = document.querySelector("#stdEmail")
let studentPassword = document.querySelector("#stdPwd")
let submitBtn = document.querySelector("#submitBtn")

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = studentName.value.trim()
    let email = studentEmail.value.trim()
    let password = studentPassword.value.trim()
    let gender = document.querySelector('input[name="gender"]:checked')
    if (name === "" || email === "" || password === "" || gender === null) {
        alert("Please fill the input filed")
        return
    }

    let stdContainer = document.createElement("div")
    let stdName = document.createElement("h3")
    let stdEmail = document.createElement("p")
    let stdPassword = document.createElement("p")
    let stdGender = document.createElement("p")
    stdContainer.classList.add("studentContainer")
    stdName.textContent = "Name: " + name
    stdEmail.textContent = "Email: " + email
    stdPassword.textContent = "Password: " + password
    stdGender.textContent = "Gender: " + gender.value
    studentForm.append(stdName, stdEmail, stdPassword, stdGender)
    studentForm.reset()
})
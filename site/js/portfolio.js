const avatar = document.querySelector(".avatar")
const firstname = document.querySelector("#firstname")
const modify = document.querySelector(".modify")
const pinkBg = document.querySelectorAll(".pink-bg")
const pinkText = document.querySelectorAll(".pink-text") 

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

modify.addEventListener("click", () => {
    const username = prompt("Hey buddy what's your name?")
    const userColor = prompt("Hey buddy what's your color?")
    firstname.textContent = username
    firstname.style.color = "white"
    for (const element of pinkBg) {
        element.style.backgroundColor = userColor
    }
    for (const element of pinkText) {
        element.style.color = userColor
    }
})
const avatar = document.querySelector(".avatar")
const firstname = document.querySelector("#firstname")
const modify = document.querySelector(".modify")
const pinkBg = document.querySelector(".pink-bg")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

modify.addEventListener("click", () => {
    const username = prompt("Hey buddy what's your name?")
    const userColor = prompt("Hey buddy what's your color?")
    firstname.textContent = username
    firstname.style.color = "white"
    pinkBg.style.backgroundColor = userColor
})
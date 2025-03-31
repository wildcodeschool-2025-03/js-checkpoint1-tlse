const avatar = document.querySelector(".avatar")
const firstname = document.querySelector("#firstname")
const modify = document.querySelector(".modify")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg"
})

modify.addEventListener("click", () => {
    const username = prompt("Hey buddy what's your name?")
    firstname.textContent = username
    firstname.style.color = "white"
})
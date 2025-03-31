const image = document.querySelector(".avatar");

image.addEventListener("click", () => {
	image.src = "../site/image/avatar.svg";
});

const userName = document.querySelector("#firstname");
const buttonUserName = document.querySelector(".changeName");
const pinkElements = document.querySelectorAll('[class*="pink"]');

buttonUserName.addEventListener("click", () => {
	const userColor = prompt("Please, select a color :");
	const name = prompt("Please, enter your name :");

	if (userColor === "#750ff7") {
		for (const element of pinkElements) {
			if (element.classList.contains("pink-text")) {
				element.style.color = userColor;
			} else {
				element.style.backgroundColor = userColor;
			}
		}
	}

	if (name) {
		userName.textContent = name;
		userName.style.color = "white";
	}
});

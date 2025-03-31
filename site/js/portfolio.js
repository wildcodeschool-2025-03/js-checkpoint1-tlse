const image = document.querySelector(".avatar");

image.addEventListener("click", () => {
	image.src = "../site/image/avatar.svg";
});

const userName = document.querySelector("#firstname");
const buttonUserName = document.querySelector(".changeName");
const color = document.querySelector(".description.pink-bg");

buttonUserName.addEventListener("click", () => {
	const userColor = prompt("Please, select a color :");
	const name = prompt("Please, enter your name :");
	if (userColor === "#750ff7") {
		color.style.backgroundColor = "#750ff7";
	}

	if (name) {
		userName.textContent = name;
		userName.style.color = "white";
	}
});

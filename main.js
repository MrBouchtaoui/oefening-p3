console.log("It works...");

//1
let firstName;
let lastName;
let education;

// 4
let save;
let firstNameInput;
let lastNameInput;
let educationInput;
let outputDiv;
let reset;
let totalDiv;

//reset.style.background = "red";

let persons = [];

save.addEventListener("click", function () {});

reset.addEventListener("click", function () {
	outputDiv.innerHTML = "";
});

function resultfunc(a, b) {
	let result = a + b;
	return result;
}

console.log(resultfunc(2, 5));

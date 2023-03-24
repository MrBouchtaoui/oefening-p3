console.log("It works...");

// Opdr. 1
let x = 5;
if (x > 5.4) {
	console.log("Je hebt een voldoende");
} else {
	console.log("Je hebt een ONvoldoende");
}

// Opdr. 2
let cars = ["Mercedes", "Tesla", "Peugeot", "Volkswagen", "Kia"];
for (let a = 0; a < cars.length; a++) {
	const car = cars[a];
	console.log(car);
}

// 3
let save = document.querySelector(".save");
let firstNameInput = document.querySelector(".first-name");

save.addEventListener("click", function (event) {
	let firstName = firstNameInput.value;

	if (firstName === "") {
		firstNameInput.classList.add("error");
	} else {
		firstNameInput.classList.remove("error");
	}
});

// opdr. 4

let vehicles = [
	{
		brand: "Mercedes",
		model: "C class",
		buildYear: 2003,
	},
	{
		brand: "Volkswagen",
		model: "Golf 8",
		buildYear: 2022,
	},
];

for (let z = 0; z < vehicles.length; z++) {
	const car = vehicles[z];
	console.log(car);
}

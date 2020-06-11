const trinity = {
	Masters: 50,
	"Work Experience": 40,
	'"Silicon Valley of Europe"/better for tech': 40,
	"Easier to stay on": 30,
	Lila: 25,
	"1 year counts towards permananent residency": 6,
	Campus: 5,
	Weather: 3,
};

const saintAndrews = {
	Lila: 25,
	Friends: 17,
	Family: 10,
	Campus: 5,
};

function sumValuesOfObject(obj) {
	return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
}

function populateTable(obj, ID, totalID) {
	let total = sumValuesOfObject(obj);

	let table = Object.keys(obj)
		.map((key) => `<tr><td>${key}</td><td>${obj[key]}</td></tr>`)
		.join("");

	document.getElementById(
		ID
	).innerHTML = `<tr><th>Factor</th><th>Weightage</th></tr>${table}`;

	document.getElementById(
		totalID
	).innerHTML = `<tr><td>Total</td><td>${total}</td></tr>`;
}

populateTable(trinity, "trinity", "t-total");
populateTable(saintAndrews, "saint-andrews", "s-total");

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

function sum(obj) {
	return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
}

function render(obj, id, totalID) {
	let total = sum(obj);

	let table = Object.keys(obj)
		.map((key) => {
			return `<tr>
                    <td>${key}</td>
                    <td>${obj[key]}</td>
                </tr>`;
		})
		.join("");

	document.getElementById(id).innerHTML = `<tr>
												<th>Factor</th>
												<th>Weightage</th>
											 </tr>
											 ${table}`;

	document.getElementById(totalID).innerHTML = `<tr>
												 	<td>Total</td>
												 	<td>${total}</td>
											 	</tr>`;
}

render(trinity, "trinity", "t-total");
render(saintAndrews, "saint-andrews", "s-total");

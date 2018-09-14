// ( async function getBehance() {
// 	const response = await fetch('https://www.behance.net/v2/users/creativemint?api_key=QfFnKFvwd5jr0KMHMEOMBIYNlHsyKtFp', {})
// 	console.log(`Esta es mi data: ${data}`)
// })()

(async function loadData() {
	let user = 'alexwebpuro'
	let apiKey = 'QfFnKFvwd5jr0KMHMEOMBIYNlHsyKtFp'
	$.ajax({
		url: `https://www.behance.net/v2/users/${user}/projects?api_key=${apiKey}&callback=myJSONP`,
		dataType: 'jsonp',
	}).then( (response) => {

		const {
			projects: item
		} = response
		// Hacer un forEach, para imprimir los items
		$.each(item, (item, value) => {
			// console.log(value)
			$('#BehancePortafolio').append(templatePortfolio(value))
		})
	}).catch( err => console.log(err))
	function templatePortfolio(item) {
		return(
		`
		
		<div class="card ml-2 mr-2">
			<a href=${item.url}>
		    <img class="card-img-top" src="${item.covers['404']}" alt="${item.name} | ${item.owners[0].first_name}">
		    </a>
		    <div class="card-body">
				<h6 class="card-title text-uppercase">${item.name}</h6>
				<small class="card-text">${item.owners[0].first_name}</strong> | ${item.fields}</small>
				<p class="mb-0"><small><a href=${item.url}>ver en Behance</a></small></p>
			</div>
		</div>
		`
		)
	}
})();
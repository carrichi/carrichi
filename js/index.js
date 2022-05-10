
fetch('../json/es/albums-es.json')
	.then(response => response.json())
	.then(data => console.log(data));

const url = process.env.URL;

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data.urls.full);
		document.body.style.backgroundImage = `url(${data.urls.full})`;
	});

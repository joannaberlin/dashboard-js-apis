const url = process.env.URL;
const authNameWrapper = document.getElementById('img-auth');

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		document.body.style.backgroundImage = `url(${data.urls.full})`;
		authNameWrapper.innerHTML = `By: ${data.user.name}`;
	});

const url = process.env.URL;
const defUrl = process.env.DEFURL;
const authNameWrapper = document.getElementById('img-auth');

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		document.body.style.backgroundImage = `url(${data.urls.full})`;
		authNameWrapper.innerHTML = `By: ${data.user.name}`;
	})
	.catch((err) => {
		console.log(err);
		console.log('something went wrong!');
		document.body.style.backgroundImage = `url(${defUrl})`;
	});

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

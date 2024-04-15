const url = process.env.URL;
const defUrl = process.env.DEFURL;
const authNameWrapper = document.getElementById('img-auth');
const cryptoWrapper = document.getElementById('crypto-top');
const cryptoElement = document.getElementById('crypto');

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
	.then((res) => {
		if (!res.ok) {
			throw Error('something went wrong');
		}
		return res.json();
	})
	.then((data) => {
		cryptoWrapper.innerHTML = `
			<img src=${data.image.small} alt="${data.name} icon" />
			<span>${data.name}</span>
		`;
		cryptoElement.innerHTML += `
		<p>🎯: $${data.market_data.current_price.usd}</p>
		<p>👆: $${data.market_data.high_24h.usd}</p>
		<p>👇: $${data.market_data.low_24h.usd}</p>
		`;
	})
	.catch((err) => console.log(err));

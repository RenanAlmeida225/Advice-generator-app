const palceholder = document.querySelector('.palceholder');
const dice = document.getElementById('dice');

document.querySelector('.btn-advice').addEventListener('click', async () => {
	if (palceholder) {
		palceholder.remove();
	}

	dice.style.animation = 'rotation 2s linear';

	await fetch('https://api.adviceslip.com/advice')
		.then(res => {
			return res.json();
		})
		.then(data => {
			return data.slip;
		})
		.then(slip => {
			document.querySelector(
				'.advice-id'
			).innerHTML = `<span>ADVICE #${slip.id}</span>`;

			document.querySelector(
				'.advice'
			).innerHTML = `<span>"${slip.advice}"</span>`;

			dice.style.animation = '';
		})
		.catch(error => console.error('error:', error));
});

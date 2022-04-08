//'https://api.adviceslip.com/advice'

document.querySelector('.btn-advice').addEventListener('click', () => {
	fetch('https://api.adviceslip.com/advice')
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
		})
		.catch(error => console.error('error:', error));
});

//'https://api.adviceslip.com/advice'

fetch('https://api.adviceslip.com/advice')
	.then(res => {
		return res.json();
	})
	.then(data => {
		return data.slip;
	})
	.then(slip => console.log(slip.advice, slip.id))
	.catch(error => console.error('deu erro aqui:', error));

const content = document.querySelector('#content');

const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const h1 = document.createElement('h1');
const h1_2 = document.createElement('h1');
const h1_3 = document.createElement('h1');
const h2 = document.createElement('h2');
const h2_2 = document.createElement('h2');
const h2_3 = document.createElement('h2');
const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

export const getMenu = function () {
	content.innerHTML = '';
	content.appendChild(div);
	h1.innerText = 'Honey Tea';
	para.innerText =
		'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';
	h2.innerText = '$1';

	div.appendChild(h1);
	div.appendChild(para);
	div.appendChild(h2);

	content.appendChild(div2);
	h1_2.innerText = 'Beary Tea';
	para2.innerText =
		'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.';
	h2_2.innerText = '$3';

	div.appendChild(h1_2);
	div.appendChild(para2);
	div.appendChild(h2_2);

	content.appendChild(div3);
	h1_3.innerText = 'Toast and Jam';
	para3.innerText =
		'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.';
	h2_3.innerText = '$5';

	div.appendChild(h1_3);
	div.appendChild(para3);
	div.appendChild(h2_3);
};

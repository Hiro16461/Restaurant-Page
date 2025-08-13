const content = document.querySelector('#content');

const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const h1 = document.createElement('h1');
const h1_2 = document.createElement('h1');
const h1_3 = document.createElement('h1');
const img = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

export const getContact = function () {
    content.innerHTML = '';
	content.appendChild(div);
	h1.innerText = 'Mama Bear';
	para.innerText = 'Chef 555-555-5554 totallyRealEmail@notFake.com';

	div.appendChild(h1);
	div.appendChild(para);

	content.appendChild(div2);
	h1_2.innerText = 'Papa Bear';
	para2.innerText = 'Manager 555-555-5555 perfectlyRealEmail@notFake.com';

	div.appendChild(h1_2);
	div.appendChild(para2);

	content.appendChild(div3);
	h1_3.innerText = 'Baby Bear';
	para3.innerText = 'Waiter 555-555-5556 totallyRealEmail@notFake.com';

	div.appendChild(h1_3);
	div.appendChild(para3);
};

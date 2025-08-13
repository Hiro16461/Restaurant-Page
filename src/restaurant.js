import restaurantImage from './imgs/restaurant1.jpg';
import restaurantImage2 from './imgs/restaturant2.jpg';
import restaurantImage3 from './imgs/restaturant3.jpg';

const content = document.querySelector('#content');

const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const h1 = document.createElement('h1');
const h12 = document.createElement('h1');
const h13 = document.createElement('h1');
const img = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

export const getHome = function () {
	content.innerHTML = ""
	content.appendChild(div);
	h1.innerText = 'Best place for meals';
	para.innerText =
		'Nostrum unde minus necessitatibus laboriosam tempora fugiat. Commodi veritatis mollitia in exercitationem vitae suscipit voluptas. Deserunt provident laborum et id impedit ipsam. Corporis qui necessitatibus facere pariatur culpa.';
	img.src = restaurantImage;

	div.appendChild(h1);
	div.appendChild(para);
	div.appendChild(img);

	content.appendChild(div2);
	h12.innerText = 'Best place for meals';
	para2.innerText =
		'Nostrum unde minus necessitatibus laboriosam tempora fugiat. Commodi veritatis mollitia in exercitationem vitae suscipit voluptas. Deserunt provident laborum et id impedit ipsam. Corporis qui necessitatibus facere pariatur culpa.';
	img2.src = restaurantImage2;

	div.appendChild(h12);
	div.appendChild(para2);
	div.appendChild(img2);

	content.appendChild(div3);
	h13.innerText = 'Best place for meals';
	para3.innerText =
		'Nostrum unde minus necessitatibus laboriosam tempora fugiat. Commodi veritatis mollitia in exercitationem vitae suscipit voluptas. Deserunt provident laborum et id impedit ipsam. Corporis qui necessitatibus facere pariatur culpa.';
	img3.src = restaurantImage3;

	div.appendChild(h13);
	div.appendChild(para3);
	div.appendChild(img3);
};

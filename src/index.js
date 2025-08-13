import './styles.css';
import { getHome } from './restaurant';
import { getMenu } from './menu';
import { getContact } from './contact';

getHome();

const homeButton = document.getElementById('home');
homeButton.addEventListener('click', getHome);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', getMenu);

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', getContact);

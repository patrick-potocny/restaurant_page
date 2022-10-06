import './style.css';
import loadHomePage from './modules/loadHomePage'
import loadMenuPage from './modules/loadMenuPage'
import loadContactPage from './modules/loadContactPage'

loadHomePage();

const homeBtn = document.getElementById('logo')
homeBtn.addEventListener('click', loadHomePage)

const contactBtn = document.getElementById('get-contact');
contactBtn.addEventListener('click', loadContactPage)



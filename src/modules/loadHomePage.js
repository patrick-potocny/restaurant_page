import loadMenuPage from "./loadMenuPage";

function loadHomePage() {
    const content = document.getElementById('content');

    content.innerHTML = `
    <main>
        <h2 class="motto">Best pizza not only in your town but your 
            whole country.</h2>
        <p class="description">We make our pizzas with love and natural 
            ingredients grown in our own
            <span class="highlight">BIO</span> garden.</p>
        <button class="menu-btn get-menu">CHECK OUR MENU</button>
    </main>
    `;

    const menuBtns = document.getElementsByClassName('get-menu');
    for (const btn of menuBtns) {
            btn.addEventListener('click', loadMenuPage)
        };
}

export default loadHomePage
export default function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = `        
    <main>
        <div class="menu-img"></div>
    </main>`;

    const contactBtn = document.getElementById('get-contact')
    contactBtn.classList.remove("active")

    const menuBtn = document.getElementById('get-menu')
    menuBtn.classList.add("active")
}
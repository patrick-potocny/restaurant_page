export default function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <main class="contact">
        <h2 class="contact-name">PAPOs PIZZA</h2>
        <p class="contact-street">265 N Main Street</p>
        <p class="contact-town">Kaysville, UT 84037</p>
        <p class="contac-country">USA</p>
        <p class="contact-number">+331 2223 442</p>
    </main>`;

    const menuBtn = document.getElementById('get-menu')
    menuBtn.classList.remove("active")

    const contactBtn = document.getElementById('get-contact')
    contactBtn.classList.add("active")
}
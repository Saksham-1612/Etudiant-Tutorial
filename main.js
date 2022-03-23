// alert("working");
//change navbar style
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
}
)
// ===========================================faq
const faq = document.querySelectorAll('.faq');
faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
        // icon change
        const icon = faq.querySelector('.faqicon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        }
        else {
            icon.className = 'uil uil-plus';
        }
    })
})
//show/hide navbar for tablet
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-button");
const closeBtn = document.querySelector("#close-menu-button");

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = 'none';
})
// close nav menu
const closeNav = () => {
    menu.style = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

// DOM
const nav_a = document.querySelectorAll('.page_in');
const menu = document.querySelector('.menu label');

for (let i = 0; i < nav_a.length; i++) {
    nav_a[i].addEventListener('click', () => {
        menu.click();
    })
}
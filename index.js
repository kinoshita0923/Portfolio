// DOM
const nav_a = document.getElementsByClassName('page_in');
let hambureger_chkbox = document.getElementById('hamburger-menu');

for (let i = 0; i < nav_a.length; i++) {
    nav_a[i].addEventListener('click', () => {
        hambureger_chkbox.checked = false;
    })
}
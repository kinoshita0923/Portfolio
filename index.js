// DOM
const nav_a = document.querySelectorAll('.page_in');
const menu = document.querySelector('.menu label');
const back = document.querySelector('.back');

// 変数
let count = 0;

// イベント処理
for (let i = 0; i < nav_a.length; i++) {
    nav_a[i].addEventListener('click', () => {
        menu.click();
    });
}

menu.addEventListener('click', () => {
    if (count === 0) {
        count = 1;
        document.body.classList.add('body');
    } else {
        count = 0;
        document.body.classList.remove('body');
    }
});

back.addEventListener('click', () => {
    count = 0;
    document.body.classList.remove('body');
});
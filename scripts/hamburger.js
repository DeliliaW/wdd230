const hamButton =
document.querySelector('menu');
const navList =
document.querySelector('navList');

hamButton.addEventListener('click', () => {
    navList.classList.toggle('open');
    hamButton.classList.toggle('open');
})
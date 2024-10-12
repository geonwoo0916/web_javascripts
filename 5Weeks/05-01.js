const button = document.querySelector('.random_btn');
const info = document.querySelector('.random_n');

button.addEventListener('click', () => {
    let num = Math.floor(Math.random()*(200-159+1))+159;

    info.innerHTML = num;
})
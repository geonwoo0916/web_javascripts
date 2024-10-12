// const name_div1 = document.querySelector('div-1')
// const name_div2 = document.querySelector('div-2')
// const name_div3 = document.querySelector('div-3')
// const name_div4 = document.querySelector('div-4')
// const name_button = document.querySelector('button')

// name_button.addEventListener('click', () => {
//     name_div1.innerText = '대한민국';
// })
// name_button.addEventListener('click', () => {
//     name_div2.innerText = '서울';
// })
// name_button.addEventListener('click', () => {
//     name_div3.innerText = '약 5000만명';
// })
// name_button.addEventListener('click', () => {
//     name_div4.innerText = '+82';
// })

const buttons = document.querySelectorAll('button');
const infos = document.querySelectorAll('.div-1');
const resetBtn = document.querySelector('.rst');

const data = ['대한민국','서울','약 5000만명','+82'];



function resetInfo() {
    infos.forEach(area => {
        area.innerHTML = '';
    });
};

resetBtn.addEventListener('click', resetInfo)
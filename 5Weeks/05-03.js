// .name_btn 버튼 객체 생성
const name_btn = document.querySelector('.name_btn');
// .name_div Div 객체 생성
const name_div = document.querySelector('.name_div');

// .name_btn 버튼 style 변경
name_btn.style.backgroundColor = 'pink';
name_btn.style.fontSize = '30px';

// div 태그를 생성하여 item으로 객체 만듬
const item = document.createElement('div');
item.textContent = 'Hoya';
item.style.fontSize = '30px';

// 버튼을 누르면 name_div 객체 안에 item 객체가 생성됩니다.
name_btn.addEventListener('click', () => {
    name_div.appendChild(item);
})
// 클래스 명으로 객체를 만듭니다.
const btn_name = document.querySelector('.btn-name');
const div_name = document.querySelector('.div-name');

btn_name.addEventListener('click', () => {
    // id 명으로 객체를 생성합니다.
    let my_name = document.getElementById('id-name').value;
    div_name.innerText = my_name;
})
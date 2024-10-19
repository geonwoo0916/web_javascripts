const input = document.querySelector('.input');
const text = document.querySelector('.text');
const result = document.querySelector('.updown');
const btn_rst = document.querySelector('.rst');
const info = document.querySelector('.ans');

let num = Math.floor(Math.random()*(99))+1;
let cnt = 0

info.addEventListener('click', () => {
    let My_info = document.getElementById('my_info').value;
    let n = parseInt(My_info);
    if (n == num){
        cnt += 1;
        text.innerText = `${cnt}만에 성공하셨습니다`;
        result.innerText = 'good';
        return;
    }
    else if (n<num){
        cnt += 1;
        text.innerText = `입력하신 숫자는 ${n}입니다`;
        result.innerText = 'Up';
    }
    else if (n>num){
        cnt += 1;
        text.innerText = `입력하신 숫자는 ${n}입니다`;
        result.innerText = 'Down';
    };
})

function resetInfo() {
    input.innerText('')
    text.innerText('0에서 99의 숫자를 입력해 주세요')
    result.innerText('')
    num = Math.floor(Math.random()*(99))+1;
    cnt = 0
};

btn_rst.addEventListener('click', resetInfo)
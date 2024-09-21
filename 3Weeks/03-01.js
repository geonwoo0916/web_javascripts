// 사칙연산 함수를 만들어 주세요.
function sum_f(_n1, _n2) {
    alert(`${_n1} + ${_n2} = ${_n1+_n2}`);
}
function sub_f(_n1, _n2) {
    alert(`${_n1} - ${_n2} = ${_n1-_n2}`);
}
function mul_f(_n1, _n2) {
    alert(`${_n1} x ${_n2} = ${_n1*_n2}`);
}
function div_f(_n1, _n2) {
    alert(`${_n1} ÷ ${_n2} = ${_n1/_n2}`);
}
// 무한반복 시켜주세요.
while (true) {
    let num = parseInt(prompt('1. 더하기 2. 빼기 3. 곱하기 4. 나누기 5. 종료', 0));
d
    if (num < 5) {
        let _n1 = parseInt(prompt('첫 번째 숫자 입력', 0));
        let _n2 = parseInt(prompt('두 번째 숫자 입력', 0));
        if (num == 1) {
            sum_f(_n1, _n2);
        }
        else if (num == 2) {
            sub_f(_n1, _n2)
        }
        else if (num == 3) {
            mul_f(_n1, _n2)
        }
        else if (num == 4) {
            div_f(_n1, _n2)
        }
    }
    else if (num == 5) {
        alert(`종료합니다.`);
        break
    }
    else {
        alert(`입력한 숫자: ${num} 5보다 큽니다.`);
    }
}
let start = parseInt(prompt('시작 숫자: ', 0));
let last = parseInt(prompt('끝 숫자: ', 0));

if (start > last) {
    alert(`입력한 숫자: ${start}
${last}보다 큽니다.`);
}

let random_n = Math.floor(Math.random()*(last - start+1)) + start;

alert(random_n)
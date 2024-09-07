// 별 '*' 들을 저장할 변수 설정
let star = ''; 

// i 변수는 세로 줄을 나타냅니다.
// j 변수는 가로 줄을 나타냅니다.
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        star += ' ';
    }
    star += '*';
    star += '\n';
}

// 마지막으로 star 변수를 출력하여 
// 5 x 5 별을 나타냅니다.
console.log(star);
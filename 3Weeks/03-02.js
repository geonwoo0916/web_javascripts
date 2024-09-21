let random_n = Math.floor(Math.random()*(100-1+1)) + 1;// 랜덤 수 설정
let cnt = 0

alert('Up And Down 게임을 시작합니다.\n숫자 범위는 1 ~ 100 사이입니다.');

while (true) {
    let player_n = parseInt(prompt('숫자를 입력하세요.', 0));// 사용자 숫자 입력
    cnt ++;
    
    if (random_n == player_n) {
        alert(`정답입니다.\n총 ${cnt}번 시도하셨습니다.`);
        break;
    }
    else if (player_n > random_n) {
        alert('Down');
    }
    else if (player_n < random_n) {
        alert('Up');
    }
    else {
        alert('숫자 범위는 1 ~ 100 사이입니다.')
    }
}
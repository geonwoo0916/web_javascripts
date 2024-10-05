const buttons = document.querySelectorAll('button');
const infos = document.querySelector('.info')

data = ['음식', '동물', '계절', '색깔']
let cnt = 0
let info = ''

// btn_name.addEventListener('click', () => {
//     let prompt_name = prompt('좋아하는 음식은?', '입력');
// })

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let prompt_infos = prompt(`좋아하는 ${data[index]}은?`, '입력');
        info += `좋아하는 ${data[index]}는 ${prompt_infos} \n`;
        cnt += 1
        if (cnt == 4){
            infos.innerText = info;
        }
    });
});
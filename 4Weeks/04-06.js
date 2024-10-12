
const Button = document.querySelector('button');
const infos = document.querySelector('.result');

Button.addEventListener('click', () => {
    let info = ''
    let my_num1 = document.getElementById('num1').value;
    let my_num2 = document.getElementById('num2').value;
    info += `${my_num1} + ${my_num2} =` + (my_num1 + my_num2) + '\n'
    info += `${my_num1} - ${my_num2} =` + (my_num1 - my_num2) + '\n'
    info += `${my_num1} x ${my_num2} =` + (my_num1 * my_num2) + '\n'
    info += `${my_num1} ÷ ${my_num2} =` + (my_num1 / my_num2)
    infos.innerText = info;
})
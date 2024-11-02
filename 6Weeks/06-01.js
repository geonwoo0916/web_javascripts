const input_pw = document.querySelectorAll('input')
const btn_setup = document.querySelector('.btn_setup')
const btn_open = document.querySelector('.btn_open')
const btn_clear = document.querySelector('.btn_clear')

let password = "";
let Name = "pw";

function load () {
    password = localStorage.getItem(Name)
}

function save_pw () {
    password = ""
    input_pw.forEach(
        (pw)=>{
            password += pw.value
            pw.value = ""
        }
    )
    localStorage.setItem(Name,password)
}

function open () {
    let new_pw = ""
    input_pw.forEach((pw)=>{
        new_pw += pw.value
        pw.value =""
        })
    if(new_pw===password){
        alert("비밀번호가 일치합니다.\n가방이 열렸습니다.")
    }else{
        alert("비밀번호가 일치하지 않습니다.")
    }
}

function reset () {
    password = ""
    localStorage.removeItem(Name)
}

load();

btn_setup.addEventListener('click',save_pw);
btn_open.addEventListener('click',open);
btn_clear.addEventListener('click',reset);
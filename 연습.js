const input = document.querySelectorAll('input')
const setupBtn = document.querySelector('btn_setup')
const openBtn = document.querySelector('btn_open')
const resetBtn = document.querySelector('btn_clear')

let password = "";
let keyName = "";

load () {
    password = localStorage.getItem(keyName)
}

function save() {
    password = ""
    input.forEach(
        (pw)=>
            password += pw.value
            pw.value = ""
    )
    localStorage.setItem(keyName,password)
}

function open() {
    
}
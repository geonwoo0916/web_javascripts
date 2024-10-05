const buttons = document.querySelectorAll('button');
const infos = document.querySelectorAll('.info');
const resetBtn = document.querySelector('.rst');
const EngBtn = document.querySelector('.Eng');

const data = ['student','Raindow','Car','Bird'];

function Enginfo() {
    infos.forEach((area, index) => {
        area.innerText = data[index];
    });
};

function resetInfo() {
    infos.forEach(area => {
        area.innerText = '';
    });
};

EngBtn.addEventListener('click', Enginfo)
resetBtn.addEventListener('click', resetInfo)
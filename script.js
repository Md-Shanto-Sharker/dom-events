// option-2
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

function makeRed(){
   document.body.style.backgroundColor= 'red';
}

// option 3 : get element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


// defferent way we are not use this..........
const btnMakePurple =document.getElementById('btn-make-purple');
function makePurple(){
    document.body.style.backgroundColor='purple'
}
btnMakePurple.onclick=makePurple;

const changeBtn = document.getElementById('change');
function makeChange(){
    changeBtn.style.backgroundColor = 'gray'
    changeBtn.style.padding = '20px'
    changeBtn.style.border = 'none'
    changeBtn.style.borderRadius = '50px';
}




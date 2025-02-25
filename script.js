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



const btnMakePurple =document.getElementById('btn-make-purple');
console.log(btnMakePurple);
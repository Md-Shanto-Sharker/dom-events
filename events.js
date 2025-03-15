document.getElementById("btn");
// option 2 to handle even
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 : get Element by Id and then set onclick
const blue = document.getElementById("btn-make-blue");
blue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 3: differnt version
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
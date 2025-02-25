// document.getElementById("btn-comment").addEventListener("click", function () {
//   const text = document.getElementById("text-area");
//   const text_value = text.value;
//   const comments = document.getElementById('comment-container')
//  const newcomment = document.createElement('p');
//  newcomment.classList.add('comment')
//  newcomment.innerText=text_value;
//  comments.appendChild(newcomment);
//  text.value='';
// });

// same code just again practice<<<<<<<<<<<<<<<<<
document.getElementById('btn-comment').addEventListener('click',function(){
const commentBox=document.getElementById('text-area');
const commentBox_value = commentBox.value;
// console.log(commentBox_value);

const newcomment = document.getElementById('comment-container');
const anothercommnet = document.createElement('p');
anothercommnet.classList.add('comment');
anothercommnet.innerText=commentBox_value;
newcomment.appendChild(anothercommnet);
commentBox.value=''
})



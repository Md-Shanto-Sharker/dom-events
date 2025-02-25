document.getElementById("click").addEventListener('click',function(){
    const heading = document.getElementById('heading');
    heading.innerText='page updated'
})

document.getElementById('login').addEventListener('click',function(){
    const userlogin = document.getElementById('user')
    userlogin.innerText='Md shanto sharker'
})


document.getElementById('btn-update').addEventListener('click',function(){
    const input = document.getElementById("input-filed");
   const name=input.value;
    const p = document.getElementById('para');
    p.innerText=name;
})



document.getElementById('btn-click').addEventListener('click',function(){
    const input_2 = document.getElementById('input2');
    const new_input = input_2.value;
    const p2 = document.getElementById('para2');
    p2.innerText=new_input;
})
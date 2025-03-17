document.getElementById('AddProductButton').addEventListener('click',function(){

    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').value;
    const productPrice = document.getElementById('productPrice').value;
   
    const mainContainer = document.getElementById('productList');
    const div = document.createElement('div');
    div.innerHTML =`
    <h1>${productName}</h1>
    <img src=${productImage} alt="" />
    <p>${productPrice}</p>
    `;
    mainContainer.appendChild(div);

    
})



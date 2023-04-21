fetch("https://fakestoreapi.com/products").then(data => {
    console.log(data.json());
}).then(complementData => {
   // console.log(complementData[0])
   //document.getElementById("root").innerHTML = complementData[0.].title )
 data1="";
 complementData.map((values=>{
    data1 = `<div class ="card">
        h1 class ="header">${values.title}</h1>
        <img src = "${values.image}" alt ="">
        <h4>men in black</h4>
        <p class="decription">decription</p>
        <p class = "price">30$</p> 
    </div>`
    document.getElementById("cards").innerHTML=data1;
 } 
 ));
})
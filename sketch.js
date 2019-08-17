//variables
const sideBlock = 64;



//Creates Div container within HTML  
const container = document.querySelector(".container");


//Create specified amount of Divs within container 
function gridInit (n) {
    var i = 0;
    while (i < (n*n)) {
        const divAdd = document.createElement("div");
        divAdd.classList.add("item");
        container.appendChild(divAdd);
    i++}
    container.setAttribute('style', `grid: repeat(${n}, auto) / repeat(${n}, auto)`);
}



gridInit(sideBlock);




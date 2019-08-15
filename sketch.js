//Creates Div elements within HTML container 
const container = document.querySelector(".container");
var i = 0;
var fragment = document.createDocumentFragment();

while (i < 16) {
    divAdd = document.createElement("div");
    divAdd.innerText = "test" + i;
    fragment.appendChild(divAdd);
i++}

container.appendChild(fragment);



//created a container
let grid = 16;
let pressed = false;
let color = "#000000";
let random = false;
// grid section
let container = document.createElement("div");
container.classList.add('container');
//paint events
const paint = (e) => {
        if (random){
            color = `#${(Math.floor(Math.random()*16777215)).toString(16)}`;
        }
        e.target.style.backgroundColor = `${color}`;

}

//create a row of the grid
const create = () => {
    for(let i = 0; i < grid; i++){
        let rowGrid = document.createElement("div");
        rowGrid.classList.add("row");
        for (let i = 0; i < grid; i++) {
            let elementGrid = document.createElement("div");
            elementGrid.classList.add("element-grid");
            rowGrid.appendChild(elementGrid);
        }
        container.appendChild(rowGrid);
    }
}
create();
document.body.appendChild(container);

//configs section
let configs = document.createElement("div");
configs.classList.add("configs-div");
// app title
let title = document.createElement("h1");
title.textContent = "Etch a Sketch";
configs.appendChild(title);
//color selector
let spanColor = document.createElement("span");
spanColor.classList.add("text");
spanColor.textContent = "Color Selector: ";
let colorSelector = document.createElement("input");
colorSelector.type = "Color";
colorSelector.addEventListener('change',(e) => {
    color = e.target.value;
});
configs.appendChild(spanColor);
configs.appendChild(colorSelector);
//random color check
let randomColorText = document.createElement("span");
let randomColorCheck = document.createElement("input");
randomColorText.classList.add("text");
randomColorText.textContent = "random color: ";
randomColorCheck.type = 'checkbox';
randomColorCheck.addEventListener('change', (e) => {random = e.target.checked;console.log(random)});
configs.appendChild(document.createElement("br"));
configs.appendChild(randomColorText);
configs.appendChild(randomColorCheck);

let elements = document.querySelectorAll(".element-grid");
elements.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        if (pressed){
            paint(e)
        }
    });
    element.addEventListener('mousedown', paint);
});
document.body.addEventListener('mousedown', () => {pressed = true; console.log("pressed")});
document.body.addEventListener('mouseup', () => {pressed = false;});
//grid toggle
let gridToggleText = document.createElement("span");
let gridToggle = document.createElement("input");
gridToggleText.classList.add("text");
gridToggleText.textContent = "grid: ";
gridToggle.type = 'checkbox';
const toggleGrid = () => {
    if (gridToggle.checked){
        elements.forEach(element => {
            element.style.border = "solid 1px";
            element.style.padding = "10px";
        });
    }else{
        elements.forEach(element => {
            element.style.border = "none";
            element.style.padding = "11px";
        });
    }
}
gridToggle.addEventListener('change', toggleGrid);
configs.appendChild(document.createElement("br"));
configs.appendChild(gridToggleText);
configs.appendChild(gridToggle);
// grid size
let gridSizeText = document.createElement("p");
let gridSize = document.createElement("input");
gridSizeText.classList.add("text");
gridSizeText.textContent = `size ${grid} x ${grid}`;
gridSize.type = "range";
gridSize.min = 16;
gridSize.max = 32;
gridSize.value = 16;
gridSize.addEventListener('change', (e) =>{
    grid = e.target.value;
    console.log(grid);
    gridSizeText.textContent = `size ${grid} x ${grid}`;
    container.innerHTML = "";
    create();
    elements = document.querySelectorAll(".element-grid");
    elements.forEach(element => {
        element.addEventListener('mouseover', (e) => {
            if (pressed){
                paint(e)
            }
        });
        element.addEventListener('mousedown', paint);
    });
    toggleGrid();
});

configs.appendChild(document.createElement("br"));
configs.appendChild(gridSizeText);
configs.appendChild(gridSize);
//clear

let clearButton = document.createElement("button");
clearButton.textContent = "Clear";
clearButton.addEventListener('click', () => {
    elements.forEach(element => {
        element.style.backgroundColor = "#fff"
    });
});
configs.appendChild(document.createElement("br"));
configs.appendChild(clearButton);

document.body.appendChild(configs);
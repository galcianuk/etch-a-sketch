
const gridContainer = document.querySelector(".container");

const gridtable = document.createElement("div");

const button = document.querySelector(".button");
const clearButton = document.querySelector(".clear-button");

let data = 16;

button.addEventListener("click", captureData);
clearButton.addEventListener("click", reset);



//Taken from stackoverflow, I need to figure out how this works!
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
//


function captureData(){
    data = prompt ("What size?");
    document.getElementsByClassName("test").remove();

    generateGrid(data);
}

function clearGrid(){
    document.getElementsByClassName("test").remove();

    generateGrid(data);
}

gridtable.className = "gridtable";
gridContainer.appendChild(gridtable);

window.onload = generateGrid(data);

function generateGrid(gsize){
    gridSize = (gsize * gsize);
    boxwidth = 798 / gsize;

    for(i = 0; i <= (gridSize - 1); i++ ){
        let newdiv = document.createElement("div");


        gridtable.appendChild(newdiv);
        newdiv.className = "test";
        newdiv.style = `width: ${boxwidth}px; height: ${boxwidth}px`;
    }
    grid = (gsize * gsize);
    }

let drawing = false;
let highlightColor = "red";

window.addEventListener("mousedown", function(e){
    if (e.target.classList.contains("test")){ //On inital click, check what the div class is. If it matches the newly created "test" class - change it's color.
        e.target.style.backgroundColor = `${highlightColor}`;    
    }
    
    drawing = true;
    highlight();
})

window.addEventListener("mouseup", function(e){
    drawing = false;
    highlight();
})  


function highlight(){
    const highlightdiv = document.querySelectorAll(".test");

    if (drawing == true){
        for(i = 0; i < highlightdiv.length; i++){
            highlightdiv[i].addEventListener("mousedown", mouseDown);
            highlightdiv[i].addEventListener("mouseover", mouseOver);
        }
    }
    else if (drawing == false){
        for(j = 0; j < highlightdiv.length; j++){
            highlightdiv[j].removeEventListener("mouseover", mouseOver);
    }
}

    function mouseOver(e){
        if (drawing == true){
                e.target.style.backgroundColor = `${highlightColor}`;
            } else if (drawing == false){
            };
        }

}

function mouseDown(e){
            e.target.style.backgroundColor = `${highlightColor}`;
}

function reset(){

   const resetdiv = document.querySelectorAll(".test");
   for(i = 0; i < resetdiv.length; i++){
        resetdiv[i].style.backgroundColor = "white";
   }
}
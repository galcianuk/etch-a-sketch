
const gridContainer = document.querySelector('.container');

const gridtable = document.createElement('div');

const button = document.querySelector('.button');
const clearButton = document.querySelector('.clear-button');

let data = 16;

button.addEventListener('click', captureData);
clearButton.addEventListener('click', reset);


// Taken from stackoverflow, I need to figure out how this works!
Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};
//


function captureData() {
  data = prompt('What size?');
  document.getElementsByClassName('test').remove();

  generateGrid(data);
}

function clearGrid() {
  document.getElementsByClassName('test').remove();

  generateGrid(data);
}

gridtable.className = 'gridtable';
gridtable.id = 'gridtable';
gridContainer.appendChild(gridtable);


// window.onload = setWidth();

let browserSize = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight,
};

let currentBoxWidth;
let currentBoxHeight;

function setWidth() {
    // if (browserSize.width >= 800) {
    //    currentBoxWidth = 800;
    // } else if (browserSize.width < 800) {
    //   currentBoxWidth = browserSize.width;
    // }
    currentBoxWidth = browserSize.width - (browserSize.width / 10);;
    //console.log(browserSize.width);
  }

  function setHeight() {
    // if (browserSize.width >= 800) {
    //    currentBoxWidth = 800;
    // } else if (browserSize.width < 800) {
    //   currentBoxWidth = browserSize.width;
    // }
    currentBoxHeight = browserSize.height - (browserSize.height / 20);
  }

function generateGrid(gsize) {
  browserSize = {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  };

  document.getElementsByClassName('test').remove();

  setWidth();
  setHeight();

  // const gridSize = (gsize * gsize);
  let boxwidth;
  let gridSize;
  
  if (currentBoxWidth > currentBoxHeight) {
    boxwidth = (currentBoxWidth / gsize);
    boxwidth = (boxwidth) - (boxwidth / 30);
    const gridSizeH = (currentBoxHeight / boxwidth);
    gridSize = (gsize * gridSizeH) - 15;
    console.log(boxwidth, gridSizeH, gridSize);
    console.log(currentBoxHeight);
    console.log(currentBoxWidth);
  } else if (currentBoxWidth < currentBoxHeight) {
    boxwidth = (currentBoxHeight / gsize);
    boxwidth = (boxwidth) - (boxwidth / 30);
    const gridSizeH = (currentBoxWidth / boxwidth);
    gridSize = (gsize * gridSizeH);
    console.log(boxwidth, gridSizeH, gridSize);
    console.log(currentBoxHeight);
    console.log(currentBoxWidth);
  }

  gridtable.style = `height: ${currentBoxHeight}px; width: ${currentBoxWidth}px`;
  let i;
  for (i = 0; i <= (gridSize - 1); i++) {
    const newdiv = document.createElement('div');
    gridtable.appendChild(newdiv);
    newdiv.className = 'test';
    newdiv.style = `width: ${boxwidth}px; height: ${boxwidth}px`;
  }
}

window.onload = generateGrid(data);
window.onresize = generateGrid(data);

let drawing = false;
const highlightColor = 'rgb(93, 24, 121)';

function highlight() {
  const highlightdiv = document.querySelectorAll('.test');

  if (drawing === true) {
    let i;
    for (i = 0; i < highlightdiv.length; i++) {
      highlightdiv[i].addEventListener('mousedown', mouseDown);
      highlightdiv[i].addEventListener('mouseover', mouseOver);
    }
  } else if (drawing === false) {
    let j;
    for (j = 0; j < highlightdiv.length; j++) {
      highlightdiv[j].removeEventListener('mouseover', mouseOver);
    }
  }
}

window.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('test')) { // On inital click, check what the div class is. If it matches the newly created "test" class - change it's color.
    e.target.style.backgroundColor = `${highlightColor}`;
  }
  drawing = true;
  highlight();
});

window.addEventListener('mouseup', () => {
  drawing = false;
  highlight();
});

  function mouseOver(e) {
    if (drawing === true) {
      e.target.style.backgroundColor = `${highlightColor}`;
    }
  }


function mouseDown(e) {
  e.target.style.backgroundColor = `${highlightColor}`;
}

function reset() {
  const resetdiv = document.querySelectorAll('.test');
  let i;
  for (i = 0; i < resetdiv.length; i++) {
    resetdiv[i].style.backgroundColor = 'rgb(51, 51, 51)';
  }
}

const body = document.getElementsByTagName('body')[0]; // assign variable named body to body tag 

function setColor(name) {
    body.style.backgroundColor = name; // body style background color changes to name
}

function randomColor() {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; // randomize hex color code and sets this to background for function randomColor
}   


const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'red';

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}   


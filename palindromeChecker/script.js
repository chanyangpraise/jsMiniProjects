const input = document.getElementById('input'); // create constant variable via input element with id 'input'

function reverseString(str) {
    return str.split("").reverse().join("") // create function takes str as perameter which returns str split, reverses it and joins it 
}

function check() {
    const value = input.value; // value is current value of an input field
    const reverse = reverseString(value); // reverse is the reverseString of value
    if (value == reverse) { // checking if value is same as reverse
        alert("P A L I N D R O M E") 
    } else {
        alert("Not today!")
    }

    input.value = "";
}


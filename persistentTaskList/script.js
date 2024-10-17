let items = []; // variable to store items in array

const itemsDiv = document.getElementById("items") // show items on the div "items"
const input = document.getElementById("itemInput")

function renderItems () {
    itemsDiv.innerHTML = null; // removing everything inside the div (fresh slate)

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) // wrapper syntax 

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container) // creates the text element and adds it in the div as a child
    }
}

function loadItems(){

}


function saveItems(){
    
}

function addItem(){
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return // naked return - in JavaScript it's fine
    }
    items.push(value) // push the value, whatever user typed into input
    renderItems() 
    input.value = "" // clear whatever user typed
}

function removeItem(idx){
    items.splice(idx, 1) // remove item at this particular index - how many? one
    renderItems()
}


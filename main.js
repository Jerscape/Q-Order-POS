
class OrderProcessor {
//create constructor 

    constructor(currentItem) {
        this.currentItem = currentItem
    }//end constructor


    //methods
    displaySelection(selectedFood) {
        const delete_item = document.createElement("button")
        delete_item.classList.add("delete")
        delete_item.innerHTML = "Delete"
        this.selectedFood = selectedFood;
        const orderItem = document.createElement("li")

        orderItem.appendChild(delete_item)
        console.log(orderItem)
        //have to figure out how to access the value (price)
        //then it needs to be concatenated with selected food to set the innerText of orderItem
        orderItem.innerText = this.selectedFood;
        orderList.appendChild(orderItem)
        //delete button

        //need to add delete buttons next to each li. See task list project/youtube
        //be sure to include an alert warning, asking if they really want to delete
    }


}//end OrderProcessor Class




//const listPlaceholder = document.createElement("li")
//orderList.appendChild(listPlaceholder)

//appends list



//button clicks/event handlers

//const selectedButton = document.querySelector("#sandwich-submit");
//selectedButton.addEventListener('click', () => {
    
    //create element to add item name and price to, with each button click
    //const orderItem = document.createElement("li")
    //orderItem.innerText = selectedButton.innerText;
    //orderList.appendChild(orderItem)

//})

///const orderItem = document.querySelectorAll("li")
//const clearOrderButton = document.querySelector("#clear-order");
//clearOrderButton.addEventListener('click', () => {
    //orderItem.innerText = " "
    //as its an array of li elements, I think I would need to use a for each loop here, and the li items would still be on the page, just empty
//}) 

//this creates a dom object based on the id of the div in the html
const orderBox = document.querySelector("#output-items"); 
console.log(orderBox)

//creates the unordered list
const orderList = document.createElement("ul");
orderBox.appendChild(orderList);



//instantiate variable representing button input and set to null for initial value
const currentItem = null;
//call constructor 
const orderProcessor = new OrderProcessor(currentItem)
console.log(orderProcessor)


//retrieve buttons and assign click event handlers to them
 const itemButtons = document.querySelectorAll('[data-food]')
 itemButtons.forEach(button => {
     button.addEventListener('click', () => {
         orderProcessor.displaySelection(button.innerText)
  
     })
 })

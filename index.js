/*
IMPORTANT: some of this code contains more than what we have learned inside of class so far.
I have marked the sections where you need to change something with //Task #: what you need to do
*/

//Task 1: retrieve user name from local storage, if it does assign to this variable
let userName = "Placeholder user name"
//Task 1.5: don't prompt *if* there was a user name loaded from localStorage
userName = window.prompt("Welcome to our e-commerce site! Please enter your name");
//Task 2: when the user enter's their name store in localStorage


//Note: this displays the user
// let userH1 = document.getElementById("greet-user");
let userH1 = document.getElementById("brand");
userH1.innerHTML = `Welcome ${userName}`;

//Note: we haven't learned about these yet, but its just code that runs when "Add to cart" button is clicked
function addToCart(title, price, picturePath){
    alert(`${title} added to cart`);
    //Note: this grabs the current cart from localStorage
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"))
    //Note: this handles empty cart
    if (productsInCart === null || productsInCart === undefined){
        productsInCart = [];
    }
    //Task 3: add the item (title,price,picturePath) as an object to productsInCart array
    
    //Task 3: store updated productsInCart array in localStorage (remember to stringify)
    
}

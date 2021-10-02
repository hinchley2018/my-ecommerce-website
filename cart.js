/*
IMPORTANT: some of this code contains more than what we have learned inside of class so far.
I have marked the sections where you need to change something with //Task #: what you need to do
*/

//Task 1: retrieve user name from local storage, if it does assign to this variable
let userName = localStorage.getItem("userName");
let userH1 = document.getElementById("greet-user");
userH1.textContent = userName;

//Task 4: read from localStorage productsInCart array (make sure to parse)
let productsInCart = [];

//Note: this gets the ul for our products
let productsUL = document.getElementById("cart-products");

//Note: this adds our items in cart to the page, we will learn how to do this later
function drawProducts(productsToDraw) {
  //Note: clear out ul for redraw
  productsUL.innerHTML = "";
  //Note: add list item for each product in cart
  /* 
    This is what an example li will look like
    <li>
        <h3>Duct tape</h3>
        <p><b>$4.72</b></p>
        <img alt="duct tape" src="assets/duct-tape.png"/>
        <button onclick="removeFromCart(0)">Remove from cart</button> 
    </li>
    */

  for (let index = 0; index < productsToDraw.length; index++) {
    let product = productsToDraw[index];
    let li = document.createElement("li");
    productsUL.appendChild(li);
    let h3 = document.createElement("h3");
    h3.textContent = product.title;
    li.appendChild(h3);
    let p = document.createElement("p");
    p.textContent = `$${product.price}`;
    li.appendChild(p);
    let img = document.createElement("img");
    img.setAttribute("alt", product.title);
    img.setAttribute("src", product.picturePath);
    li.appendChild(img);
    let btn = document.createElement("button");
    btn.setAttribute("onclick", `removeFromCart(${index})`);
    btn.textContent = "Remove from cart";
    li.appendChild(btn);
  }
}

//Note: this invokes the drawProducts function when our page loads
drawProducts(productsInCart);

//Note: this function removes an item at a provided index from the cart
function removeFromCart(i) {
  productsInCart = productsInCart.filter((value, index) => {
    return i !== index;
  });
  //Note: redraw products to screen...
  drawProducts(productsInCart);
}

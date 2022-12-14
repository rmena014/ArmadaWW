//Utilized XMLHttpRequest to display data from json file
//first we open up a new object, request
let request = new XMLHttpRequest();
//Fetches the products.json file
request.open("get", "products.json", true);
//sends a request
request.send();
//telling the function to run when page loads
request.onload = function () {
  let products = JSON.parse(this.responseText);
  // products variable parses the json file so that JS can read the object
  let output = " ";
  //empty output variable to hold the output after it was defined
  for (let item of products) {
    output += `<section>
    <div class="wrapper">
      <div class="productimg"><img src="${item.image}"</div>
      <div class="productinfo"> 
        <div class="productText">
          <h1 class="productTitle">${item.clothesId}</h1>
          <p class="productDesc">${item.description}</p>
        </div>
        <div class="productBuy">
          <p class="price">${item.price}</p>
          <button class="addtocart" type="button">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>`;
  }
  //targets the main containers html to display on the site
  document.querySelector(".wrapper").innerHTML = output;
};

//Homepage Slider javascript
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //Utilized a for loop to go through images for the slider. For initialized i and as long as i is less than the length of the slides it increments by one.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  //Slides restart
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); //  image changes every 7 seconds
}
//Side nav Javascript - functions to open and close tab
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

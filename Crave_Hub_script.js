// Menu bar functions
function Home() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("search_zip").style.display = "block";
}

function Cart() {
  document.getElementById("cart").style.display = "block";

  // The Liberty Grill
  if (libertyWingsCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("libertyWingsCart").style.display = "block";
    document.getElementById("libertyWingsCartCount").innerHTML = libertyWingsCt;
    document.getElementById("libertyWingsPrice").innerHTML = libertyWingsCt * 9;
  }

  // Hide other divs
  document.getElementById("search_zip").style.display = "none";
  document.getElementById("search_cuisine").style.display = "none";
  document.getElementById("liberty_menu").style.display = "none";
  document.getElementById("restaurant_list").style.display = "none";
}

// Search functions
function SearchZip() {
  event.preventDefault();
  if (document.getElementById("search_zip_menu").value != "" || document.getElementById("ZIP").value != "") {
    document.getElementById("restaurant_list").style.display = "block";
    document.getElementById("search_cuisine").style.display = "block";

    // Hide other divs
    document.getElementById("account").style.display = "none";
    document.getElementById("orders").style.display = "none";
  }
  else {
    alert("Missing zip");
  }
}

function SearchAmerican() {
  event.preventDefault();
  document.getElementById("american").style.display = "block";
}

function SearchItalian() {
  event.preventDefault();
  document.getElementById("italian").style.display = "block";
}

function SearchJapanese() {
  event.preventDefault();
  document.getElementById("japanese").style.display = "block";
}


// Restaurant functions
function Liberty() {
  event.preventDefault();
  document.getElementById("liberty_menu").style.display = "block";

  // Hide other divs
  document.getElementById("search_cuisine").style.display = "none";
}

let cartCt = 0;

// The Liberty Grill Menu
let libertyWingsCt = 0;

function DisplayCart() {
  if (document.getElementById("theLibertyGrillCart").style.display != "block") {
    document.getElementById("theLibertyGrillCart").style.display = "block";
    document.getElementById("theLibertyGrillCart").style.display = "inline-block";
  }
}

function LibertyWingsAdd() {
  event.preventDefault();

  libertyWingsCt = libertyWingsCt + 1;
  cartCt = cartCt + 1;

  // Debug
  console.log(libertyWingsCt);
  console.log(cartCt);

  /* document.getElementById('libertyWings').addEventListener('click', function(event) {
    
  }); */
}

function Checkout() {

}
// Menu bar functions
function AccountPage() {
  event.preventDefault();
  document.getElementById("account").style.display = "block";

  // Hide other divs
  document.getElementById("orders").style.display = "none";
  document.getElementById("restaurant_list").style.display = "none";
}

function OrdersPage() {
  event.preventDefault();
  document.getElementById("orders").style.display = "block";

  // Hide other divs
  document.getElementById("account").style.display = "none";
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

function LibertyAddToCart() {
  let libertyWingsbtn = document.getElementById('libertyWings');
  let libertyWingsCt = 0;
  
  libertyWingsbtn.addEventListener('click', () => {
    libertyWingsCt++;
    cartCt++;
  });

  document.getElementById("theLibertyGrillCart").style.display = "block";
  document.getElementById("theLibertyGrillCart").style.display = "inline";
  document.getElementById("cartCount").innerHTML = cartCt;
  document.getElementById("cartCount").style.display = "block";
  document.getElementById("cartCount").style.display = "inline";
}
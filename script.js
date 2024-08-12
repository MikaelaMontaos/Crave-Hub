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
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("libertyWingsCart").style.display = "block";
    document.getElementById("libertyWingsCartCount").innerHTML = libertyWingsCt;
    document.getElementById("libertyWingsPrice").innerHTML = libertyWingsCt * 9;
  }
  if (friedPicklesCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("friedPicklesCart").style.display = "block";
    document.getElementById("friedPicklesCartCount").innerHTML = friedPicklesCt;
    document.getElementById("friedPicklesPrice").innerHTML = friedPicklesCt * 6;
  }
  if (capreseSaladCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("capreseSaladCart").style.display = "block";
    document.getElementById("capreseSaladCartCount").innerHTML = capreseSaladCt;
    document.getElementById("capreseSaladPrice").innerHTML = capreseSaladCt * 9;
  }
  if (libertyBurgerCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("libertyBurgerCart").style.display = "block";
    document.getElementById("libertyBurgerCartCount").innerHTML = libertyBurgerCt;
    document.getElementById("libertyBurgerPrice").innerHTML = libertyBurgerCt * 19;
  }
  if (grilledChickenSandoCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("grilledChickenSandoCart").style.display = "block";
    document.getElementById("grilledChickenSandoCartCount").innerHTML = grilledChickenSandoCt;
    document.getElementById("grilledChickenSandoPrice").innerHTML = grilledChickenSandoCt * 16;
  }
  if (bbqRibsCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("bbqRibsCart").style.display = "block";
    document.getElementById("bbqRibsCartCount").innerHTML = bbqRibsCt;
    document.getElementById("bbqRibsPrice").innerHTML = bbqRibsCt * 25;
  }
  if (macCheeseCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("macCheeseCart").style.display = "block";
    document.getElementById("macCheeseCartCount").innerHTML = macCheeseCt;
    document.getElementById("macCheesePrice").innerHTML = macCheeseCt * 5;
  }
  if (garlicMPCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("garlicMPCCart").style.display = "block";
    document.getElementById("garlicMPCCartCount").innerHTML = garlicMPCt;
    document.getElementById("garlicMPCPrice").innerHTML = garlicMPCt * 3;
  }
  if (steamedVegCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("steamedVegCart").style.display = "block";
    document.getElementById("steamedVegCartCount").innerHTML = steamedVegCt;
    document.getElementById("steamedVegPrice").innerHTML = steamedVegCt * 2;
  }
  if (applePieCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("applePieCart").style.display = "block";
    document.getElementById("applePieCartCount").innerHTML = applePieCt;
    document.getElementById("applePiePrice").innerHTML = applePieCt * 4;
  }
  if (chocoLavaCakeCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("chocoLavaCakeCart").style.display = "block";
    document.getElementById("chocoLavaCakeCartCount").innerHTML = chocoLavaCakeCt;
    document.getElementById("chocoLavaCakePrice").innerHTML = chocoLavaCakeCt * 6;
  }
  if (libertyLemonadeCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("libertyLemonadeCart").style.display = "block";
    document.getElementById("libertyLemonadeCartCount").innerHTML = libertyLemonadeCt;
    document.getElementById("libertyLemonadePrice").innerHTML = libertyLemonadeCt * 4;
  }
  if (icedTeaCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("icedTeaCart").style.display = "block";
    document.getElementById("icedTeaCartCount").innerHTML = icedTeaCt;
    document.getElementById("icedTeaPrice").innerHTML = icedTeaCt * 4;
  }
  if (craftBeerCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("libertyWingsCart").style.display = "block";
    document.getElementById("libertyWingsCartCount").innerHTML = craftBeerCt;
    document.getElementById("libertyWingsPrice").innerHTML = craftBeerCt * 6;
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

  // Hide other cuisine divs
  document.getElementById("italian").style.display = "none";
  document.getElementById("japanese").style.display = "none";
}
function SearchItalian() {
  event.preventDefault();
  document.getElementById("italian").style.display = "block";

  // Hide other cuisine divs
  document.getElementById("american").style.display = "none";
  document.getElementById("japanese").style.display = "none";
}
function SearchJapanese() {
  event.preventDefault();
  document.getElementById("japanese").style.display = "block";

  // Hide other cuisine divs
  document.getElementById("american").style.display = "none";
  document.getElementById("italian").style.display = "none";
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
function DisplayCart() {
  if (document.getElementById("theLibertyGrillCart").style.display != "block") {
    document.getElementById("theLibertyGrillCart").style.display = "block";
  }
}
let libertyWingsCt = 0;
function LibertyWingsAdd() {
  event.preventDefault();

  libertyWingsCt = libertyWingsCt + 1;
  cartCt = cartCt + 1;

  // Debug
  console.log(libertyWingsCt);
  console.log(cartCt);
}
let friedPicklesCt = 0;
function FriedPicklesAdd() {
    event.preventDefault();

    friedPicklesCt = friedPicklesCt + 1;
    cartCt = cartCt + 1;
}
let capreseSaladCt = 0;
function CapreseSaladAdd() {
    event.preventDefault();

    capreseSaladCt = capreseSaladCt + 1;
    cartCt = cartCt + 1;
}
let libertyBurgerCt = 0;
function LibertyBurgerAdd() {
    event.preventDefault();

    libertyBurgerCt = libertyBurgerCt + 1;
    cartCt = cartCt + 1;
}
let grilledChickenSandoCt = 0;
function GrilledChickenSandwichAdd() {
    event.preventDefault();

    grilledChickenSandoCt = grilledChickenSandoCt + 1;
    cartCt = cartCt + 1;
}
let bbqRibsCt = 0;
function BBQRibsAdd() {
    event.preventDefault();

    bbqRibsCt = bbqRibsCt + 1;
    cartCt = cartCt + 1;
}
let macCheeseCt = 0;
function MacCheeseAdd() {
    event.preventDefault();

    macCheeseCt = macCheeseCt + 1;
    cartCt = cartCt + 1;
}
let garlicMPCt = 0;
function GarlicMashedPotatoesAdd() {
    event.preventDefault();

    garlicMPCt = garlicMPCt + 1;
    cartCt = cartCt + 1;
}
let steamedVegCt = 0;
function SteamedVeggiesAdd() {
    event.preventDefault();

    steamedVegCt = steamedVegCt + 1;
    cartCt = cartCt + 1;
}
let applePieCt = 0;
function ApplePieAdd() {
    event.preventDefault();

    applePieCt = applePieCt + 1;
    cartCt = cartCt + 1;
}
let chocoLavaCakeCt = 0;
function ChocolateLavaCakeAdd() {
    event.preventDefault();

    chocoLavaCakeCt = chocoLavaCakeCt + 1;
    cartCt = cartCt + 1;
}
let libertyLemonadeCt = 0;
function LibertyLemonadeAdd() {
    event.preventDefault();

    libertyLemonadeCt = libertyLemonadeCt + 1;
    cartCt = cartCt + 1;
}
let icedTeaCt = 0;
function IcedTeaAdd() {
    event.preventDefault();

    icedTeaCt = icedTeaCt + 1;
    cartCt = cartCt + 1;
}
let craftBeerCt = 0;
function CraftBeersAdd() {
    event.preventDefault();

    craftBeerCt = craftBeerCt + 1;
    cartCt = cartCt + 1;
}

function Checkout() {
  alert("Under construction. Coming soon.");
}
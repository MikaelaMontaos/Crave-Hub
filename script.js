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

  // Buon Appetito cart
  if (insalataCapreseCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("capreseCart").style.display = "block";
    document.getElementById("capreseCartCount").innerHTML = insalataCapreseCt;
    document.getElementById("capresePrice").innerHTML = insalataCapreseCt * 7.95;
  }
  if (polpetteCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("polpetteCart").style.display = "block";
    document.getElementById("polpetteCartCount").innerHTML = polpetteCt;
    document.getElementById("polpettePrice").innerHTML = polpetteCt * 8.5;
  }
  if (minestroneCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("minestroneCart").style.display = "block";
    document.getElementById("minestroneCartCount").innerHTML = minestroneCt;
    document.getElementById("minestronePrice").innerHTML = minestroneCt * 5.95;
  }
  if (margheritaCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("margheritaCart").style.display = "block";
    document.getElementById("margheritaCartCount").innerHTML = margheritaCt;
    document.getElementById("margheritaPrice").innerHTML = margheritaCt * 10.95;
  }
  if (porchettaCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("porchettaCart").style.display = "block";
    document.getElementById("porchettaCartCount").innerHTML = porchettaCt;
    document.getElementById("porchettaPrice").innerHTML = porchettaCt * 11.95;
  }
  if (risottoCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("risottoCart").style.display = "block";
    document.getElementById("risottoCartCount").innerHTML = risottoCt;
    document.getElementById("risottoPrice").innerHTML = risottoCt * 12.95;
  }
  if (insalataVerdeCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("insalataVCart").style.display = "block";
    document.getElementById("insalataVCartCount").innerHTML = insalataVerdeCt;
    document.getElementById("insalataVPrice").innerHTML = insalataVerdeCt * 4.95;
  }
  if (patatineCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("patatineCart").style.display = "block";
    document.getElementById("patatineCartCount").innerHTML = patatineCt;
    document.getElementById("patatinePrice").innerHTML = patatineCt * 3.95;
  }
  if (verdureCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("verdureCart").style.display = "block";
    document.getElementById("verdureCartCount").innerHTML = verdureCt;
    document.getElementById("verdurePrice").innerHTML = verdureCt * 5.5;
  }
  if (tiramisuCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("tiramisuCart").style.display = "block";
    document.getElementById("tiramisuCartCount").innerHTML = tiramisuCt;
    document.getElementById("tiramisuPrice").innerHTML = tiramisuCt * 6.95;
  }
  if (cannoliCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("cannoliCart").style.display = "block";
    document.getElementById("cannoliCartCount").innerHTML = cannoliCt;
    document.getElementById("cannoliPrice").innerHTML = cannoliCt * 5.5;
  }
  if (gelatoCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("gelatoCart").style.display = "block";
    document.getElementById("gelatoCartCount").innerHTML = gelatoCt;
    document.getElementById("gelatoPrice").innerHTML = gelatoCt * 4.95;
  }
  if (italianSodaCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("italianSodaCart").style.display = "block";
    document.getElementById("italianSodaCartCount").innerHTML = italianSodaCt;
    document.getElementById("italianSodaPrice").innerHTML = italianSodaCt * 3.25;
  }
  if (houseWineCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("wineCart").style.display = "block";
    document.getElementById("wineCartCount").innerHTML = houseWineCt;
    document.getElementById("winePrice").innerHTML = houseWineCt * 5.95;
  }
  if (beerCt != 0) {
    document.getElementById("emptyCart").style.display = "none";
    document.getElementById("cartTable").style.display = "block";
    document.getElementById("cartTable").style.display = "table";
    document.getElementById("beerCart").style.display = "block";
    document.getElementById("beerCartCount").innerHTML = beerCt;
    document.getElementById("beerPrice").innerHTML = beerCt * 4.5;
  }

  // Hide other divs
  document.getElementById("search_zip").style.display = "none";
  document.getElementById("search_cuisine").style.display = "none";
  document.getElementById("liberty_menu").style.display = "none";
  document.getElementById("buon_menu").style.display = "none";
  document.getElementById("restaurant_list").style.display = "none";
}

function Checkout() {
  alert("Under construction. Coming soon.");
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
    document.getElementById("liberty_menu").style.display = "none";
    document.getElementById("buon_menu").style.display = "none";
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

function Buon() {
  event.preventDefault();
  document.getElementById("buon_menu").style.display = "block";

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

// Buon Appetito Menu
function DisplayCart() {
  if (document.getElementById("buonCart").style.display != "block") {
    document.getElementById("buonCart").style.display = "block";
  }
}
let insalataCapreseCt = 0;
function InsalataCapreseAdd() {
  event.preventDefault();

  insalataCapreseCt = insalataCapreseCt + 1;
  cartCt = cartCt + 1;
}
let polpetteCt = 0;
function PolpetteAlSugoAdd() {
  event.preventDefault();

  polpetteCt = polpetteCt + 1;
  cartCt = cartCt + 1;
}
let minestroneCt = 0;
function MinestroneSoupAdd() {
  event.preventDefault();

  minestroneCt = minestroneCt + 1;
  cartCt = cartCt + 1;
}
let margheritaCt = 0;
function MargheritaPizzaAdd() {
  event.preventDefault();

  margheritaCt = margheritaCt + 1;
  cartCt = cartCt + 1;
}
let porchettaCt = 0;
function PorchettaPaninoAdd() {
  event.preventDefault();

  porchettaCt = porchettaCt + 1;
  cartCt = cartCt + 1;
}
let risottoCt = 0;
function RisottoPrimaveraAdd() {
  event.preventDefault();

  risottoCt = risottoCt + 1;
  cartCt = cartCt + 1;
}
let insalataVerdeCt = 0;
function InsalataVerdeAdd() {
  event.preventDefault();

  insalataVerdeCt = insalataVerdeCt + 1;
  cartCt = cartCt + 1;
}
let patatineCt = 0;
function PatatineFritteAdd() {
  event.preventDefault();

  patatineCt = patatineCt + 1;
  cartCt = cartCt + 1;
}
let verdureCt = 0;
function VerdureGrigliateAdd() {
  event.preventDefault();

  verdureCt = verdureCt + 1;
  cartCt = cartCt + 1;
}
let tiramisuCt = 0;
function TiramisuAdd() {
  event.preventDefault();

  tiramisuCt = tiramisuCt + 1;
  cartCt = cartCt + 1;
}
let cannoliCt = 0;
function CannoliSicilianiAdd() {
  event.preventDefault();

  cannoliCt = cannoliCt + 1;
  cartCt = cartCt + 1;
}
let gelatoCt = 0;
function GelatoAdd() {
  event.preventDefault();

  gelatoCt = gelatoCt + 1;
  cartCt = cartCt + 1;
}
let italianSodaCt = 0;
function ItalianSodasAdd() {
  event.preventDefault();

  italianSodaCt = italianSodaCt + 1;
  cartCt = cartCt + 1;
}
let houseWineCt = 0;
function HouseWineAdd() {
  event.preventDefault();

  houseWineCt = houseWineCt + 1;
  cartCt = cartCt + 1;
}
let beerCt = 0;
function BeerAdd() {
  event.preventDefault();

  beerCt = beerCt + 1;
  cartCt = cartCt + 1;
}
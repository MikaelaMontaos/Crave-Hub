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

function SearchZip() {
  event.preventDefault();
  document.getElementById("restaurant_list").style.display = "block";

  // Hide other divs
  document.getElementById("account").style.display = "none";
  document.getElementById("orders").style.display = "none";
}

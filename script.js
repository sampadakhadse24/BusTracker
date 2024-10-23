function redirect() {
  var busNumber = document.getElementById("bus-number").value.trim();
  if(busNumber !== "") {
    // Assuming each bus has its own webpage named bus-X.html where X is the bus number
    window.location.href = "bus-" + busNumber + ".html";
  } else {
    alert("Please enter a valid bus number.");
  }
}

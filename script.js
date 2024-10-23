function redirect() {
  var busNumber = document.getElementById("bus-number").value.trim();
  if(busNumber !== "") {
    window.location.href = "bus-" + busNumber + ".html";
  } else {
    alert("Please enter a valid bus number.");
  }
}

function redirect() {
  var busNumber = document.getElementById("bus-number").value.trim();
  if (["1", "2", "3", "4"].includes(busNumber)) {
    window.location.href = `bus-map.html?busNumber=${busNumber}`;
  } else {
    alert("Please enter a valid bus number (1, 2, 3, or 4).");
  }
}

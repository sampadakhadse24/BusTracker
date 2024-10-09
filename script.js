window.onload = function() {
    // Hide the loader and show the content after a delay
    setTimeout(function() {
        document.getElementById('loader').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    }, 2000); // 2 seconds delay for animation

    // Form submission event listener
    document.getElementById('busForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let busNumber = document.getElementById('busNumber').value;
        if (busNumber) {
            // Hide form, show map, and load bus location
            document.getElementById('content').classList.add('hidden');
            document.getElementById('map').classList.remove('hidden');
            initMap(busNumber); // Call function to load the map
        } else {
            alert("Please enter a bus number");
        }
    });
};

// Google Maps API function to load the map
function initMap(busNumber) {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 0, lng: 0 } // Center the map
    });

    // Fetch bus location data (Mock example)
    let busLocation = {
        lat: 19.075984, // Example latitude
        lng: 72.877656 // Example longitude
    };

    new google.maps.Marker({
        position: busLocation,
        map: map,
        title: "Bus " + busNumber
    });

    map.setCenter(busLocation); // Center map to bus location
}

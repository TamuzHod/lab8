function initMap() {
	// add your code here
	L.mapquest.key = "gajfGAqffmARJmZFAapAb4qWv6nqyctN";

	var map = L.mapquest.map('map', {
		center: [32.8784341,-117.2358094],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.8784341,-117.2358094]).addTo(map);
}
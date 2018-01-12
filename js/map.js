function initMap() {

	var mapCenter = new google.maps.LatLng(51.517991, -0.119327);

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: mapCenter
	});




	var locations = [
		{name: "Google Campus", position: {lat: 51.522786, lng: -0.085099} },
		{name: "Yumcha Camden Parkway", position: {lat: 51.538219, lng: -0.144162} },	
		{name: "The Travel Cafe, Lambeth", position: {lat: 51.499614, lng: -0.114143}},	
	];
	

	var markers = [];
	var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	createMarkers();

	
	
	function createMarkers() {
		for (var i =0; i< locations.length; i++) {

			console.log(locations[i]);
			new google.maps.Marker({
				position: locations[i].position,
				map: map,
				label: labels[i],
				animation: google.maps.Animation.DROP,

			});
		}

	}



	// var createMarkers = function(locations, map) {
	// 	console.log('am i here?');
	// 	for (var i = 0; i<= locations.length; i++) {
	// 		console.log('hey', i);
	// 		new google.maps.Marker({
	// 			position: locations[i],
	// 			map: map,
	// 			animation: google.maps.Animation.DROP,
	// 			title: 'Uluru (Ayers Rock)'
	// 		});
	// 	}
	// }

		//   var markers = locations.map(function(location, i) {
	// 	return new google.maps.Marker({
	// 	  position: location,
	// 	  label: labels[i % labels.length]
	// 	});
	//   });

	var uluru = {lat: 51.522786, lng: -0.085099};



	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
		'<div id="bodyContent">'+
		'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
		'sandstone rock formation in the southern part of the '+
		'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
		'south west of the nearest large town, Alice Springs; 450&#160;km '+
		'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
		'features of the Uluru - Kata Tjuta National Park. Uluru is '+
		'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
		'Aboriginal people of the area. It has many springs, waterholes, '+
		'rock caves and ancient paintings. Uluru is listed as a World '+
		'Heritage Site.</p>'+
		'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
		'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
		'(last visited June 22, 2009).</p>'+
		'</div>'+
		'</div>';

	var infowindow = new google.maps.InfoWindow({
	  content: contentString,
	  maxWidth: 400
	});

	var markerGoogleCampus = new google.maps.Marker({
	  position: uluru,
	  map: map,
	  animation: google.maps.Animation.DROP,
	  title: 'Uluru (Ayers Rock)'
	});
	markerGoogleCampus.addListener('click', function() {
	  infowindow.open(map, markerGoogleCampus);
	});

	function drop() {
        for (var i = 0; i < locations.length; i++) {
          addMarkerWithTimeout(locations[i], i * 200);
        }
      }

	function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
        }, timeout);
      }
  }


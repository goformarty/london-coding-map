var locations = [
  { name: "Google Campus", position: { lat: 51.522786, lng: -0.085099 } },
  {
    name: "Yumcha Camden Parkway",
    position: { lat: 51.538219, lng: -0.144162 }
  },
  {
    name: "The Travel Cafe, Lambeth",
    position: { lat: 51.499614, lng: -0.114143 }
  }
];

var descriptions = [];



function initMap() {
  
  var map;
  var markers = [];

  createMap();
  createMarkers(locations);


  function createMap() {
    var mapCenter = new google.maps.LatLng(51.517991, -0.119327);
    var mapZoom = 12;

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: mapZoom,
      center: mapCenter
    });
  }

  function createMarkers(locations) {
    this.locations = locations;
    console.log(map);
    for (var i = 0; i < locations.length; i++) {
      console.log(locations[i]);
      new google.maps.Marker({
        position: locations[i].position,
        map: map,
        animation: google.maps.Animation.DROP,
        setTimeout: i * 200
      });
    }
  }


  function addMarkersDescriptions() {
    for (var j = 0; j < markers.length; j++) {

    }
  }
  var uluru = { lat: 51.522786, lng: -0.085099 };

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  var description1 = 
  '<div id="content1">' +
  '<div id="siteNotice1">' +
  "</div>" +
  '<h2 id="firstHeading1" class="firstHeading">Google Campus</h2>' +
  '<div id="bodyContent1">' +
  "<p><b>A coworking space full of coders, designers and entrepreneurs!</b><br /><br />" + 
  "Requires a membership to get in, but there's a free membership " +
  "option that gives an access to the Campus Cafe in the lower floor. " +
  "The cafe is a perfect place to get things done, " +
  "take a break, or collaborate with like-minded people. " +
  "Strong community and strong coffee! </p>" +
  '<p><a href="https://www.campus.co/london/en/"</a>website</p>' +
  "</div>" +
  "</div>";

  var description2 = 
  '<div id="content2">' +
  '<div id="siteNotice2>' +
  "</div>" +
  '<h2 id="firstHeading2" class="firstHeading">Yumchaa Camden</h2>' +
  '<div id="bodyContent2">' +
  "<p><b>Cafe with cosy armchairs and a glass roof!</b><br /><br />" + 
  "Formerly a pet shop, still has a frontage that advertises " +
  "'Talking parrots' and 'monkeys'. Chaplin bought two Abyssinian kittens there " +
  "and Winston Churchill famously got his cat from this shop!  " +
  "It’s a perfect place to code - there are few pretty big wooden " +
  "tables and some sockets, plenty of tea blends and super tasty to fuel yourself up, " +
  "and even more incredible matcha latte and matcha cakes! It’s also the place where I came across the advert of my current flat <3  </p>" +
  '<p><a href="https://www.campus.co/london/en/"</a>website</p>' +
  "</div>" +
  "</div>";

  var infowindow1 = new google.maps.InfoWindow({
    content: description2,
    maxWidth: 400
  });

  var markerGoogleCampus = new google.maps.Marker({
    position: uluru,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Uluru (Ayers Rock)"
  });
  markerGoogleCampus.addListener("click", function() {
    infowindow1.open(map, markerGoogleCampus);
  });

}

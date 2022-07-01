

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

// Dark Map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// map object

let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
})




// add 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/aaron-miller1/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Access airport GeoJSON

// let airportData = "https://raw.githubusercontent.com/aaron-miller1/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/aaron-miller1/Mapping_Earthquakes/main/torontoRoutes.json";


// Add GeoJSON data.


// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//       style: myStyle,
//       onEachFeature: function(feature, layer) {
//           layer.bindPopup("<h3> Airline:" + feature.properties.airline + "</h3> <hr><h3> Destination: " + feature.properties.dst +  "</h3>");
//       }
//   }).addTo(map);
// });


d3.json(torontoHoods).then(function(data) {
    console.log(data);
    L.geoJSON(data).addTo(map);
});

let myStyle = {
    color: "#ffffa1",
    weight: 2
}
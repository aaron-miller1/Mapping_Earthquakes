// add console.log to check if code is working

console.log("working");

// map object

let map = L.map('mapid').setView([40.7, -94.5], 14);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: map_key
});

// add 'graymap' tile layer to the map.
streets.addTo(map);

let marker = L.circleMarker([34.0522, -118.2347], {radius: 300, color: "black", fillColor: "ffffa1"}).addTo(map);



var map = L.map('map', {
  center: [42.376577841044764, -71.12251278286324],
  zoom: 8,
});


// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);
});

//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var Satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);


var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
CartoLight.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);


//// adding shapes to the map


// Make a simple circle
var circle = L.circle([42.373113451801515, -71.12266472959821], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 10
}).addTo(map).bindPopup ("Flour Bakery + Cafe");

// Make a shape
var polygon = L.polygon([
    [39.982739776172565, -75.15452518555603],
    [39.98265756770085, -75.15402093032024],
    [39.982254744759665, -75.15411748983348],
    [39.98227118655885, -75.15448227021682],
    [39.98195057076098, -75.15454664322564],
    [39.98204100101016, -75.1547290334173],
    [39.982739776172565, -75.15456810089525]
]).addTo(map);

// Add a marker
L.marker([39.983219999796114, -75.15356557830536]).addTo(map);

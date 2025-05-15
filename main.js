var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
});
var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '© Esri, © Microsoft, © OpenStreetMap contributors'
});
var topoMapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

var map = L.map('map', {
  center: [-7.40, 109.69], 
  zoom: 8,
  maxZoom: 18,
  layers: [satelliteLayer]
});

L.control.layers({
  "OpenStreetMap": osmLayer,
  "Satelit": satelliteLayer,
  "Topo": topoMapLayer
}).addTo(map);

var sidebar = L.control.sidebar({ container: 'sidebar' }).addTo(map);

function getMarkerColor(status) {
  if (status === "Aktif") return "red";
  if (status === "Waspada") return "orange";
  return "green";
}

function createColoredIcon(color) {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}

function updateImageOnClick(gunungName) {
  var imageUrl = gunungImages[gunungName] || "https://via.placeholder.com/320x200.png?text=Gambar+Tidak+Tersedia";
  var gunungImage = document.getElementById('gunungImage');
  if (gunungImage) {
    gunungImage.src = imageUrl;
    gunungImage.alt = `Foto ${gunungName}`;
  }
}

var bottomBar = document.getElementById("bottomBar");

gunungData.sort((a, b) => a.name.localeCompare(b.name));

gunungData.forEach(function(g) {
  var icon = createColoredIcon(getMarkerColor(g.status));
  var marker = L.marker([g.lat, g.lon], { icon: icon }).addTo(map);

  marker.on('click', function() {
    marker.bindPopup(`
      <h2>${g.name}</h2>
      <p><b>Tinggi:</b> ${g.tinggi} mdpl<br>
      <b>Status:</b> ${g.status}<br>
    `).openPopup();
    sidebar.open('home');
    document.getElementById('sidebarContent').innerHTML = `
      <h2>${g.name}</h2>
      <p><b>Tinggi:</b> ${g.tinggi} mdpl<br>
      <b>Status:</b> ${g.status}<br>
      <b>Deskripsi:</b> ${gunungDeskripsi[g.name] || "Deskripsi tidak tersedia."}</p>`;
    updateImageOnClick(g.name);

    // Muat jalur pendakian untuk gunung yang dipilih
   if (trailGeojson[g.name]) {
  loadTrails(trailGeojson[g.name], g.name, map, () => {
    console.log(`Jalur untuk ${g.name} dimuat`);
  });
} else {
      // Kosongkan daftar jalur jika tidak ada GeoJSON
      const trailList = document.getElementById('trailList');
      if (trailList) trailList.innerHTML = '<p>Tidak ada jalur tersedia</p>';
      Object.values(trailLayers).forEach(layer => map.removeLayer(layer));
      trailLayers = {};
    }
  });

  var card = document.createElement("div");
  card.className = "gunung-card";
  if (g.status === "Aktif") {
    card.classList.add("aktif");
  }

  card.onclick = function() {
    map.setView([g.lat, g.lon], 13);
    marker.fire('click');
  };
  card.innerHTML = `
    <div class="info">
      <b>${g.name}</b>
      <span>${g.tinggi} mdpl</span><br>
      <span>Status: ${g.status}</span>
    </div>
  `;
  bottomBar.appendChild(card);
});

map.on('mousemove', function(e) {
  document.getElementById('coordinateDisplay').innerText = 
    e.latlng.lat.toFixed(5) + " / " + e.latlng.lng.toFixed(5);
});

map.on('click', function(e) {
  if (!document.querySelector('.leaflet-sidebar').classList.contains('collapsed')) {
    sidebar.close();
  }
});
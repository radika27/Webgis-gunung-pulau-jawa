var trailLayers = {}; // Objek untuk menyimpan layer jalur
var currentTrails = []; // Menyimpan nama jalur saat ini

// Fungsi untuk memuat jalur dari GeoJSON
function loadTrails(geojsonFile, gunungName, map, callback) {
  // Kosongkan daftar jalur dan layer sebelumnya
  const trailList = document.getElementById('trailList');
  if (trailList) {
    trailList.innerHTML = ''; // Hapus item jalur sebelumnya
  }
  Object.values(trailLayers).forEach(layer => map.removeLayer(layer));
  trailLayers = {};
  currentTrails = [];

  // Muat file GeoJSON
  fetch(geojsonFile)
    .then(response => {
      if (!response.ok) throw new Error('Gagal memuat file GeoJSON: ' + geojsonFile);
      return response.json();
    })
    .then(data => {
      // Simpan data GeoJSON untuk download
      currentTrailGeoJSON = data;

      L.geoJSON(data, {
        coordsToLatLng: function(coords) {
          return new L.LatLng(coords[1], coords[0]);
        },
        style: function(feature) {
          return {
            color: "#FFC107", // Warna kuning SAR untuk semua jalur
            weight: 4,
            opacity: 0.9
          };
        },
        onEachFeature: function(feature, layer) {
          const nama = feature.properties.Name || feature.properties.name || "Tanpa Nama";
          const jarak = feature.properties["Jarak(km)"] || "-";
          const author = feature.properties.Author || "Tidak ada sumber";

          layer.bindPopup(`
            <strong>${nama}</strong><br>
            Jarak: ${jarak} km<br>
            Sumber: <a href="${author}" target="_blank">Link</a>
          `);

          trailLayers[nama] = L.layerGroup([layer]).addTo(map); // Tambahkan langsung ke peta
          currentTrails.push(nama);

          if (trailList) {
            const trailItem = document.createElement('div');
            trailItem.className = 'trail-item';
            trailItem.innerHTML = `
              <input type="checkbox" id="trail-${nama.replace(/\s+/g, '-')}" checked>
              <label for="trail-${nama.replace(/\s+/g, '-')}">${nama}</label>
            `;

            trailItem.querySelector('input').addEventListener('change', function(e) {
              if (e.target.checked) {
                trailLayers[nama].addTo(map);
                map.fitBounds(layer.getBounds(), { padding: [50, 50] });
              } else {
                map.removeLayer(trailLayers[nama]);
              }
            });

            trailList.appendChild(trailItem);
          }
        }
      });

      if (callback) callback();
    })
    .catch(err => {
      console.error("Gagal memuat GeoJSON:", err);
      if (trailList) trailList.innerHTML = '<p>Gagal memuat data jalur</p>';
      currentTrailGeoJSON = null;
      if (callback) callback();
    });
}
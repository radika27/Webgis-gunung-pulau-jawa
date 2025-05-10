// Mengambil file GeoJSON jalur pendakian
fetch('JalurLawu.geojson')
  .then(response => {
    if (!response.ok) throw new Error('Gagal memuat file GeoJSON');
    return response.json();
  })
  .then(data => {
    console.log('Data GeoJSON yang dimuat:', data); // Debugging: Pastikan data dimuat

    L.geoJSON(data, {
      // Mengubah koordinat 3D menjadi 2D (lat, lon)
      coordsToLatLng: function(coords) {
        return new L.LatLng(coords[1], coords[0]); // [lat, lon] dari [lon, lat, elev]
      },
      // Menambahkan styling untuk jalur berdasarkan nama
      style: function(feature) {
        const name = (feature.properties.Name || feature.properties.name || "Unknown").toLowerCase().trim(); // Fleksibel dan hapus spasi
        console.log('Nama jalur (lowercase):', name); // Debugging: Pastikan nama terdeteksi
        switch (name) {
          case "cemara sewu":
            return { color: "#e74c3c", weight: 4, opacity: 0.9 }; // Merah
          case "candi cetho":
            return { color: "#2980b9", weight: 4, opacity: 0.9 }; // Biru
          case "cemoro kandang":
            return { color: "#7FFF00", weight: 4, opacity: 0.9 }; // Hijau
          case "singolangu":
            return { color: "#f1c40f", weight: 4, opacity: 0.9 }; // Kuning
          default:
            return { color: "#7f8c8d", weight: 3, opacity: 0.7 }; // Abu-abu
        }
      },
      onEachFeature: function(feature, layer) {
        // Popup utama dengan properti spesifik
        const nama = feature.properties.Name || feature.properties.name || "Tanpa Nama";
        const jarak = feature.properties["Jarak(km)"] || "-";
        const author = feature.properties.Author || "Tidak ada sumber";
        const popupContent = `<strong>${nama}</strong><br>Jarak: ${jarak} km<br>Sumber: <a href="${author}" target="_blank">Link</a>`;


        // Hanya gunakan popup utama tanpa detail properti
        layer.bindPopup(popupContent)
      }
    }).addTo(map);

 
  })
  .catch(err => console.error("Gagal memuat GeoJSON:", err));
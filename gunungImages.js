var gunungImages = {
  "Slamet": "https://eventdaerah.kemenparekraf.go.id/storage/app/media/uploaded-files/1720765546168.jpeg",
  "Sumbing": "https://mounture.com/wp-content/uploads/2020/06/800px-Kabut_Tipis_Temanggung.jpg",
  "Sindoro": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijxOZeBrmsgh2gd16gIcC6naWzYEpaa2hUHxi0AUdvrNTKdkwhtMbkpvel5WJzXkRI0Xq14Y9VDfYlYSaP5DUBf2DkjruK5GCfTXkCe41H3gktBh-Jr3dq4kCUJirdwAplPNaEYhdzw7vW/s1600/sindoro+%25281%2529.jpg",
  "Lawu": "https://triptofun.id/wp-content/uploads/2021/08/gunung_lawu_iqbalxpangestu.jpg",
  "Arjuno": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Arjuno-Welirang_from_Mount_Penanggungan_by_Harris_Frilingga_K.jpg",
  "Welirang": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Arjuno-Welirang_from_Mount_Penanggungan_by_Harris_Frilingga_K.jpg",
  "Merapi": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Merapi_mountain.jpg",
  "Merbabu": "https://upload.wikimedia.org/wikipedia/commons/1/12/MtmerbabuA45d.jpg",
  "Ciremai": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gunung_Ciremai_sfw2503.jpg",
  "Papandayan": "https://bbksdajabar.ksdae.menlhk.go.id/uploads/publikasi/foto/be1d3c9141e9174fcd35982de3a02526.jpeg",
  "Gede": " https://muhdhito.me/wp-content/uploads/2013/07/kawah.jpg",
  "Pangrango": "https://upload.wikimedia.org/wikipedia/commons/b/bc/View_Mt_Gede_Pangrango_from_Mt_Gede_peak.jpg",
  "Bromo": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg",
  "Ijen": "https://upload.wikimedia.org/wikipedia/commons/2/29/Danau_Belerang_Ijen.jpg",
  "Semeru": "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
  "Raung": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mount_Raung_Wikipedia.jpg",
  "Muria": "https://shelterjelajah.com/wp-content/uploads/2024/08/Paket-Trip-Gunung-Muria.jpeg"
};

function updateSidebarWithImage(gunungName, tinggi, status, deskripsi) {
  var imageUrl = gunungImages[gunungName] || "https://via.placeholder.com/320x200.png?text=Gambar+Tidak+Tersedia";
  document.getElementById('sidebarContent').innerHTML = `
    <h2>${gunungName}</h2>
    <img src="${imageUrl}" alt="${gunungName}" style="width:100%;max-width:320px;height:auto;margin-bottom:10px;">
    <p><b>Tinggi:</b> ${tinggi} mdpl<br>
    <b>Status:</b> ${status}<br>
    <b>Deskripsi:</b> ${deskripsi}</p>
  `;
}
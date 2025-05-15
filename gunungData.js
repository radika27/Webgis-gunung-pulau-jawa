// Informasi dasar gunung
var gunungData = [
  { name: "Slamet", lat: -7.2422, lon: 109.2080, tinggi: 3428, status: "Aktif" },
  { name: "Sumbing", lat: -7.3851, lon: 110.0726, tinggi: 3371, status: "Aktif" },
  { name: "Sindoro", lat: -7.3027, lon: 109.9960, tinggi: 3153, status: "Tidak Aktif" },
  { name: "Lawu", lat: -7.6275, lon: 111.1942, tinggi: 3265, status: "Tidak Aktif"},
  { name: "Arjuno", lat: -7.7648, lon: 112.5923, tinggi: 3339, status: "Tidak Aktif" },
  { name: "Welirang", lat: -7.7311, lon: 112.5764, tinggi: 3156, status: "Aktif" },
  { name: "Merapi", lat: -7.5407, lon: 110.4461, tinggi: 2930, status: "Aktif" },
  { name: "Merbabu", lat: -7.4462, lon: 110.4438, tinggi: 3145, status: "Tidak Aktif" },
  { name: "Ciremai", lat: -6.8920, lon: 108.4037, tinggi: 3078, status: "Aktif" },
  { name: "Papandayan", lat: -7.3200, lon: 107.7300, tinggi: 2665, status: "Aktif" },
  { name: "Gede", lat: -6.7878, lon: 106.9820, tinggi: 2958, status: "Aktif" },
  { name: "Pangrango", lat: -6.7703, lon: 106.9637, tinggi: 3019, status: "Tidak Aktif" },
  { name: "Bromo", lat: -7.9425, lon: 112.9530, tinggi: 2329, status: "Aktif" },
  { name: "Ijen", lat: -8.0586, lon: 114.2423, tinggi: 2386, status: "Aktif" },
  { name: "Semeru", lat: -8.1130, lon: 112.9242, tinggi: 3676, status: "Aktif" },
  { name: "Raung", lat: -8.1258, lon: 114.0468, tinggi: 3344, status: "Aktif" },
  { name: "Muria", lat: -6.6169, lon: 110.8907, tinggi: 1625, status: "Tidak Aktif" }
];

// Deskripsi gunung (terpisah)
var gunungDeskripsi = {
  Slamet: "Gunung Slamet adalah gunung tertinggi di Jawa Tengah dengan ketinggian 3.428 mdpl. Dikenal sebagai gunung berapi aktif, menawarkan pemandangan indah dari puncaknya, termasuk kawah yang memukau dan panorama pegunungan sekitar. Cocok untuk pendaki yang menyukai tantangan dengan rute yang beragam.",
  Sumbing: "Gunung Sumbing, dengan ketinggian 3.371 mdpl, terletak dekat Sindoro dan merupakan destinasi pendakian populer. Rute pendakiannya menantang dengan panorama luas, termasuk pemandangan Gunung Sindoro dan lautan awan. Ideal untuk petualang yang mencari pengalaman alam yang memukau.",
  Sindoro: "Gunung Sindoro berdiri tegak di ketinggian 3.153 mdpl, bersisian dengan Sumbing. Gunung ini menawarkan keindahan alam yang memikat, sejarah geologi yang menarik, dan rute pendakian yang relatif terjangkau, cocok untuk pendaki pemula maupun berpengalaman.",
  Lawu: "Gunung Lawu, dengan ketinggian 3.265 mdpl, terletak di perbatasan Jawa Tengah dan Jawa Timur. Terkenal dengan pemandangan matahari terbit dari Cemara Sewu dan kawasan suci seperti Candi Cetho, menjadikannya destinasi spiritual sekaligus alam yang menawan.",
  Arjuno: "Gunung Arjuno, setinggi 3.339 mdpl, adalah bagian dari rangkaian Arjuno-Welirang. Populer di kalangan pendaki karena keindahan alamnya, termasuk hutan lebat dan pemandangan kota dari puncak, menawarkan pengalaman mendaki yang berkesan.",
  Welirang: "Gunung Welirang, dengan ketinggian 3.156 mdpl, adalah gunung belerang yang unik. Menawarkan pengalaman mendaki dengan aroma khas belerang dan kawah aktif, cocok untuk petualang yang ingin mengeksplorasi fenomena alam langka.",
  Merapi: "Gunung Merapi, setinggi 2.930 mdpl, adalah gunung api paling aktif di Indonesia. Terkenal dengan aktivitas vulkaniknya dan sejarah erupsi, menarik perhatian baik pendaki maupun peneliti geologi untuk mempelajari dinamika alamnya.",
  Merbabu: "Gunung Merbabu, dengan ketinggian 3.145 mdpl, terletak di dekat Merapi. Menyediakan rute pendakian yang damai dengan pemandangan hijau dan hamparan bunga edelweis, cocok untuk pendaki yang mencari ketenangan.",
  Ciremai: "Gunung Ciremai, puncak tertinggi di Jawa Barat dengan ketinggian 3.078 mdpl, menawarkan panorama alam yang memukau dari kawahnya. Rute pendakiannya bervariasi, menarik bagi pendaki yang ingin menaklukkan puncak ikonik ini.",
  Papandayan: "Gunung Papandayan, setinggi 2.665 mdpl, terkenal dengan kawah luas dan pemandian air panas alami. Cocok untuk petualangan alam sekaligus relaksasi, dengan pemandangan vulkanik yang spektakuler.",
  Gede: "Gunung Gede, dengan ketinggian 2.958 mdpl, berpasangan dengan Pangrango. Memiliki hutan tropis yang rimbun dan jalur pendakian klasik, menawarkan pengalaman alam yang kaya flora dan fauna.",
  Pangrango: "Gunung Pangrango, setinggi 3.019 mdpl, sering didaki dari Cibodas. Menyuguhkan pemandangan lembah dan flora khas pegunungan, ideal untuk pendaki yang menyukai rute sejarah dan alam.",
  Bromo: "Gunung Bromo, dengan ketinggian 2.329 mdpl, ikonik dengan kawah berasap dan lautan pasir. Destinasi wisata alam terkenal, menarik jutaan pengunjung untuk menyaksikan matahari terbit.",
  Ijen: "Gunung Ijen, setinggi 2.386 mdpl, terkenal dengan api biru dan kawah belerang. Menarik bagi wisatawan dan fotografer, menawarkan pengalaman mendaki yang unik dan menantang.",
  Semeru: "Gunung Semeru, gunung tertinggi di Jawa dengan ketinggian 3.676 mdpl, menyuguhkan panorama padang lavender dan Danau Ranu Kumbolo. Menjadi impian pendaki dengan rute yang epik.",
  Raung: "Gunung Raung, setinggi 3.344 mdpl, adalah gunung berapi kerucut tertinggi di Pegunungan Ijen. Menawarkan tantangan pendakian dengan pemandangan kawah yang dramatis.",
  Muria: "Gunung Muria, dengan ketinggian 1.625 mdpl, dulu merupakan pulau tersendiri di Selat Muria. Menawarkan sejarah geologi yang menarik dan pemandangan laut yang indah dari puncaknya."
};
var trailGeojson = {
  Lawu: "JalurLawu.geojson",
  Sindoro: "JalurSindoro.geojson",
};
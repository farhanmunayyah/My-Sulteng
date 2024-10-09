function next() {
  document.getElementById("gambar").src = "assets/togean.jpg";
}

function prev() {
  document.getElementById("gambar").src = "assets/sombori.jpg";
}

function ubahmode() {
  const ubah = document.body;
  ubah.classList.toggle("dark");
}

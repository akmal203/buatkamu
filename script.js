// Fungsi untuk menentukan waktu (pagi, siang, sore, malam)
function getWaktu() {
  const jam = new Date().getHours();
  if (jam >= 4 && jam < 11) return "Pagi";
  if (jam >= 11 && jam < 15) return "Siang";
  if (jam >= 15 && jam < 18) return "Sore";
  return "Malam";
}

// Fungsi untuk menampilkan pesan sesuai waktu
function tampilkanPesan() {
  const waktu = getWaktu();
  const pesanElement = document.getElementById("pesan");
  const judulElement = document.getElementById("waktu");

  judulElement.textContent = waktu;

  switch (waktu) {
    case "Pagi":
      pesanElement.textContent = "Semoga harimu penuh dengan kebahagiaan dan semangat baru! 🌞";
      break;
    case "Siang":
      pesanElement.textContent = "Semoga siangmu menyenangkan dan penuh dengan keceriaan! ☀️";
      break;
    case "Sore":
      pesanElement.textContent = "Semoga soremu tenang dan penuh dengan kedamaian! 🌇";
      break;
    case "Malam":
      pesanElement.textContent = "Semoga malammu indah dan penuh dengan mimpi manis! 🌙";
      break;
    default:
      pesanElement.textContent = "Selamat beraktivitas, Sayangku! 💖";
  }
}

// Fungsi untuk menambahkan dekorasi
function tambahkanDekorasi() {
  const colors = ["#ff9a9e", "#fad0c4", "#a1c4fd", "#c2e9fb"];
  for (let i = 0; i < 20; i++) {
    const decor = document.createElement("div");
    decor.classList.add("decor");
    decor.style.width = `${Math.random() * 30 + 10}px`;
    decor.style.height = decor.style.width;
    decor.style.left = `${Math.random() * 100}vw`;
    decor.style.top = `${Math.random() * 100}vh`;
    decor.style.animationDuration = `${Math.random() * 5 + 3}s`;
    decor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(decor);
  }
}

// Event listener untuk tombol
document.getElementById("tombol").addEventListener("click", function() {
  const pesanElement = document.getElementById("pesan");
  pesanElement.textContent = "Aku selalu bersyukur memiliki kamu di hidupku. 💕";
  pesanElement.style.color = "#e91e63";
  pesanElement.style.fontWeight = "bold";
  pesanElement.style.fontSize = "1.4rem";
});

// Memastikan audio diputar otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  const lagu = document.getElementById("lagu");
  lagu.play().catch(() => {
    console.log("Autoplay diblokir oleh browser. Silakan klik tombol play manual.");
  });
});

// Panggil fungsi saat halaman dimuat
tampilkanPesan();
tambahkanDekorasi();
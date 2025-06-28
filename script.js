function enterSite() {
  const welcome = document.getElementById("welcome-screen");
  welcome.style.transition = "opacity 1s ease";
  welcome.style.opacity = 0;
  setTimeout(() => {
    welcome.style.display = "none";
    document.getElementById("home").style.display = "block";
  }, 1000);
}

let text = "Halo! Saya adalah Web Shop Noxxa. Kamu mau membeli produk? Langsung ke owner ya... Scroll ke bawah buat lihat daftar produk.";
let typedText = document.getElementById("typed-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = function () {
  typeEffect();
};

let music = document.getElementById("bg-music");
let musicPlayer = document.getElementById("music-player");
let seekBar = document.getElementById("seek-bar");
let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicPlayer.style.display = "block";
  } else {
    music.pause();
  }
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
}

music.addEventListener("loadedmetadata", function () {
  seekBar.max = music.duration;
  durationEl.textContent = formatTime(music.duration);
});

music.addEventListener("timeupdate", function () {
  seekBar.value = music.currentTime;
  currentTimeEl.textContent = formatTime(music.currentTime);
});

seekBar.addEventListener("input", function () {
  music.currentTime = seekBar.value;
});

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return minutes + ":" + seconds;
}

function scrollToHome() {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
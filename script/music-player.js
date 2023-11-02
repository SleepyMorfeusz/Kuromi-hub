const songBoxes = document.querySelectorAll(".song-box");
const music = document.getElementById("music");
const popup = document.querySelector(".app-popup");
const closeButton = document.querySelector(".closeButton");

music.volume = 0.1;
function playSong(songSrc) {
  if (!music.paused) {
    music.pause();
  }
  music.src = songSrc;
  music.play();
}
songBoxes.forEach((songBox) => {
  songBox.addEventListener("click", function () {
    const songSrc = songBox.getAttribute("data-src");
    playSong(songSrc);
  });
});
closeButton.addEventListener("click", function () {
  popup.style.display = "none";
  music.pause();
});

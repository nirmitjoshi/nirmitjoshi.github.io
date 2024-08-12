document.addEventListener("DOMContentLoaded", () => {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressBar = document.getElementById("progressBar");
  const audioPlayer = document.getElementById("audioPlayer");
  const playIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
  const pauseIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';

  playPauseBtn.addEventListener("click", togglePlayPause);
  audioPlayer.addEventListener("timeupdate", updateProgress);
  audioPlayer.addEventListener("ended", resetPlayer);

  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = pauseIcon;
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = playIcon;
    }
  }

  function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function resetPlayer() {
    playPauseBtn.innerHTML = playIcon;
    progressBar.style.width = "0%";
    audioPlayer.currentTime = 0;
  }

  resetPlayer();
});

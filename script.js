document.getElementById('playButton').addEventListener('click', function() {
  const audio = document.getElementById('christmasAudio');
  if (audio.paused) {
    audio.play();
    this.textContent = 'Pause Song'; 
  } else {
    audio.pause();
    this.textContent = 'Play Christmas Song'; 
  }
});

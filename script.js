const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

const songs = [
  { title: 'Song One', artist: 'Artist One', src: 'song1.mp3' },
  { title: 'Song Two', artist: 'Artist Two', src: 'song2.mp3' },
  { title: 'Song Three', artist: 'Artist Three', src: 'song3.mp3' }
];

let songIndex = 0;

function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  artistName.textContent = songs[index].artist;
}

function playPauseSong() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = '⏸️';
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = '⏸️';
}

playBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Initialize the player
loadSong(songIndex);

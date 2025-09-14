const cards = document.querySelectorAll(".card");
const audioPlayer = document.getElementById("audioPlayer");
const playPausebtn=document.getElementById("playPauseBtn");
const prevBtn =document.getElementById("prevBtn")
const nextBtn =document.getElementById("nextBtn")

let songlist=[];
let currentindex=-1;

//gathering all songs from the cards
cards.forEach(card=>{
  songlist.push(card.getAttribute("data-song"));
})

//when a card is clicked, play the card

cards.forEach((card, index)=>{
  card.addEventListener("click", ()=>{
    const song = card.getAttribute("data-song");
    currentindex = index;
     playPausebtn.textContent = "⏸️";
    playSong(song);
  })
})

//play the song
function playSong(song) {
  audioPlayer.src = song;
  audioPlayer.play();
}
// Toggle Play/Pause
playPausebtn.addEventListener("click", () => {
  if (audioPlayer.src === "") return; // No song selected

  if (audioPlayer.paused) {
    audioPlayer.play();
    playPausebtn.textContent = "⏸️";
  } else {
    audioPlayer.pause();
    playPausebtn.textContent = "▶️ ";
  }
});

// Play Previous Song
prevBtn.addEventListener("click", () => {
  if (currentindex > 0) {
    currentindex--;
    playSong(songlist[currentindex]);
  }
});

// Play Next Song
nextBtn.addEventListener("click", () => {
  if (currentindex < songlist.length - 1) {
    currentindex++;
    playSong(songlist[currentindex]);
  }
});

const player = document.getElementById("player");

function playSong(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
}

// When you click this button,
// the onclick attribute calls the playSong function with the argument 'WaNwEkCeZrE',
//  which is the YouTube video ID for "It's Beginning to Look a Lot Like Christmas."

// The playSong function then takes this video ID and updates the src attribute of the player iframe
// using the YouTube embed URL:

// As a result, the player iframe now loads and plays the YouTube video associated with the ID.

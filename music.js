var music = {
 name: 'Aloha',
 artist: 'Mariah',
 year: 1986,
 isPlaying: false,
 post50sMusic: function() {
  if(this.year > 1950) {
  this.isPlaying = true;
  } else {
   this.isPlaying = false;
  }
 }
};
var music = {
 name: 'Aloha',
 artist: 'Mariah',
 year: 1986,
 playing: false,
 retro: function () {
  if (!this.playing) {
   this.playing = true;
   console.log('This retro hit is ' + this.name + ' by ' + this.artist)
  }
 },
 modern: function () {
  if (this.playing) {
   this.playing = false;
  }
 }
};
music.retro();

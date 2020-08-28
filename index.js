function Housekeeper(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

var test10 = null;
console.log(test10);
console.log(typeof test10);


function Duck(sound) {
this.sound = sound;
this.quack = function() {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);






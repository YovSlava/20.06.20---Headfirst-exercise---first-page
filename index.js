var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Choose a valid number between 0 and 6!");
  if (guess < 0 || guess > 6) {
    alert("Choose a valid number between 0 and 6, please!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Hit!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You have sunk my battleship!");
      }
    } else {
      alert("Miss!");
    }
  }
}

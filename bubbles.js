var bubbles = [60, 40, 50, 40, 20, 68, 85, 74, 25, 52, 94];

var length = bubbles.length; 
var bestBubble

for (var i = 0; i < length; i++) {
 document.write('The score of bubble #' + i + 'is ' + bubbles[i] + '.');
 if (bestBubble < bubbles[i]) {
  bubbles[i] = bestBubble; 
 }
}
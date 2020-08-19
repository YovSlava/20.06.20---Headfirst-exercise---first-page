var output = [];

var i = 0;

function FizzBuzz() {
 for (i = 0; i <= 300; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
   console.log(output.push('FizzBuzz'));
  } else if (i % 3 === 0) {
   console.log(output.push('Fizz'));
  } else if (i % 5 === 0) {
   console.log(output.push('Buzz'));
  } else {
   console.log(output.push(i));
  }
 }

}

FizzBuzz();
console.log(output);





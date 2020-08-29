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


// //

function factorial(n) {
for (var i=n-1; i>0; i--) {
    n*=i
}
return n

}


// // 
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    var r = readLine();

    const PI = Math.PI; 

    const area = PI * Math.pow(r, 2); 

    const perimeter = 2 * PI * r; 
    
    console.log(area);
    console.log(perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

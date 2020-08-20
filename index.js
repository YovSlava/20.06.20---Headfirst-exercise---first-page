//Create a variable which goes through all properties with tag name of 'p' for paragraph;
var myLinkCollection = document.getElementsByTagName("p");

//for each P property, we go though, we check if it has a class name of 'linkCollection' and IF it does, we again chose the variable with the P tag name and add an event listener to it with the click type and we create a function that takes 'this' variable and changes the text color to Red


for (i = 0; i < myLinkCollection.length; i++) {
  if (myLinkCollection[i].className == "linkCollection") {
    myLinkCollection[i].addEventListener('click', function () {
      this.style.color = 'red';
    })
  }
}
var myLinkCollection = document.getElementsByTagName("p");

for (i = 0; i < myLinkCollection.length; i++) {
  if (myLinkCollection[i].className == "linkCollection") {
    myLinkCollection[i].addEventListener('click', function () {
      this.style.color = 'red';
    })
  }
}
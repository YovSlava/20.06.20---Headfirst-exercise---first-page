var myLinkCollection = document.getElementsByTagName('P');

for (i = 0; i < myLinkCollection.length; i++) {
  if (myLinkCollection[i].getElementByClassName == 'linkCollection') {
    myLinkCollection[i].onclick = funtion() {
      this.style.color = '#f00';
    }
  }
};
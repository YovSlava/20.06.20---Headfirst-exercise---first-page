var myLinkCollection = document.getElementsByTagName('P');

for (i = 0; i < myLinkCollection.length; i++) {
  if (myLinkCollection[i].getElementByClassName == 'linkCollection') {
    myLinkCollection[i].onclick = funtion() {
      document.innerHTML.style.color = '#f00';
    }
  }
};
var taxi = {
 name: 'Taxi',
 modelNew: false,
 year: 1950,
 color: 'yellow',
 isLicenced: true
};

function isToBeConsidered(car) {
 if (car.year > 1965) {
  return false
 } else if (car.isLicenced = false) {
  return false
 }
 return true;
}

console.log(isToBeConsidered(taxi));
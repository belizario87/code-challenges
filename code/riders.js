const station1 = [43, 23, 40, 13];
const station2 = [33, 8, 16, 47, 30, 30, 46];
function riders(stations) {
  const totalDistance = station2.reduce((acc, number) => {
    return (acc += number);
  }, 0);
  var countRiders = 1;

  if (totalDistance > 100) {
    countRiders++;
  }

  return countRiders;
}

console.log(riders(station2));

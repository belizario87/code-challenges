const ages1 = [82, 15, 6, 38, 35];

function differenceInAges(ages) {
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);
  const diferenceAge = maxAge - minAge;
  return [minAge, maxAge, diferenceAge];
}

console.log(differenceInAges(ages1));
console.log(diferenceInAgesFilter(ages1));

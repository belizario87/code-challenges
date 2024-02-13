const a = [1, 2, 2];
const b = [2];

function arrayDiff(a, b) {
  const c = a.filter((item) => !b.includes(item));

  return c;
}

console.log(arrayDiff(a, b));

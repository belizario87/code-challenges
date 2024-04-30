const a = ["bad", "bad", "bad"];
const b = ["good", "bad", "bad", "bad"];
const c = ["bad", "bad", "good", "bad", "good", "bad", "bad", "good"];

function well(x) {
  const stringFiltrada = x.filter((string) => string.includes("good"));
  if (stringFiltrada.length === 0) return "Fail!";
  return stringFiltrada.length <= 2 ? "Publish!" : "I smell a series!";
}

console.log(well(a));
console.log(well(b));
console.log(well(c));

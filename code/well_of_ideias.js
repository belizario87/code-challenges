const a = ["bad", "bad", "bad"];
const b = ["good", "bad", "bad", "bad"];
const c = ["bad", "bad", "good", "bad", "good", "bad", "bad"];

function well(x) {
  const stringFiltrada = x.filter((string) => string.includes("good"));
  if (stringFiltrada.length === 0) {
    return "Fail!";
  }
  if (stringFiltrada.length === 1) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

console.log(well(a));
console.log(well(b));
console.log(well(c));

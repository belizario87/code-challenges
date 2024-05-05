const a = ["good", "hello", "jhon", "flick", "ok", "run"];
const b = ["good", "hello", "jhon", "ok", "run"];

function flickFunc(arr) {
  let toogle = true;
  return arr.map((item) => {
    if (item === "flick") {
      toogle = !toogle;
    }
    return toogle;
  });
}

console.log(flickFunc(a));

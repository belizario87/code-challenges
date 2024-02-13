const usd = 150;
function convert(usd) {
  const usdToCny = usd * 6.33;
  const text = usdToCny.toString();
  return `${text} Chinese Yuan`;
}

console.log(convert(usd));

function convert1(usd) {
  return `${String(usd * 6.33)} Chinese Yuan`;
}

console.log(convert1(usd));

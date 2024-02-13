const s1 = "Hello, World!";
const s2 = "Hello!!!";
const s3 = "!Hello!";
const s4 = "Hello! Hello!";
const s5 = "Hello Hello";

function remove(string) {
  if (string.endsWith("!")) {
    return string.replace(/!/g, "");
  }
}

console.log(remove(s3));

let arr = [];
let n = Number(prompt("Enter how many values you want:"));

for (let i = 0; i < n; i++) {
  let value = prompt("Enter value " + (i + 1));
  arr.push(value);
}

console.log(arr);

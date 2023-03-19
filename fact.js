
let fact = 1;

let n = prompt("Enter the number:");
n = Number.parseInt(n);

for (let i = 1; i <= n; i++) {
  fact = fact * i;
//   console.log(i);
  
}
console.log("The factorial of " + n + " is " + fact)
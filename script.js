console.log("\n" + "1. Even Odd Reporter");
for (let i = 0; i <= 20; i++)  {
  if (i % 2 == 0){
  console.log(i + " is even"); 
    } else {
 console.log (i + " is oneven");
    } 
  }
  
console.log("\n" + "2. Multiplication tables");
const vermenigvuldiging = 9;
for (let i = 0; i <= 10; i++) {
  let result = vermenigvuldiging * i;
  console.log(vermenigvuldiging + " * " + i + " = " + result);
}
console.log("\n" + "Bonus: use a nested for loop to write the multiplication tables of 1 until 10");
for (let vermenigvuldiging2 = 0; vermenigvuldiging2 <= 10; vermenigvuldiging2++) {
  for (let i = 0; i <= 10; i++) { 
    let result = vermenigvuldiging2 * i;
    console.log(vermenigvuldiging2 + " * " + i + " = " + result);
  }
}

console.log("\n" + "3. The grade assigner");
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
}

for (let i = 60; i <= 100; i++) {
  console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}
let score = 85;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score < 90) {
  console.log("Grade: B");
} else if (score >= 70 && score < 80) {
  console.log("Grade: C");
} else if (score >= 60 && score < 70) {
  console.log("Grade: D");
} else if (score >= 0 && score < 60) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

let amount = 72;
if (amount >= 90 && amount <= 100) {
  console.log("Grade: A");
} else if (amount >= 70 && amount < 90) {
  console.log("Grade: B");
} else if (amount >= 70 && amount < 80) {
  console.log("Grade: C");
} else if (amount >= 60 && amount < 70) {
  console.log("Grade: D");
} else if (amount >= 0 && amount < 60) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

let number = 95;

if (number >= 90 && number <= 100) {
  console.log("Grade: A");
} else if (number >= 80) {
  console.log("Grade: B");
} else if (number >= 70) {
  console.log("Grade: C");
} else if (number >= 60) {
  console.log("Grade: D");
} else if (number >= 0) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

for (let i = 1000; i >= 0; i -= 2) {
  console.log(i);
}

console.log("-----");

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Even");
  } else {
    console.log(i + " - Odd");
  }
}

console.log("-----");

const numbers = [4, 7, 12, 9, 20, 3, 8];

let max = numbers[0];
for (let num of numbers) {
  if (num > max) {
    max = num;
  }
}

for (let num of numbers) {
  if (num === max) {
    console.log("Found max");
  } else {
    console.log(num);
  }
}

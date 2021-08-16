const readLineSync = require("readline-sync");
const chalk = require("chalk");
const userName = readLineSync.question(
  chalk.yellow.bold("To play quiz please enter your name : ")
);
let score = 0;
const data = [
  {
    que: `1. Where do I live??
    a:Mumbai
    b:Nasik
    c:Pune
    d:Space
    `,
    ans: "b",
  },
  {
    que: `2. Which is my fav book?
    a:Ikigai
    b:Rich dad poor dad
    c:Psychology of Money
    d:Panchatantra
    `,
    ans: "c",
  },
  {
    que: `3. What is my fav color?
    a:black
    b:green
    c:red
    d:Blue
    `,
    ans: "a",
  },
  {
    que: `4. which thing I love to do?
    a:programming
    b:Travelling
    c:Eating
    d:Sleeping
    `,
    ans: "b",
  },
  {
    que: `5. Which is my fav Web series?
    a:Breaking bad
    b:Game of Thrones
    c:Lost in Space
    d:Mandalorian
    `,
    ans: "a",
  },
  {
    que: `6. Which is my fav Metal?
    a:Valyrian Steel
    b:Vibranium
    c:Beskar steel
    d:Tantalum
    `,
    ans: "c",
  },
  {
    que: `7. What is my typing speed?
    a:30 W/M
    b:40 W/M
    c:45 W/M
    d:299 792 458 W/M
    `,
    ans: "c",
  },
];

function play(que, ans) {
  const userAns = readLineSync.question(chalk.yellow.bold(que));

  if (userAns === ans) {
    console.log(chalk.green.bold("You got write answer! ;)"));
    score = score + 1;
  } else {
    console.log(chalk.red.bold("wrong! ans :("));
    score = score - 1;
  }
}

if (userName) {
  console.log(
    chalk.cyan.bold("Hello! " + userName + ". How well do you know Miheer?")
  );
  console.log(chalk.blue.bold("Lets check it out!"));

  for (let i = 0; i < data.length; i++) {
    play(data[i].que, data[i].ans);
  }
  console.log(
    chalk.cyan(
      "Hey " + chalk.bold(userName.toUpperCase()) + " your total score is: ",
      chalk.bold(score)
    )
  );
} else {
  console.log("please enter you name!");
}

const input = readLineSync.question("Do you want to play again?");

//To play again.
if (input.toLowerCase() === "yes") {
  for (let i = 0; i < data.length; i++) {
    play(data[i].que, data[i].ans);
  }
  console.log(
    chalk.cyan(
      "Hey " + chalk.bold(userName.toUpperCase()) + " your total score is: ",
      chalk.bold(score)
    )
  );
}

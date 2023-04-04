// Project No 2 : Snake , Water and Gun Game

console.log(
  `\nLet's Play the Game !! \n 1: S for Snake \n 2: W for Water \n 3: G for Gun`
);

var prompt = require("prompt-sync")();

let chance = 0;

do {
   
  chance++;
  console.log(`You have only ${(6 - chance)} chance.`); 
  let user = prompt("\nEnter S , W or G : > ");

  let cpu1 = Math.floor(Math.random() * 3);
  let cpu = ["S", "W", "G"][cpu1];

  const match = (user, cpu) => {
    if (user === cpu) {
      return `Nobody! Match is Tied`;
    } else if (user == "G" && cpu == "S") {
      return `user `;
    } else if (user == "G" && cpu == "W") {
      return `cpu`;
    } else if (user == "W" && cpu == "G") {
      return `user`;
    } else if (user == "W" && cpu == "S") {
      return `cpu`;
    } else if (user == "S" && cpu == "W") {
      return `user`;
    } else if (user == "S" && cpu == "G") {
      return `cpu`;
    } else {
      console.log(
        `You Entered a wrong value ! please Enter a S , W or G in capital letter.`
      );
    }
  };

  let result = match(user, cpu);
  console.log(
    ` CPU : ${cpu} \n User : ${user} \n The Winner is : ${result.toUpperCase()} \n`
  );
} while (chance !== 5);

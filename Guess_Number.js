
// Project No 1 : Guess the Number 

// Random Number Game 

var prompt = require("prompt-sync")();

let random = Math.random() * 100;
random = Number.parseInt(random);

let input ; 

let score = 0 ;
 
while( input != random ){
    score++;
    input = prompt("Guess the number : ");

    if(input == random){
        console.log("Congratulations ! You won the game . ");
        console.log(`You guess the correct number in ${ 0 + score } chances. `)
    }
    else if( input > random && input < 100){
        console.log("Your number is greater than the actual number. TRY AGAIN! .  ");
    }
    else if( input < random && 0 < input){
        console.log("Your number is less than the actual number. TRY AGAIN! .");
    }
    else{
        console.log("Please enter a number between 1 to 100. ");
    }
}


var prompt = require("prompt-sync")();
var guesses = [];
var numGuesses = 0;

//inital function to call to begin guessing game
var questionTime = function(){
  //assigns number user is guessing
  var num = Math.floor(Math.random() * Math.floor(100))
  //bool trigger for correct answer
  var correct = false;
  var temp;
  console.log(num);

  //loops until correct answer is guessed
  do{
    temp = guess();
    correct = (temp == num);
    if(temp > num){
      console.log("Too High!");
    }
    else if(temp < num){
      console.log("Too Low!");
    }
  }while(!correct);
}

//function to process actual guesses and returns user's answer
var guess = function(){
  var answer = prompt("Guess a number: ");
  if(guesses.includes(answer)){
    console.log("Already Guessed!");
    answer = guess();
  }
  else{
    guesses += answer;
    numGuesses++;
  }

  return answer;
}

//kicks off the game
questionTime();
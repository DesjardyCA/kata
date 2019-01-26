var prompt = require("prompt-sync")();

var squareCode = function(){
  var answer = prompt("Please type a message with only english words, no spaces and max 81 characters: ");

  return encode(answer);
}

var encode = function(input){
  var tempArray = [];
  var outArray = [];
  var multiples = findMultiples(input.length);
  var i = 0;

  for(var x = 0; x < multiples[1]; x++){
    tempArray[x] = [];
    i = x;
    for(var y = 0; y < multiples[0]; y++){
      tempArray[x][y] = input[i];
      i += multiples[1];
    }
    outArray.push(tempArray[x].join(""));
  }

  return outArray.join(" ");
}

var findMultiples = function(input){
  var xMulti = Math.sqrt(input);
  var yMulti = Math.sqrt(input);

  if(Math.sqrt(input) % 1 != 0){
    xMulti = Math.ceil(xMulti);
    yMulti = Math.ceil(input / xMulti);
  }

  return[yMulti, xMulti];
}

console.log(squareCode());
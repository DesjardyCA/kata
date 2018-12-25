//global var for total $ remaining
var newTotal;

//general function to calc each denomination
var calculateChange = function(total, cash) {
  var out = [];
  newTotal = cash - total;

  //twenty
  if(newTotal >= 2000){
    out.push("Twenty dollars: " + count(newTotal, 2000));
  }

  //ten
  if(newTotal >= 1000){
    out.push("Ten dollars: " + count(newTotal, 1000));
  }

  //five
  if(newTotal >= 500){
    out.push("Five dollars: " + count(newTotal, 500));
  }

  //two
  if(newTotal >= 200){
    out.push("Two dollars: " + count(newTotal, 200));
  }

  //one
  if(newTotal >= 100){
    out.push("One dollars: " + count(newTotal, 100));
  }

  //quarter
  if(newTotal >= 25){
    out.push("Quarters: " + count(newTotal, 25));
  }

  //dime
  if(newTotal >= 10){
    out.push("Dimes: " + count(newTotal, 10));
  }

  //nickel
  if(newTotal >= 5){
    out.push("Nickels: " + count(newTotal, 5));
  }

  //penny
  if(newTotal >= 1){
    out.push("Pennys: " + count(newTotal, 1));
  }

  return output(out);
};

//determines # of each denomination and reduces total to reflect
function count(x, denom){
  var i = Math.trunc(x/denom);
  newTotal -= i * denom;
  return i;
}

//generates string for output
function output(text){
  var temp = "{ ";

  for(var i = 0; i < text.length; i++){
    temp += text[i];

    if((text.length - 1) != i){
      temp += ", ";
    }
  }

  temp += " }";
  return temp;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
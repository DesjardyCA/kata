var conditionalSum = function(values, condition) {
  // Your code here
  if(condition == "even"){
    return even(values);
  }
  else if(condition == "odd"){
    return odd(values);
  }
  else{
    return "Wrong condition passed";
  }
};

function even(values){
  var out = 0;
  for(var i = 0; i < values.length; i++){
    if(values[i] % 2 == 0){
      out += values[i];
    }
  }

  return out;
}
function odd(values){
  var out = 0;
  for(var i = 0; i < values.length; i++){
    if(values[i] % 2 == 1){
      out += values[i];
    }
  }

  return out;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
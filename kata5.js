var camelCase = function(input) {
  input = input.split(" ");
  var out = "";

  for(var i = 0; i < input.length; i++){
    if(i > 0){
      input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    out += input[i];
  }

  return out;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
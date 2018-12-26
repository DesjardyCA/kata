var makeCase = function(text, conditions){
  if(typeof conditions === "string"){
    text = processString(text, conditions);
  }
  else{
    for(var i = 0; i < conditions.length; i++){
      text = processString(text, conditions[i]);
    }
  }

  return text;
}

var processString = function(text, conditions){
  var out = "";
  switch(conditions){
    case "camel":
      out = camelCase(text);
      break;
    case "pascal":
      out = pascalCase(text);
      break;
    case "snake":
      out = snakeCase(text);
      break;
    case "kebab":
      out = kebabCase(text);
      break;
    case "title":
      out = titleCase(text);
      break;
    case "vowel":
      out = vowel(text);
      break;
    case "consonant":
      out = consonant(text);
      break;
    case "upper":
      out = text.toUpperCase();
      break;
    case "lower":
      out = text.toLowerCase();
      break;
  }

  console.log(out);
  return out;
}

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

var pascalCase = function(input) {
  input = input.split(" ");
  var out = "";

  for(var i = 0; i < input.length; i++){
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);

    out += input[i];
  }

  return out;
};

var snakeCase = function(input) {
  return input.split(" ").join("_");
};

var kebabCase = function(input) {
  return input.split(" ").join("-");
};

var titleCase = function(input) {
  input = input.split(" ");
  var out = "";

  for(var i = 0; i < input.length; i++){
    if(i > 0){
      input[i] = " " + input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
    out += input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }

  return out;
};

var vowel = function(input) {
  var out = "";
  for(var i = 0; i < input.length; i++){
    if(input[i].toLowerCase() == "a"||
       input[i].toLowerCase() == "e"||
       input[i].toLowerCase() == "i"||
       input[i].toLowerCase() == "o"||
       input[i].toLowerCase() == "u"){
      out += input[i].toUpperCase();
    }
    else{
      out += input[i];
    }
  }

  return out;
};

var consonant = function(input) {
  var out = "";
  for(var i = 0; i < input.length; i++){
    if(input[i].toLowerCase() != "a"&&
       input[i].toLowerCase() != "e"&&
       input[i].toLowerCase() != "i"&&
       input[i].toLowerCase() != "o"&&
       input[i].toLowerCase() != "u"){
      out += input[i].toUpperCase();
    }
    else{
      out += input[i];
    }
  }

  return out;
};

/*console.log(makeCase("this is a string", "camel") + " === thisIsAString");
console.log(makeCase("this is a string", "pascal") + " === ThisIsAString");
console.log(makeCase("this is a string", "snake") + " === this_is_a_string");
console.log(makeCase("this is a string", "kebab") + " === this-is-a-string");
console.log(makeCase("this is a string", "title") + " === This Is A String");
console.log(makeCase("this is a string", "vowel") + " === thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") + " === THiS iS a STRiNG");*/
console.log(makeCase("this is a string", ["upper", "camel"]) + " === THIS_IS_A_STRING");
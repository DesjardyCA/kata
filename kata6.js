var multiplicationTable = function(maxValue) {
  return buildArray(maxValue);
};

function buildArray(maxValue){
  var array = [];

  for(var x = 0; x < maxValue; x++){
    array[x] = [];
    for(var y = 0; y < maxValue; y++){
      if(x == 0){
        array[x][y] = y + 1;
      }
      else if(y == 0){
        array[x][y] = x + 1;
      }
      else if(x != 0 && y != 0){
        array[x][y] = array[x][0] * array[0][y];
      }
    }
  }

  return beautify(array, maxValue);
}

function beautify(array, maxValue){
  var out = "";
  out += (getSeperator(maxValue));

  for(var x = 0; x < maxValue; x++){
    out += "| ";
    for(var y = 0; y < maxValue; y++){
      out += (array[x][y] + spacing(array[x][y].toString().length) + "| ");
    }
    out += ("\n" + getSeperator(maxValue));
  }

  return out;
}

function getSeperator(maxValue){
  var out = "+";
  for(var i = 0; i < maxValue; i++){
    out += "----+";
  }
  return out + "\n";
}

function spacing(length){
  var out = "";
  for(var i = 0; i < (3 - length); i++){
    out += " ";
  }
  return out;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
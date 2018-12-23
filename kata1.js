var repeatNumbers = function(data) {
  var out = "";

  for(var i = 0; i < data.length; i++){
    if(i !== 0){
      out += ", ";
    }
    var temp = data[i].toString().split(",");
    for (var x = 0; x < temp[1]; x++){
      out += temp[0];
    }
  }

  return out;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
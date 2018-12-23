var talkingCalendar = function(date) {
  var out = "";
  date = date.split("/");

  switch(parseInt(date[1], 10)){
    case 12:
      out += "December ";
      break;
    case 11:
      out += "November ";
      break;
    case 10:
      out += "October ";
      break;
    case 9:
      out += "September ";
      break;
    case 8:
      out += "August ";
      break;
    case 7:
      out += "July ";
      break;
    case 6:
      out += "June ";
      break;
    case 5:
      out += "May ";
      break;
    case 4:
      out += "April ";
      break;
    case 3:
      out += "March ";
      break;
    case 2:
      out += "February ";
      break;
    case 1:
      out += "January ";
      break;
  }

  if(date[2] == 1 || date[2] == 21|| date[2] == 31){
    out += (date[2] + "st, ");
  }
  else if(date[2] == 2 || date[2] == 22){
    out += (date[2] + "nd, ");
  }
  else if(date[2] == 3 || date[2] == 23){
    out += (date[2] + "rd, ");
  }
  else{
    out += (date[2] + "th, ");
  }

  return out + date[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
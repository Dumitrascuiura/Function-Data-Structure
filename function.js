var a = +prompt("Your number","0");
var b = +prompt("Your second number","1");
var c = a + b;

function myFunction() {
   if (isNaN(c)) {
     alert("I need a number");
   } else {
       alert(c.toFixed(2) );
   }
}
myFunction();

function sum(arr) {
    return arr.reduce(function(sum, value) {
        return sum + value;
    });
}

console.log(sum([1, 2, 3, 4]));

function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ];
  return days[date.getDay()];
}

var date = new Date(2019, 3, 2);
console.log( getWeekDay(date) );
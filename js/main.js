//4 Create an array of 5 numbers each with 2 decimal places.
var numbers = [ 16.56, 84.59, 56.17, 87456.35, 926387.42,];
// 5Loop through the array and round all numbers to the nearest whole integer. Add each rounded number to a new array.
var newNumbers = [];

for (var i = 0; i < numbers.length; i++) {

var y =	Math.round(numbers[i]);

newNumbers.push(y);

}
console.log(numbers);

console.log(newNumbers);

//6 Create a function that produces 10 random numbers between 1 and 100. Add each number to an array of numbers.
newNumbers2 = [];
function randomNumbers() {
	var z = Math.ceil(Math.random()*100);
	newNumbers2.push(z);
};
for (var i = 0; i < 10; i++) {
	randomNumbers();
};

console.log(newNumbers2);


//7 Write out a function that creates a few variables which store the following information: one which stores the whole date, one for the current hour, one for the current minute, and one for the current second.

function newTime () {

	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();

//8 Inside the function, create a variable that will display the current time in the hh:mm:ss format. Don't forget to account for single-digit numbers!

	var time = h + ":" + m + ":" + s;
	console.log(time)

// 9.Inside the function, create a few more variables to store the current month, day, and year.

	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear() - 2000

//10  Inside the function, create a variable that will display the current date in the dd/mm/yy format. Don't forget to account for single-digit numbers!
	var dates = month + "/" + day + "/" + year;
	console.log(dates);
// 11  JS: By now, you should have a function which displays the date and time in the hh:mm:ss dd/mm/yy format. Change your function to print this time and date onto your document.
	document.body.innerHTML = dates + " " + time;

// 12  Now write some code that will run this time/date function every second. To do this, your function will need to use setTimeout to invoke itself after a delay.
	setTimeout (function(){
		newTime();
	}, 1000)
}
newTime();
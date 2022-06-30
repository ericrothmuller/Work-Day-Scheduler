var today = moment();

$("#currentDay").text(today.format("dddd, MMMM do"));


























// Psuedo code for how to get the rows to change color

// Get the current hour in a single number with Math.floor

// If that hour matches a row number (based on hour), apply the .present class

// If a row is greater than that number, apply the .future class

// is a row is less than that number, apply the .past class
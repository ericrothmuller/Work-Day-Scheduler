var today = moment();

var hour = moment().hour();

console.log(hour);

$("#currentDay").text(today.format("dddd, MMMM Do"));






if (hour < 9) {
    const changeColor = document.getElementById("9hour");
    changeColor.classList.add("future");
    } else if (hour == 9 ) {
    const changeColor = document.getElementById("9hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("9hour");
    changeColor.classList.add("past");
    }

if (hour < 10) {
    const changeColor = document.getElementById("10hour");
    changeColor.classList.add("future");
    } else if (hour == 10 ) {
    const changeColor = document.getElementById("10hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("10hour");
    changeColor.classList.add("past");
    }

if (hour < 11) {
    const changeColor = document.getElementById("11hour");
    changeColor.classList.add("future");
    } else if (hour == 11 ) {
    const changeColor = document.getElementById("11hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("11hour");
    changeColor.classList.add("past");
    }

if (hour < 12) {
    const changeColor = document.getElementById("12hour");
    changeColor.classList.add("future");
    } else if (hour == 12 ) {
    const changeColor = document.getElementById("12hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("12hour");
    changeColor.classList.add("past");
    }

if (hour < 13) {
    const changeColor = document.getElementById("13hour");
    changeColor.classList.add("future");
    } else if (hour == 13 ) {
    const changeColor = document.getElementById("13hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("13hour");
    changeColor.classList.add("past");
    }

if (hour < 14) {
    const changeColor = document.getElementById("14hour");
    changeColor.classList.add("future");
    } else if (hour == 14 ) {
    const changeColor = document.getElementById("14hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("14hour");
    changeColor.classList.add("past");
    }

if (hour < 15) {
    const changeColor = document.getElementById("15hour");
    changeColor.classList.add("future");
    } else if (hour == 15 ) {
    const changeColor = document.getElementById("15hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("15hour");
    changeColor.classList.add("past");
    }

if (hour < 16) {
    const changeColor = document.getElementById("16hour");
    changeColor.classList.add("future");
    } else if (hour == 16 ) {
    const changeColor = document.getElementById("16hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("16hour");
    changeColor.classList.add("past");
    }

if (hour < 17) {
    const changeColor = document.getElementById("17hour");
    changeColor.classList.add("future");
    } else if (hour == 17 ) {
    const changeColor = document.getElementById("17hour");
    changeColor.classList.add("present");
    } else {
    const changeColor = document.getElementById("17hour");
    changeColor.classList.add("past");
    }




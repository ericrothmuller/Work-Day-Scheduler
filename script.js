var today = moment();

var hour = moment().hour();

$("#currentDay").text(today.format("LLLL"));




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

// Local Storage

// 9am

var inputKey = "9:00 AM";

var inputValue = document.getElementById("9hourtext");

var buttonSave = document.getElementById("9hourbutton");

var outputArea = document.getElementById("9hourtext");

buttonSave.onclick = function () {
    const key = inputKey;
    const value = inputValue.value;

    if (value) {
        localStorage.setItem(key, value);
    } else if (!value) {
        localStorage.removeItem(key, value);
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    outputArea.innerHTML += value;
}















// 10am

// var inputKey = "10:00 AM";

// var inputValue = document.getElementById("10hourtext");

// var buttonSave = document.getElementById("10hourbutton");

// var outputArea = document.getElementById("10hourtext");

// buttonSave.onclick = function () {
//     const key = inputKey;
//     const value = inputValue.value;

//     if (value) {
//         localStorage.setItem(key, value);
//     } else if (!value) {
//         localStorage.removeItem(key, value);
//     }
// }

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     outputArea.innerHTML += value;
// }
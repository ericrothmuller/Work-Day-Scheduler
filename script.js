var today = moment();

var hour = moment().hour();

console.log(hour);

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


$(".saveBtn").on("click", function (event) {
    var saveItem = event.target;
    var savedLocal = $(this).siblings("textarea").val();
    if (savedLocal == "") {
        console.log("empty");
    } else {
        console.log("text");
        localStorage.setItem(saveItem.dataset.save, savedLocal);

        console.log($(this).siblings("textarea"));
    }
});

// var ninehourbtn = getElementById("ninehourbtn");
// var tenhourbtn = getElementById("tenhourbtn");
// var elevenhourbtn = getElementById("elevenhourbtn");
// var twelvehourbtn = getElementById("twelvehourbtn");
// var thirteenhourbtn = getElementById("thirteenhourbtn");
// var fourteenhourbtn = getElementById("fourteenhourbtn");
// var fifteenhourbtn = getElementById("fifteenhourbtn");
// var sixteenhourbtn = getElementById("sixteenhourbtn");
// var seventeenhourbtn = getElementById("seventeenhourbtn");


var nineText = document.getElementById("9hourtext");
var tenText = document.getElementById("10hourtext");
var elevenText = document.getElementById("11hourtext");
var twelveText = document.getElementById("12hourtext");
var thirteenText = document.getElementById("13hourtext");
var fourteenText = document.getElementById("14hourtext");
var fifteenText = document.getElementById("15hourtext");
var sixteenText = document.getElementById("16hourtext");
var seventeenText = document.getElementById("17hourtext");

function saveText() {
    nineText.text(localStorage.getItem("ninehourbtn"));
    tenText.text(localStorage.getItem("tenhourbtn"));
    elevenText.text(localStorage.getItem("elevenhourbtn"));
    twelveText.text(localStorage.getItem("twelvehourbtn"));
    thirteenText.text(localStorage.getItem("thirteenhourbtn"));
    fourteenText.text(localStorage.getItem("fourteenhourbtn"));
    fifteenText.text(localStorage.getItem("fifteenhourbtn"));
    sixteenText.text(localStorage.getItem("sixteenhourbtn"));
    seventeenText.text(localStorage.getItem("seventeenhourbtn"));
}

saveText();
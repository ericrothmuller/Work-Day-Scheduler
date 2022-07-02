// These are universal varials stored for the use of the time elements on the page

var today = moment();

var hour = moment().hour();

$("#currentDay").text(today.format("LLLL"));


// Setting rows colors based on time starts here

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

// Local Storage starts here

var rowContainer = document.querySelector("#rowcontainer");

// Save Button is here

rowContainer.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var areaId = element.previousElementSibling.getAttribute("id");

        var pageId = document.getElementById(areaId);

        var inputKey = areaId;
        var inputValue = pageId.value;

        if (inputValue) {
        localStorage.setItem(inputKey, inputValue);
    } else if (!inputValue) {
        localStorage.removeItem(inputKey, inputValue);
    }
    }
})

// Getting and printing Local Storage starts here

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    if (key == "9hourtext") {
        document.getElementById("9hourtext").innerHTML += value;
        }

    if (key == "10hourtext") {
        document.getElementById("10hourtext").innerHTML += value;
        }

    if (key == "11hourtext") {
        document.getElementById("11hourtext").innerHTML += value;
        }

    if (key == "12hourtext") {
        document.getElementById("12hourtext").innerHTML += value;
        }

    if (key == "13hourtext") {
        document.getElementById("13hourtext").innerHTML += value;
        }

    if (key == "14hourtext") {
        document.getElementById("14hourtext").innerHTML += value;
        }

    if (key == "15hourtext") {
        document.getElementById("15hourtext").innerHTML += value;
        }

    if (key == "16hourtext") {
        document.getElementById("16hourtext").innerHTML += value;
        }

    if (key == "17hourtext") {
        document.getElementById("17hourtext").innerHTML += value;
        }
}
// Lev3_1_js-einführung_function-onclick
let background = document.getElementById('backGround');
let font = document.getElementById('textColor');

function changeThemeOne() {    
    background.className = '';
    font.className = '';
    background.classList.add("colorOne");
    font.classList.add("colorTwoText");
}

function changeThemeTwo() {    
    background.className = '';
    font.className = '';
    background.classList.add("colorThree");
    font.classList.add("colorFourText");
}

function changeThemeThree() {
    background.className = '';
    font.className = '';  
    background.classList.add("colorFive");
    font.classList.add("colorSixText");
}

function changeThemeFour() {   
    background.className = '';
    font.className = ''; 
    background.classList.add("colorSeven");
    font.classList.add("colorEightText");
}


// Lev1_1_forms+js_function-double
/*
function multipyTwoNumbers() {
    let inputNumber = document.getElementById('number').value;
    let result = inputNumber * 2;
    document.getElementById('result').innerHTML = "Ergebnis: " + result;
}
*/


// Lev1_2_forms+js_function-your-age
/*
function calcAge() {
    let currentYear = new Date().getFullYear();
    let yearInput = document.getElementById('year').value;
    let currentAge = currentYear - yearInput;
    let result = document.getElementById('result');
    result.innerHTML = currentAge;
}
*/


//Lev1_3_forms+js_function-compare-age
/*
function calcDifferenceOne() {
    ageOneColOne = document.getElementById('age-one-col-one').value;
    console.log(ageOneColOne);
    ageTwoColOne = document.getElementById('age-two-col-one').value;
    console.log(ageTwoColOne);
    result = ageOneColOne - ageTwoColOne;
    document.getElementById('result-one').innerHTML=result;
}

function calcDifferenceTwo() {
    ageOneColTwo = document.getElementById('age-one-col-two').value;
    console.log(ageOneColTwo);
    ageTwoColTwo = document.getElementById('age-two-col-two').value;
    console.log(ageTwoColTwo);
    result = ageOneColTwo - ageTwoColTwo;
    document.getElementById('result-two').innerHTML=result;
}
*/


// Lev3_1_forms+js_function-fonts-generator
/*
function resizeFont() {
    let fontSize = document.getElementById('size').value;
    let result = document.getElementById('result');
    //console.log(fontSize);
    //console.log(result);
    //console.log(result.style.fontSize='"' + fontSize + "px" + '"');
    result.style.fontSize= fontSize + "px";
}

function changeFontFamily() {
    let newFontFamily = document.getElementById('font-family').value;
    console.log("selected font-family: " + newFontFamily);
    result.style.fontFamily = newFontFamily;
}

function changeText() {
    let userText = document.getElementById('userText').value;
    console.log(userText);
    result.innerHTML = userText;
}
*/

// Lev3_2_forms+js_function-change-background
/*
function changeBackground() {
    let inputRed = document.getElementById('red').value;
    console.log("red: " + inputRed);
    let inputGreen = document.getElementById('green').value;
    console.log("green: " + inputGreen);
    let inputBlue = document.getElementById('blue').value;
    console.log("blue: " + inputBlue);
    document.body.style.backgroundColor = 'rgb(' + inputRed + ',' + inputGreen + ',' + inputBlue + ')';
}
*/
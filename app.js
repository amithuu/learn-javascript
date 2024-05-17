// // input
// var username = prompt('enter your name');

// // process 
// var WelcomeMessage = 'Welcome to my new learning '+ username

// // output
// alert(WelcomeMessage)

var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');



function clickEventHandler(){
    outputDiv.innerText = txtInput.value;
}

btnTranslate.addEventListener('click', clickEventHandler)


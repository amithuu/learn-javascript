// // input
// var username = prompt('enter your name');

// // process 
// var WelcomeMessage = 'Welcome to my new learning '+ username

// // output
// alert(WelcomeMessage)

var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');


function clickEventHandler(){
    console.log('clicked!!')
    console.log('input', txtInput.value);
}

btnTranslate.addEventListener('click', clickEventHandler)


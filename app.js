// // input
// var username = prompt('enter your name');

// // process 
// var WelcomeMessage = 'Welcome to my new learning '+ username

// // output
// alert(WelcomeMessage)

var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');


// serverURL = 'localhost:8000'
serverURL = 'https://api.funtranslations.com/translate/minion.json'


function getTranslationURl(text){
    // localhost:8000?text=amith
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log('error occurred',error)
    alert('Something went wrong try again after sometime!!', error)
}

function clickHandler(){
    var intText = txtInput.value;
    
    fetch(getTranslationURl(intText)) //calling the api using link by passing text as param..
        .then(response => response.json()) // we are converting the response to Json type
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            }) // then adding the output to div..
        .catch(errorHandler) // adding error handler when we call .catch it will automatically pass the error to the called function     
};

btnTranslate.addEventListener('click', clickHandler)

// ! why json.contents.translated??
// * ans:
// json{
//     contents{
//         translated:data
//     }
// }




const { response } = require("express");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

///variables HtML
let message = document.querySelector('#btn');
let responseBtn = document.querySelector('#responseBtn');

responseBtn.disabled = true ;



//pour le microphone
let recognition = new SpeechRecognition()
recognition.continuous = !! 1;
recognition.lang = 'fr-FR';
recognition.interimResults = false;

//pour le parleur(notre navigateur)
var messag = new SpeechSynthesisUtterance('Salut');

message.lang = 'fr-FR'; // Langue
message.volume = 1;     // Volume (de 0 à 1)

responseBtn.addEventListener('click' , ()=>{
  recognition.start();
})

 recognition.onresult = (event)=>{
  let response = event.results[0][0].transcript;
  console.log(response) 
}




btn.addEventListener('click', ()=>{
    // Faire parler le navigateur
    window.speechSynthesis.speak(messag);
   responseBtn.disabled = false ;

})
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

let recognition = new SpeechRecognition();
let startButton = document.querySelector('#startButton') 
let stopButton = document.querySelector('#stopButton') 
let error = document.querySelector('#error')
let transcription = document.querySelector('#transcription')

stopButton.disabled = !! 1; //!!1 est egale a false(bolean)

recognition.continuous = !! 0;
recognition.lang = 'fr-FR';
recognition.interimResults = false;
// recognition.maxAlternatives = 2;

//fonction pour starter le microphone
startButton.addEventListener('click', ()=>{
    recognition.start();
    console.log('L\enregistrement a demarer')
  stopButton.disabled = !! 0 ; //!!0 est egale a true
})

//si ca va fonctionner
recognition.onresult = (event)=>{
   let transcript = event.results[0][0].transcript
    transcription.textContent = transcript
    console.log(event.results[0][0].transcript)
}

//une foction si en cas d'erreur 
recognition.onnomatch = ()=>{
    error.textContent = "Il y a une errur, veuillez la ressayer"
}

//fonction pour la stopper
stopButton.addEventListener('click' , ()=>{
    recognition.continuous = !! 1;
    recognition.stop();
    
})
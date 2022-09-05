var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
       document.getElementById("textbox").innerHTML = "";
       Recognition.start();
}
Recognition.onresult = function(event)
{
       console.log(event);
       var content = event.result[0][0].transcript;
       document.getElementById('textbox').innerHTML = content;
       console.log(content);
       if (content == 'take selfie')
       {
              console.log('taking selfie');
       } 
}
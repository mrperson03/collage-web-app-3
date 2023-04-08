var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event) {

    console.log(event); 
   
   var Content = event.results[0][0].transcript;
   
       document.getElementById("textbox").innerHTML = Content;
       console.log(Content);
         if(Content == "take my selfie")
         {
           console.log("taking selfie --- ");
           speak();
         }
   }



function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    { 
        img_id = "selfie1";
        take_snapshot(); 
        speak_data = "Taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function()
    { 
        img_id = "selfie2";
        take_snapshot(); 
        speak_data = "Taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);

    setTimeout(function()
    { 
        img_id = "selfie3";
        take_snapshot(); 
        speak_data = "Taking your selfie in 20 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 20000);
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1") {
             document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    };
     
    if(img_id == "selfie2") {
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    };

    if(img_id == "selfie3") {
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
});
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}


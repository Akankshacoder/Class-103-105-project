Webcam.set({
    width: 300 ,height: 300 , image_format: "png" , png_quality: 90
});
camera = document.getElementById('camera')
Webcam.attach('#camera')

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img src="+data_uri+" id='cap_snap'>";
    })
}
console.log("ml5 version is " ,ml5.version)
c = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ufFMvi4f5/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model loaded")
}
function identify(){
   pic= document.getElementById("cap_snap")
   c.classify(pic , gotResult)
}
function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else {
        console.log(results)
        document.getElementById("objname").innerHTML= results[0].label;
        document.getElementById("objaccu").innerHTML= results[0].confidence.toFixed(2);
    }

}
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
video=createCapture(VIDEO);
video.size(560,150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("rightWristX =" + rightWrist + "leftWristX =" + leftWristX + "difference=" + difference);
}
}

function draw()
{
    background('blue');
    document.getElementById("font_size").innerHTML="Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('red');
    text('peter', 50,400);
}
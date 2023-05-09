Peter_pan_song="";
Harry_potter_theme_song="";
leftWristx =0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
function setup(){
    canvas= createCanvas(500,400);
    canvas.center();
    canvas.position(450,160);
    
    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
         
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristx = "+leftWristx);
        console.log("leftWristy="+leftWristy)

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
        console.log("rightWristx = "+rightWristx);
        console.log("rightWristy = "+rightWristy);
    }
}
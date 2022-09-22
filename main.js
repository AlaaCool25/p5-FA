
noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage('https://i.postimg.cc/QxdtsZF6/snotty-nose.png');
}

function setup() {
    canvas = createCanvas(300,235);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,235);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initilized");
}

function draw() {
    image(video,0,0,300,235);
    //fill(174,0,1);
    //stroke(211,166,37);
    //circle(noseX,noseY,20);
    image(clownNose,noseX,noseY,30,30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 15 ;
        noseY = results[0].pose.nose.y - 10 ;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


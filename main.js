noseX=0
noseY=0

function snapshot(){
    save(myfilterimage.png);
}

function preload() {
  clown_nose= loadImage("https://i.postimg.cc/rmmKQGrd/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png");
}

function setup() {
  canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
  }

  function modelLoaded(){
      console.log("PoseNet Is Initialized");
       
    }
  
  function draw() {
      image(video,0,0,400,400);
      image(clown_nose,noseX,noseY,50,50)
     
  }

  function gotPoses(results){
      if(results.length>0){
        console.log(results);
       noseX =  results[0].pose.nose.x+30;
        noseY =  results[0].pose.nose.y+30;
        console.log("noseX = " + noseX );
        console.log("noseY = " + noseY ) ; 
      }

  }
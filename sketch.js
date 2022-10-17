function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var x =25
  var y =50
  rectMode(CENTER)//設定方形座標在中心點
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke(255)//框限為白色
  //ellipse(25,25,50)//座標(25,25)產生一個直徑50的圓
  //rect(25,25,50)//產生一個座標(25,25)長寬50的方形
  //ellipse(50,50,25)//座標(50,50)產生一個直徑25的圓
  
  //ellipse(75,25,50)
  //rect(75,25,50)
  //ellipse(100,50,25)
  
  //ellipse(125,25,50)
  //rect(125,25,50)
  //ellipse(150,50,25)
  
  //ellipse(175,25,50)
  //rect(175,25,50)
  //ellipse(200,50,25)
  
  //ellipse(225,25,50)
  //rect(225,25,50)
  //ellipse(250,50,25)
  
  //ellipse(275,25,50)
  //rect(275,25,50)
  //ellipse(300,50,25)
  
  //ellipse(325,25,50)
  //rect(325,25,50)
  //ellipse(350,50,25)
  stroke(((frameCount%256)+(frameCount*7))%256,frameCount%256,frameCount*100%255);
for (var k=0;k<(width/50);k++){
  for (var p=0;p<(height/50);p++){
  ellipse(25+(50*k),25+(50*p),50+mouseX/50)
  rect(25+(50*k),25+(50*p),50+mouseX/50)
  ellipse(50+(50*k),50+(50*p),25+mouseX/50)
}
}
}

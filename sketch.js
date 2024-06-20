let img;
let img1;
let font1;
let font2;
let img2;
let img3;
let img4;

function preload() {
  img = loadImage("LIMES.png");
  img1 = loadImage("LOGO 1.png");
  font1 = loadFont("AeonikTRIAL-Bold.otf");
  font2 = loadFont("AeonikTRIAL-Regular.otf")
  img2 = loadImage("fiore 1.png");
  img3 = loadImage("fiore 2.png");
  img4 = loadImage("fiore 3.png")
}

let mic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();  
  mic.start();
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(11);
}

function draw() {
  background(0);

  // R会动的圆
  // R - cerchio
  push();
  translate(width / 2, height / 2.5);
  rotate(frameCount * 6);
  noStroke();
  fill(250)
  ellipse(130,130,50,50)
  if (mouseIsPressed) {
    fill(230,68,72,80);
  } else {
    fill(51,51,204,80);
  }
  ellipse(130, 130, 50, 50);
  ellipse(130,130,40,40);
  ellipse(130,130,20,20);
  pop();

 // 红色背景图
  // Sfondo LIMES
  push();
  imageMode(CENTER);
  let h = width / img.width * img.height
  image(img, width / 2, height / 2.5, width, h);
  pop();

   // 上方变色LOGO
  // LOGO
  push();
  tint(255,255*mic.getLevel()*100,255*mic.getLevel()*100);
  imageMode(CORNER);
  image(img1, 10, 10, img1.width / 5, img1.height / 5);
  pop();

  // 主题
  // text tema
  let text_x = width/2;
  let text_y = height / 2+50;
  let testo = "LIMES"
  let font_size = 130
  let risoluzione = 0.2

  textSize(font_size);
  textAlign(CENTER);
  textFont(font1);
  fill("white");
  noStroke();
 // text(testo, text_x, text_y);
  
  let points = font1.textToPoints(
    testo,
    text_x-190,
    text_y-5,
    font_size,
    {sampleFactor:risoluzione}
  );

  strokeWeight(8)
  stroke(250)
  noFill()
  beginShape();
  for (let p of points) {
    push()
    let n = noise(p.x,p.y,frameCount)
    vertex(p.x+n*10,p.y+n*10);
    pop()
  }
  endShape();


  // 信息
  // informazioni sotto
  let texts_x = width-150;
  let texts_y = 0;
  
  push()
  textAlign(LEFT);
  textFont(font2);
  fill("white");
  noStroke();

  textSize(22);
  text("Rocca Paolina", texts_x, texts_y+35);

  textSize(15);
  text("Dal 19 Agosto al 19 Settembre", texts_x-60, texts_y+65);
  text("In collaborazione con Auret", texts_x-45, height-60);
  text("www.limes.it", texts_x+53, height-30);
  pop()

  //紫色小球
  // piccola palla
  noStroke()
  push();
  for (let i = 0; i < 30; i++) {
    let x = random(0, width);
    let y = random(height / 1.5, height);
    fill(211,160,211);
    ellipse(x, y, 7);
  }
  pop();

  // 旋转花花
  // fiore
  let x = 0;
  let y = height;
  
  push();
  translate(x + 100, height - 100);
  rotate(-frameCount * 5);
  imageMode(CENTER);
  tint(250)
  image(img4, 0, 0, img4.width / 4, img4.height / 4);
  pop();
  
  push();
  translate(x + 100, height - 100);
  rotate(frameCount * 5);
  imageMode(CENTER);
  tint(230,68,72,80)
  image(img4, 0, 0, img4.width / 5, img4.height / 5);
  pop();

  push();
  translate(x + 100, height - 100);
  rotate(-frameCount * 6);
  imageMode(CENTER);
  tint(230,68,72,80)
  image(img4, 0, 0, img4.width / 7, img4.height / 7);
  pop();

  push();
  translate(x + 100, height - 100);
  rotate(frameCount * 6);
  imageMode(CENTER);
  tint(29,32,136,80)
  image(img4, 0, 0, img4.width / 10, img4.height / 10);
  pop();
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
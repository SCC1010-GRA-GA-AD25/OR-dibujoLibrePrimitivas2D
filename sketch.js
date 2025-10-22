function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {

  background(135, 206, 235); 


  fill(255, 223, 0);
  noStroke();
  ellipse(500, 80, 100, 100);


  fill(0, 191, 255);
  rect(0, 200, width, 120);


  fill(173, 216, 230);
  for (let x = 0; x < width; x += 40) {
    ellipse(x, 200, 80, 20);
  }


  fill(238, 214, 175);
  rect(0, 320, width, 80);

  stroke(139, 69, 19);
  strokeWeight(10);
  line(100, 320, 100, 220);

  noStroke();
  fill(34, 139, 34);

  triangle(100, 220, 60, 180, 120, 200);
  triangle(100, 220, 140, 180, 80, 200);
  triangle(100, 220, 70, 200, 130, 210);
  triangle(100, 220, 110, 180, 150, 210);


  fill(255, 69, 0);
  triangle(400, 300, 450, 300, 425, 250);
  stroke(160, 82, 45);
  strokeWeight(4);
  line(425, 300, 425, 330);

  noStroke();
  fill(255, 105, 180);
  rect(360, 340, 120, 30, 5);
}

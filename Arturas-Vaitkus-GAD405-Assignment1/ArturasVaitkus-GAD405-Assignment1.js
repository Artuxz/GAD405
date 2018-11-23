//setup
function setup() {
  createCanvas(500,500); //Specifies the canvas
    background(255,255,255); //Background colors
    frameRate(10); //Frame Rate
}
  //Shape Draw
function draw() {
  customShape();
  //Refresh
  setTimeout(function() {
  location.reload();
}, 15000); //Refresh Time
   }
   //Shape
  function customShape() {
    let size = random(200);
    let x = random(500);
    let y = random(500);
    //Size / Pos
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size,size); //Draws a randomized ellipse
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.8,size*0.8);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.6,size*0.6);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.4,size*0.4);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.2,size*0.2);
  }

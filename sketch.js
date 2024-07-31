function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    stroke("purple")
    fill("black")
    
   //console.log(mouseIsPressed)
   
    if(mouseIsPressed) {circle(mouseX, mouseY, 50, 50);}
  }
    
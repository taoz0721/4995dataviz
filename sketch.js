// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    //outer circle: hour
    fill(255, 255, 240)
    ellipse(400, 300, 800, 600); // Outer white ellipse
    fill(72, 201, 176 );
    arc(400, 300, 800, 600, 3/2*PI, 2*PI*(hr%12)/12+3/2*PI);
    fill(225);
    ellipse(400, 300, 600, 400);
    
    let y = map(min, 0, 59, 0, 200);
    let x = map(sec, 0, 59, 0, 300*(59-min)/59);
    //lower triangle of the hourglass
    fill(163, 228, 215);
    triangle(100, 500, 700, 500, 400, 300);
    //upper triangle of the hourglass
    fill(255, 255, 240);
    triangle(100, 100, 700, 100, 400, 300);
    //full part of the upper triangle
    fill('rgba(163, 228, 215, 0.25)');
    triangle(400-300*(59-min)/59, 100+y, 400+300*(59-min)/59, 100+y, 400, 300);
    //empty part on lower triangle
    fill(255, 255, 240);
    triangle(400-300*(59-min)/59, 500-y, 400+300*(59-min)/59, 500-y, 400, 300);
    //falling sand
    fill('rgba(163, 228, 215, 0.25)');
    triangle(400-x, 500-y, 400+x, 500-y, 400, 300);
    if (sec == 0) {
      console.log(min);
    }
}
function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight + 700;
    createCanvas(w, h);
    noLoop();
    noStroke();
}

function draw() {
    background(255, 255, 255);
    fill(200, 200, 200);

    //size of cell
    var size = 25
    // distance between squares
    var margin = 40;
    //distance outside sqaures
    var oMargin = 10;
    //grid width and height outside sqaures
    var gridwidtha = 4;
    var gridwidthb =  6;
    var gridheighta = 27;
    var gridheightb = 17;


    // two for loops are needed to make a grid of squares
    // the outer loop controls how many rows are made
    // the inner loop controls how many columns are made

    //this is the top horizontal grid (threadling)
    for (let y = 0; y < gridwidtha; y++) {
        for (let x = 0; x < gridheighta; x++) {
            rect(x * margin + oMargin, y * margin + oMargin, size, size);
            if (Math.random() > .45) {
                fill(217, 217, 217);

            }
            else{
                fill(0, 0, 0);
                //define stroke
            }

        }
    }

    //this is the side vertical grid (treadling)
    for (let y = 0; y < gridheightb; y++) {
        for (let x = 0; x < gridwidtha; x++) {
            rect(x * margin + oMargin + 1100, y * margin + oMargin + 175, size, size);
            if (Math.random() > .25) {
                fill(217, 217, 217);
            }
            else {
                fill(0, 0, 0);
            }
        }
    }
    //this is the small top box (tie up)
    for (let y = 0; y < gridwidtha; y++){
        for (let x = 0; x < gridwidthb; x++){
            rect(x * margin + oMargin + 1100, y * margin + oMargin, size, size);
            if (Math.random() > .3){
                fill(217, 217, 217);

            }else {
                fill(0, 0, 0);
            }
            
        }
    }

    //this is the large left box (weave pattern)
    for (let y = 0; y < gridheightb; y++){
        for (let x = 0; x < gridheighta; x++){
            fill(217, 217, 217)
            rect(x * margin + oMargin, y * margin + oMargin + 175, size, size);
        }

    }

//draw function end
} 








function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight + 500;
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
    var gridwidth = 4;
    var gridheight = 27;


    // two for loops are needed to make a grid of squares
    // the outer loop controls how many rows are made
    // the inner loop controls how many columns are made


    for (let y = 0; y < gridwidth; y++) {
        for (let x = 0; x < gridheight; x++) {
            rect(x * margin + oMargin, y * margin + oMargin, size, size);
            if (Math.random() > .45) {
                fill(217, 217, 217);

            }
            else{
                fill(0, 0, 0);
                //define stroke
            }
            console.log(`Top grid has ` + rect.length);

        }
    }



 

//draw function end
} 








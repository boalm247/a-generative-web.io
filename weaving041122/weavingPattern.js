let topSquares = [];
let rightSquares = [];
let tieUp = [];
let pattern = [];

function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight + 500;
    createCanvas(w, h);
    noLoop();
    noStroke();
    topSquares.push();
    rightSquares.push();
    tieUp.push();
    pattern.push();
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
    var gridwidthb = 6;
    var gridheighta = 27;
    var gridheightb = 17;




    // two for loops are needed to make a grid of squares
    // the outer loop controls how many rows are made
    // the inner loop controls how many columns are made

    //this is the top horizontal grid (threadling)
    for (let y = 0; y < gridwidtha; y++) {
        for (let x = 0; x < gridheighta; x++) {
            topSquares.push();
            console.log(topSquares.length);
            rect(x * margin + oMargin, y * margin + oMargin, size, size);
            if (Math.random() > .45) {
                fill(217, 217, 217);

            }
            else {
                fill(0, 0, 0);
                //define stroke
            }
            

        }
    }

    //this is the side vertical grid (treadling)
    for (let y = 0; y < gridheightb; y++) {
        for (let x = 0; x < gridwidthb; x++) {
            rect(x * margin + oMargin + 1100, y * margin + oMargin + 175, size, size);
            rightSquares.push();
            console.log(rightSquares.length);
            // for (let i = 0; i < rightSquares.length; i ++){
            //     fill(0,0,0);
            // }
            // let i = rightSquares.filter((element, index) => {
            //     return index % 2 === 0;
            // })
            // for (i = 0; rightSquares[i]; i++){
            //     fill(0,0,0);
            //}
            
            if (Math.random() > .25) {
                fill(217, 217, 217);
            }
            else {
                fill(0, 0, 0);
            }
            
        }
    }
    //this is the small top box (tie up)
    for (let y = 0; y < gridwidtha; y++) {
        for (let x = 0; x < gridwidthb; x++) {
            rect(x * margin + oMargin + 1100, y * margin + oMargin, size, size);
            tieUp.push();
            console.log(tieUp.length);
            if (Math.random() > .25) {
                fill(217, 217, 217);

            } else {
                fill(0, 0, 0);
            }
            

        }
    }

    //this is the large left box (weave pattern)
    for (let y = 0; y < gridheightb; y++) {
        for (let x = 0; x < gridheighta; x++) {
            pattern.push();
            console.log(pattern.length);
            fill(217, 217, 217)
            rect(x * margin + oMargin, y * margin + oMargin + 175, size, size);
            
        }

    }

//draw function end
}








//Code was referenced from Lauren Nishizaki
// Her weaving pattern generator can be found at www.laurennishizaki.com

let topSquares = [];
let rightSquares = [];
let tieUp = [];
let pattern = [];

function setup() {
    let w = window.innerWidth;
    let h = window.innerHeight + 400;
    createCanvas(w, h);
    noLoop();
    noStroke();

    

    topSquares.push();
    rightSquares.push();
    tieUp.push();
    pattern.push();
    
    
}



function draw() {
    //background(255, 255, 255);
    background(220, 216, 220);
    fill(255);


    

    //size of cell
    var size = 25
    // distance between squares
    var margin = 40;
    //distance outside sqaures
    var xMargin = 210;
    var yMargin = 60;
    //grid width and height outside sqaures
    var gridwidth = 4;
    var gridheighta = 20;
    var gridheightb = 20;




    // two for loops are needed to make a grid of squares
    // the outer loop controls how many rows are made
    // the inner loop controls how many columns are made


    // ability to choose specific squares to fill
    // create pattern from random (randomize the repeat every 4-15 for threadling [divisible by 120] and every 4 for treadling)

    //this is the top horizontal grid (threading)
    for (let x = 0; x < gridheighta; x++) {
        for (let y = 0; y < gridwidth; y++) {

        
            //if ( x% 4 === 0){

            var randomX = Math.floor(Math.floor(Math.random() * 4));
            //console.log(randomX);
            
            //for (let z=0; z<4; z++){
                //console.log(z, randomX, x);

                rect(x * margin + xMargin, y * margin + yMargin, size, size);

                // if (y == randomX) {
                //     fill(0, 0, 0);

                // }
                // else {
                // fill(255);
                // }
                // if (z === randomX){
                //     fill (0);
                //     //console.log(z,randomX,x);
                // }else {
                //     fill (255);
                // }

                for (let y = randomX; y < 4; y +=4){
                if (y === randomX) {
                    fill(0, 0, 0);

                }
                else {
                    fill(255);
                }
            }

            }
            //     for (let y = randomX; y < 4; y += 4) {

            
            // }


            //}

            //topSquares.push();
            //console.log(topSquares.length);

            // let threadingPattern = Array(gridheighta).fill(0)
            //     .map((z,i)=> ((i < (gridheighta/4) || ((i>= gridheighta*2/4)) && i < (gridheighta*3/4)))
            //                     ? i
            //                     : (gridheighta+gridwidth/2-1-i) % gridwidth);

            //console.log(randomX, x);

            //for (let y = randomX; y < 4; y +=4){
                // if (y == randomX) {
                //     fill(0, 0, 0);

                // }
                // else {
                //     fill(255);
                // }
            //}
            

        
    }
    

    //this is the side vertical grid (treadling)
    for (let x = 0; x < gridwidth; x++) {
        for (let y = 0; y < gridheightb; y++) {
        
            var randomR = 0;
            randomR = Math.floor(Math.floor(Math.random() * 4));

            rect(x * margin + xMargin + 815, y * margin + yMargin + 175, size, size);
            rightSquares.push();

            if (x == randomR){
                fill(0);
            }
            else {
                fill (255);
            }


        }
    }

    


    //this is the small top box (tie up)
    tieUp = [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]];


    for (let x = 0; x < gridwidth; x++) {
        for (let y = 0; y < gridwidth; y++) {
            //console.log(x,y);
            console.log(tieUp[x][y], x, y);
            rect(x * margin + xMargin + 815, y * margin + yMargin, size, size);
            //tieUp.push();
            //console.log(tieUp.length);

            //tieUp = [[0,0,0,1],[0,0,1,0],[0,1,0,0],[1,0,0,0]];
            //let i = tieUp.indexOf();
            //console.log(i);

            if (tieUp[x][y] === 1) {
                fill(0);
                //console.log(tieUp[y][x], x, y);


            } else {
                fill(255);
            }
            

        }
    }

    //this is the large left box (weave pattern)
    for (let x = 0; x < gridheighta; x++) {
        for (let y = 0; y < gridheightb; y++) {
            pattern.push();
            //console.log(pattern.length);
            fill(255)
            rect(x * margin + xMargin, y * margin + yMargin + 175, size, size);
            
        }

    }

//draw function end
    // rightArrays(rightSquares,2)
}


// function rightArrays(rGroup, rGroupSize) {
//     var fourArray = [];


    //this is the side vertical grid (treadling)
    // for (let y = 0; y < gridheightb; y++) {
    //     for (let x = 0; x < gridwidth; x++) {
    //         rect(x * margin + xMargin + 980, y * margin + yMargin + 175, size, size);
    //         rightSquares.push();

    //         rGroupSize = 4;
    //         // const rGroup = 0;
    //         for (let i = 0; i < rightSquares.length; i += rGroupSize) {
    //             rGroup = rightSquares.slice(i, i + rGroupSize);

    //             if (rGroup[0]) {
    //                 fill(0);
    //             }
    //             else {
    //                 fill(255);
    //             }
    //         }
            // console.log(rGroup);


            // var randomZ = Math.floor(x * Math.random(0, 3));

            // if (x == Math.random(0, 3)) {
            //     fill(0);
            // }
            // else {
            //     fill(255);
            // }

            //console.log(randomZ);

//         }
//     }

// }
   // console.log(rightArrays(rightSquares,2));





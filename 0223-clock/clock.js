

//targeting html
var clockDiv = document.querySelector('#clock')
// document.body.style.backgroundColor = 'white'


function changeTimex() {
    //date stuff
    var datex = new Date();
    var hoursx = datex.getHours();
    var minutesx = datex.getMinutes();
    var secondsx = datex.getSeconds();

    // creating the text for html
    var clock = hoursx + ':' + minutesx + ':' + secondsx
    }



// changeTimex()

// setInterval(function () {
//     // anything here happens every second
//     changeTimex()
    
// }, 10);



console.log(changeTimex)

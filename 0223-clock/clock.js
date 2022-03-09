
// targeting html
var clockDiv = document.querySelector('.window')
console.log(clockDiv)


function changeTimex() {
    //confusing date stuff that we dont need to memorize
    var datex = new Date();
    var hoursx = datex.getHours();
    var minutesx = datex.getMinutes();
    var secondsx = datex.getSeconds();
    // var hoursx = 13;
    // var minutesx = 48;


    // creating the text for html
    var clock = hoursx + ':' + minutesx + ':' + secondsx;

    //change the inner html and styling
    // clockDiv.innerHTML = clock;
    document.getElementById('clock').innerHTML = clock;
    
    if (hoursx >= 0 && hoursx < 4){
        document.querySelector('.window').style.animationName = 'sky1';

    } else if (hoursx >= 4 && hoursx < 6) {
        document.querySelector('.window').style.animationName = 'sky2';

    } else if (hoursx >= 6 && hoursx < 8) {
        document.querySelector('.window')
        .style.animationName = 'sky3';

    } else if (hoursx >= 8 && hoursx < 12) {
        document.querySelector('.window')
            .style.animationName = 'sky4';
    }


}

changeTimex()
setInterval(function () {
    //anything i put in here happens once every second
    changeTimex()


}, 10)





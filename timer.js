// var time = 0,
//     elapsed = '0.0';

// setInterval(function()
// {
//     time += 100;

//     elapsed = Math.floor(time / 100) / 10;
//     if (Math.round(elapsed) == elapsed) { elapsed += '.0' }    // converts "integer" Number to "float" String
//     console.log(elapsed);

// }, 100);

const now = require("performance-now");

var start = now();
var elapsed = '0.0';

setInterval(function () {
    var time = now() - start;
    console.log(Math.floor(time));
    // elapsed = Math.floor(time / 100) / 10;
    // if (Math.round(elapsed) == elapsed) { elapsed += '.0'; }

    // console.log(elapsed);

}, 100);
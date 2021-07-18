
const now = require("performance-now");

let start = now();
let elapsed = 0;
let time = 0;
let diff = 0;


function instance() {
    time += 1000;

    elapsed = Math.floor(time / 1000);
    // if (Math.round(elapsed) == elapsed) { console.log(elapsed) }

    console.log(elapsed);
    diff = (now() - start) - time;
    console.log(diff);   // correction is never more that 6ms
    setTimeout(instance, (1000 - diff));
}

setTimeout(instance, 1000);
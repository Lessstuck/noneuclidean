const Max = require('max-api');
const track = require('noneuclidean');


Max.addHandler("bang", () => {
    Max.post("play received");
    if (track.play() == 1) {
        Max.outlet('bang');
    };
});

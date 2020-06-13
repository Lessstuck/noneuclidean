const Max = require('max-api');
const track = require('noneuclidean');

// create array of Track objects
const trackCount = 2;
var tracks = [];
for (i = 0; i < trackCount; i++) {
    let newTrack = new track.Track([.33, .33, .33]);
    tracks.push(newTrack);
}


Max.addHandler("bang", () => {
    for (j = 0; j < trackCount; j++) {
        if (tracks[j].play() == 1) {
            Max.outlet(j);
        };
    }
});

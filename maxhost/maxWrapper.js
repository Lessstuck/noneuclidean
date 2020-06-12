const Max = require('max-api');
const track = require('noneuclidean');

// create instruments
class Instrument {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
    play = (name) => {
        hit(path);
    }
}

// instrument data aray of arrays = name, path (note path ../ instead of ./)
instParams = [["kik", '808_Kick_x3.m4a'],
["hh", "808_Closed_HH.m4a"]]

// create arrays of Instrument & Track objects
const trackCount = 2;
var instruments = [];
var tracks = [];
for (i = 0; i < trackCount; i++) {
    let newInstrument = new Instrument(instParams[i][0], instParams[i][1]);
    instruments.push(newInstrument);
    let newTrack = new track.Track(instruments[i].name, [.33, .33, .33]);
    tracks.push(newTrack);
}


Max.addHandler("bang", () => {
    for (j = 0; j < trackCount; j++) {
        if (tracks[j].play() == 1) {
            Max.outlet(instParams[j][1]);
        };
    }
});

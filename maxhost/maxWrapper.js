const maxAPI = require('max-api');
const track = require('../noneuclidean/index.js');

// create instruments - node version includes sound playback
class Instrument {
    constructor(path) {
        this.path = path;
    }
    play = (path) => {
        hit(path);
    }
}

var tracks = [];
var trackCount = 0;
var instruments = [];
var instrumentCount = 0;

// instParams
maxAPI.addHandler("instParams", (...args) => {
    let newInstrument = new Instrument(args);
    instruments.push(newInstrument);
    instrumentCount++;
});

beatProb = [];

const handlers = {
    [maxAPI.MESSAGE_TYPES.BANG]: () => {
        if (tracks.length < 1) {
            console.log('no tracks created');
            return;
        }
        else {
            for (j = 0; j < trackCount; j++) {
                if (tracks[j].play() == 1) {
                    maxAPI.outlet(j);
                };
            }
        }
    },
    [maxAPI.MESSAGE_TYPES.LIST]: (...args) => {
            let newTrack = new track.Track(args);
            tracks.push(newTrack);
            trackCount++;
        // }    
    }

};

maxAPI.addHandlers(handlers);

maxAPI.addHandler("clear", () => {
    tracks.length = 0;
    instruments.length = 0;
});
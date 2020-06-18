const maxAPI = require('max-api');
const track = require('../noneuclidean/index.js');

var tracks = [];
var trackCount = 0;

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
            newTrack.play();
            tracks.push(newTrack);
            trackCount++;

        // }    
    }

};

maxAPI.addHandlers(handlers);

maxAPI.addHandler("clear", () => {
    tracks.length = 0;
});
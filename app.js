const track = require('./noneuclidean/index.js');
const player = require('node-wav-player');

// create instruments
class Instrument    {
    constructor(path) {
        this.path = path;
    }
    play = (path) => {
        hit(path);
    }
}

// instrument data aray of arrays = path
instParams = 
['./snd/808_Clap.m4a',
'./snd/808_Closed_HH.m4a',
'./snd/808_Kick_x3.m4a',
'./snd/808_Snare_1.m4a']

// create arrays of Instrument & Track objects
const trackCount = instParams.length;
var instruments = [];
var tracks = [];
for (i = 0; i < trackCount; i++)    {
    let newInstrument = new Instrument(instParams[i]);
    instruments.push(newInstrument);
    let newTrack = new track.Track([.33, .33, .33]);
    tracks.push(newTrack);
}

// generate pulse, call noneucledean Track.play method, and play instrument
const beat = () => {
    setInterval(() => {
        for (j = 0; j < trackCount; j++)    {
            if (tracks[j].play() == 1) {
                hit(instruments[j].path);
            };
        }
    }, 250);
}
 
// play sound
const hit = (path) => {
    player.play({
        path: path,
    }).then(() => {
    }).catch((error) => {
        console.error(error);
    });
}

// turn on pulse-generating beat
beat();
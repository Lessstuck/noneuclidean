const track = require('./noneuclidean/index.js');
const player = require('node-wav-player');

// create instruments
class Instrument    {
    constructor(name, path) {
        this.name = name;
        this.path = path;
    }
    play = (name) => {
        hit(path);
    }
}

// crete arrays of Instrument & Track objects
const trackCount = 2;
var instruments = [];
var tracks = [];
for (i = 0; i < trackCount; i++)    {
    let newInstrument = new Instrument('kik', './snd/808_Kick_x3.m4a');
    instruments.push(newInstrument);
    let newTrack = new track.Track();
    tracks.push(newTrack);
}

// generate pulse and call noneucledean Track.play method
const beat = () => {
    setInterval(() => {
        for (j = 0; j < trackCount; j++)    {
            if (tracks[j].play() == 1) {
                hit('./snd/808_Kick_x3.m4a');
            };
        }
    }, 250);
}
 
// play sound
const hit = (path) => {
    player.play({
        path: path,
    }).then(() => {
        // console.log('play start.');
    }).catch((error) => {
        console.error(error);
    });
}

// turn on pulse-generating beat
beat();
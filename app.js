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

// instrument data aray of arrays = name, path
instParams = [["kik", './snd/808_Kick_x3.m4a'],
    ["hh", "./snd/808_Closed_HH.m4a"]]

// create arrays of Instrument & Track objects
const trackCount = 2;
var instruments = [];
var tracks = [];
for (i = 0; i < trackCount; i++)    {
    let newInstrument = new Instrument(instParams[i][0], instParams[i][1]);
    instruments.push(newInstrument);
    let newTrack = new track.Track(instruments[i].name, [.33, .33, .33]);
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
        // console.log('play start.');
    }).catch((error) => {
        console.error(error);
    });
}

// turn on pulse-generating beat
beat();
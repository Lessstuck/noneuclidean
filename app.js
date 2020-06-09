const track = require('./noneuclidean/index.js');
const player = require('node-wav-player');

var track1 = new track.Track();
var track2 = new track.Track();

// generate pulse and call noneucledean hit method
const beat = () => {
    setInterval(() => {
        if (track1.play() == 1) {
            hit('./snd/808_Kick_x3.m4a');
        };
        if (track2.play() == 1) {
            hit('./snd/808_Closed_HH.m4a');
        };
    }, 500);
}

// play sound
const hit = (path) => {
    player.play({
        path: path,
    }).then(() => {
        console.log('play start.');
    }).catch((error) => {
        console.error(error);
    });
}

// turn on pulse-generating beat
beat();
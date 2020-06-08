const track = require('./noneuclidean/index.js');
const player = require('node-wav-player');

var track1 = new track.Track();
var track2 = new track.Track();

// generate pulse and call noneucledean hit method
const beat = () => {
    setInterval(() => {
        // let playit = track1.play();
        // if (playit == 1) {
            hit();
        // };
    }, 500);
}

// play sound
const hit = () => {
    player.play({
        path: './snd/808_Closed_HH.m4a',
    }).then(() => {
        console.log('play start.');
    }).catch((error) => {
        console.error(error);
    });
}

// turn on pulse-generating beat
beat();
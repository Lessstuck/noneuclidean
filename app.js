const track = require('./noneuclidean/index.js');
const player = require('node-wav-player');

// crete array of Track objects
const trackCount = 2;
var tracks = [];
for (i = 0; i < trackCount; i++)    {
let newTrack = new track.Track();
tracks.push(newTrack);
}

// generate pulse and call noneucledean hit method
const beat = () => {
    setInterval(() => {
        if (tracks[0].play() == 1) {
            hit('./snd/808_Kick_x3.m4a');
        };
        if (tracks[1].play() == 1) {
            hit('./snd/808_Closed_HH.m4a');
        };
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
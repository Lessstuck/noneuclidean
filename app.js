const beat = require('./noneuclidean/index.js');
const player = require('node-wav-player');

const hit = () => {
    player.play({
        path: './snd/808_Closed_HH.m4a',
    }).then(() => {
        console.log('The wav file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
}

exports.hit = hit;
beat.beat();
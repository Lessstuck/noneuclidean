const play = require('./noneuclidean/index.js');
const player = require('node-wav-player');

const beat = () => {
    setInterval(() => {
        let playit = play.play();
        if (playit == 1) {
            hit();
        };
    }, 500);
}

const hit = () => {
    player.play({
        path: './snd/808_Closed_HH.m4a',
    }).then(() => {
        console.log('The wav file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
}


beat();
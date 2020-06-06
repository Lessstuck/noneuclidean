const beat = require('./noneuclidean/index.js');
// const {Howl, Howler} = require('howler')
const player = require('node-wav-player');


player.play({
    path: './snd/808_Closed_HH.m4a',
}).then(() => {
    console.log('The wav file started to be played successfully.');
}).catch((error) => {
    console.error(error);
});

// var sound = new Howl({
//     src: ['./snd/808_Closed_HH.m4a']
// });
// sound.play();

beat.beat();
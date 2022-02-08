import {Track} from "./build/noneuclidean.es.js"
import player from "sound-play";

function now() {
  return process.hrtime()[0];
}

console.log(process.platform);

// create instruments
class Instrument {
  constructor(path) {
    this.path = path;
  }
  play = (path) => {
    hit(path);
  };
}

// instrument data aray of arrays = path
let instParams = [
  "./snd/808_Clap.m4a",
  "./snd/808_Closed_HH.m4a",
  "./snd/808_Kick_x3.m4a",
  "./snd/808_Snare_1.m4a",
];

// create arrays of Instrument & Track objects
const trackCount = instParams.length;
var instruments = [];
var tracks = [];
for (let i = 0; i < trackCount; i++) {
  let newInstrument = new Instrument(instParams[i]);
  instruments.push(newInstrument);
  let newTrack = new Track([0.33, 0.33, 0.33]);
  newTrack.play();
  tracks.push(newTrack);
}

// generate pulse, call noneucledean Track.play method, and play instrument
let start = now();
let elapsed = 0;
let time = 0;
let diff = 0;

const beat = () => {
  function instance() {
    time += 125;
    for (let j = 0; j < trackCount; j++) {
      if (tracks[j].play() == 1) {
        player.play(instruments[j].path);

      }
    }
    diff = now() - start - time;
    setTimeout(instance, 125 - diff);
  }
  setTimeout(instance, 125);
};

// play sound
// const hit = (path) => {
//   player
//     .play({
//       path: path,
//     })
//     .then(() => {})
//     .catch((error) => {
//       console.error(error);
//     });
// };

// turn on pulse-generating beat
beat();

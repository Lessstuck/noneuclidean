const Scene = require('Scene');
const Time = require('Time')
const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const AudioObject = require("sparkar-audio-object");
const TouchGestures = require('TouchGestures');
const { clearInterval } = require('Time');
const timeInterval = 250;

// Copied from npm module "noneuclidean" without the exports  :(
let count = Math.random(5);
function Track(beatProb) {
    this.beatProb = [.33, .33, .33];
    this.beatCount = 0;
    this.maxBeats = 0;
    this.play = function () {
        // find new maxBeats at end of count    
        if (this.beatCount == this.maxBeats) {
            let coinToss = Math.random();
            let beatProbAccum = 0.;
            var maxCount = this.beatProb.length;
            var m = 0;
            for (m = 0; m < maxCount; m++) {
                beatProbAccum = beatProbAccum + this.beatProb[m]
                if (coinToss < beatProbAccum) {
                    this.maxBeats = m + 1 // lengths 1, 2, 3
                    this.beatCount = 0;
                    return 0;
                }
            }
        }
        // play sound on first count
        else if (this.beatCount == 0) {
            this.beatCount++;
            return 1;
        }
        // just count
        else {
            this.beatCount++;
        }
    }
}
// end of module copy

// instrument data aray of arrays = player_controllers
const instParams =
    [['player_controller_1', 'player_speaker_1'],
    ['player_controller_2', 'player_speaker_2'],
    ['player_controller_3', 'player_speaker_3'],
    ['player_controller_4', 'player_speaker_4']];

// create arrays of Instrument & Track objects
const trackCount = instParams.length;
var instruments = [];
var tracks = [];
for (i = 0; i < trackCount; i++) {
    let newTrack = new Track([.33, .33, .33]);
    newTrack.play();
    tracks.push(newTrack);
};

// audio setup
var players = [];
for (i = 0; i < trackCount; i++) {
    let newPlayer = AudioObject.new({
        speakerName: instParams[i][1],
        controllerName: instParams[i][0],
    });
    players.push(newPlayer);
    players[i].volume = 1.;
}

var playState = false;
var idInterval = null;
Time.setInterval(playTap, timeInterval);

Promise.all([
Scene.root.findFirst('SphereObject')
]).then(function (objects) {
    TouchGestures.onTap().subscribe(function (event) {
        playState = !playState;
    }
)});       

function playTap() {
    if (playState) {
        for (j = 0; j < trackCount; j++) {
            if (tracks[j].play() == 1) {
                players[j].play();
            };
        };
    }
};


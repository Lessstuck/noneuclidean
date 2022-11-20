import { Track } from "./modules/noneuclidean.mjs";

// create array of tracks
const trackCount = 4;
var tracks = [];
for (var i = 0; i < trackCount; i++)    {
    let newTrack = new Track([.25, .25, .25, .25]);
    newTrack.play();
    tracks.push(newTrack);
}

// play sounds if play() == 1
function play_sounds()  {
    if (tracks[0].play() == 1) {
        play_sound1();
    };
    if (tracks[1].play() == 1) {
        play_sound2();
    };
    if (tracks[2].play() == 1) {
        play_sound3();
    };
    if (tracks[3].play() == 1) {
        play_sound4();
    };
};

// call play() method on audio element
function play_sound1()  {
    document.getElementById('sound1').play();
};
function play_sound2() {
    document.getElementById('sound2').play();
};
function play_sound3() {
    document.getElementById('sound3').play();
};
function play_sound4() {
    document.getElementById('sound4').play();
};

// toggle button to start/stop rhythm
var onoff = false;
document.getElementById("startStopButton").onclick = () => {
    onoff = !onoff;
    beat(onoff);
};

// pulse
var beatId = null;
function beat(onoff)  {
    if (onoff == true) {
        beatId = setInterval(play_sounds, 125);
    }
    else {
        clearInterval(beatId);
    };
};

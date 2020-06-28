# noneuclidean
#### Multiplatform (Node.js, SparkAR, MaxMSP, browser) module for pure polyrhythmic ("noneuclidean") timing of events

<details>
  <summary>Click to expand!</summary>
  
Most of the world’s music is constructed on repeated patterns, typically between 2 and 40 seconds long. These are subdivided into smaller patterns among several voices to create rhythmic structures. In some cases, notably West African traditional music, the resulting syncopation is so complex that it’s impossible to determine which beat is the beginning of the pattern. But it does repeat. Western pop music drum machine programming in the early 2000’s produced an algorithmic style called “Euclidean Rhythm”. This is typically based on a contant pulse, with every subrhythm consisting of an even number of pulses. However, even with the all thr complexity of multiple tracks of unusual ratios, the pattern still repeats.

I have long used algorithmic rhythms in which there is no repeating overall pattern. This works well with dancers, who often disregard composed rhythmic patterns, preferring to count their own phrasing on top of the pulse. To contrast my approach with Euclidean Rhythm, I playfully call my algorithm "non-Euclidean".

The JavaScript module “noneuclidean.js” implements one object, "Track", which has a method “play”. To instantiate a new Track, one includes an argument with is an array of probabilities whose sum is 1. The play method uses a random function to select one element of the array, based on its relative probability. If the 0th element of the array is chosen, the number of beats is 1; if the first element is chosen, then play counts 2 beats, etc. Each time play() is called a beat is counted, and when the count reaches the chosen beat number, a new number is randomly selected. Each time play() is called it returns 0, unless a new beat count has started,  in which case play() returns 1.

By instantiating multiple tracks, polyrhythms are created. Since each track is calling its own play method and storing its own internal state, the tracks rarely start on the same beat. Thus there is no overall repeating pattern.

This repository includes 4 use cases of the module. Each case provides a method to create multiple tracks and call the play method. For each track, if play() returns 1, the caller will play a sound. In the first 2 cases, node.js and MaxMSP’s hosting of node.js, the noneucliden module is installed using the [published version](https://www.npmjs.com/package/noneuclidean). The html version uses native JavaScript modules, which requires adding "export" at the beginning of the code and deleting the “exports.” from the end of the code in order to convert noneuclidean.js to noneuclidean.mjs. The Spark AR Studio version does not allow importing modules, so the module code must be pasted into the main script, again with the exports deleted.

For the sake of simplicity, all demos use a pulse scheduler (setInterval) to call play(), which then calls a sound player when the track's play() returns 1. Since JavaScript is single-threaded, this results in timing issues. Ideally, one would use track.play() to decide in advance which tracks play, and the exact timing would be independent of the noneuclidean.js execution time.
</details>

### Use with Node.js

<details>
  <summary>Click to expand!</summary>
    
In your terminal, install noneuclidean module and your choice of sound player:

    npm install noneuclidean;
    npm install node-wav-player;

In your node app:

    const track = require('noneuclidean');
    const player = require('node-wav-player');
    
A track takes one parameter, "beatProb", an array of the relative probability (0.0 - 1.0) that a beat count (index + 1) will be chosen.

Define instruments:

    class Instrument    {
        constructor(path) {
            this.path = path;
        }
        play = () => {
            hit(path);
        }
    }
    
"path" is the relative path to a sound file to play.

"hit" is a function to play the sound:

    const hit = (path) => {
        player.play({
            path: path,
        }).then(() => {
            // console.log('play start.');
        }).catch((error) => {
            console.error(error);
        });
    }

• Create an array of instrument parameters:

    instParams = 
    ['./snd/808_Clap.m4a',
    './snd/808_Closed_HH.m4a',
    './snd/808_Kick_x3.m4a',
    './snd/808_Snare_1.m4a']  
    
• Create arrays of Instrument & Track objects:

    const trackCount = 2;
    var instruments = [];
    var tracks = [];
    for (i = 0; i < trackCount; i++)    {
        let newInstrument = new Instrument(instParams[i][0]);
        instruments.push(newInstrument);
        let newTrack = new track.Track([.33, .33, .33]);
        newTrack.play();   // side effect sets initial track count length without generating note
        tracks.push(newTrack);
    }
    
• Define "beat" to generate pulse, call noneucledean Track.play method, and play instrument:

    const beat = () => {
        setInterval(() => {
            for (j = 0; j < trackCount; j++)    {
                if (tracks[j].play() == 1) {
                    hit(instruments[j].path);
                };
            }
        }, 250);
    }

Finally:

    beat();
</details>

### Use with Max’s node.script object
    
Open patch [maxHost.maxpat](maxhost/). The node.script object loads maxWrapper.js, which requires noneuclidean. 
 
Turn on audio, metronome, and "start script". Send beatProb list messages to create tracks, bangs to increment pulse. This way of using Node offloads timing and audio playback to MaxMSP, which can be further optimized.
### Use with Spark AR

Unfortunately, Spark AR Studio does not support importing JS modules. So I pasted the contents of noneuclidean.js into the [noneuclidean.arproj](spark/) script. Although this is bad practice, it works. Send it to the SparkAR app on your phone, and tap a floor target to start and stop the beat.

### Use in a browser

[This](https://lessstuck.github.io/noneuclidean/) is meant to be the simplest example of using noneuclidean in a web page. For simplicity’s sake, I use plain-vanilla html5 audio playback and native JavaScript modules. In a future version, I would like to use Date() to lock the timing to the client’s clock.

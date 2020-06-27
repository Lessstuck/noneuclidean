# noneuclidean
#### Multiplatform (Node.js, SparkAR, MaxMSP (node.script)) module for pure polyrhythmic ("noneuclidean") timing of events

Most of the world’s music is constructed on repeated rhythmic patterns, typically between 2 and 40 seconds long. These are subdivided into smaller patterns to create rhythm. A recent approach to this structure evolved from drum machine programming in the early 2000’s. The so-called Euclidean Rhythms are typically based on a contant pulse, with every subrhythm consisting of an even number of pulses. However, even with the possible complexity of multiple tracks of unusual ratios, the pattern still repeats.

My "non-Euclidean rhythm" has nothing to do with parallel lines meeting; it's an extension of Euclidean Rhythm, but each track’s patterns change each beat, and the overall patter never repeats.

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
 
Turn on audio and metronome. Send beatProb list messages to create tracks, bangs to increment pulse. This way of using Node offloads timing and audio playback to MaxMSP, which is optmized for that.

### Use with Spark AR

Unfortunately, Spark AR Studio does not support importing JS modules. So I pasted the contents of noneuclidean.js into the [noneuclidean.arproj](spark/) script. Sad.  It works, though! Send it to SparkAR on your phone, and tap a floor target to start and stop the beat.

### Use in a browser

[This](https://lessstuck.github.io/noneuclidean/) is meant to be the simplest example of using noneuclidean in a web page. 

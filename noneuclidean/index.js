let count = Math.random(5);

class Track {
    constructor() {
        this.name = "name";
        this.beatProb = [.33, .33, .33];
        this.beatCount = 0;
        this.maxBeats = 3;
    }
    play = () => {
        console.log("beat count: " + this.beatCount);
        if (this.beatCount == 0) {
            // play sound
            this.beatCount++;
            return 1;
        }
        else if (this.beatCount == this.maxBeats) {
            // find new maxBeats
            let coinToss = Math.random();
            let beatProbAccum = 0.;
            var i;
            for (i = 0; i < this.beatProb.length; i++)    {
                beatProbAccum = beatProbAccum + this.beatProb[i]
                if (coinToss < beatProbAccum) {
                    this.maxBeats = i + 1 // lengths 1, 2, 3 – convert to dict?
                    this.beatCount = 0;

                    return 0; 
                }
            }
        }
        else {
            this.beatCount++; 
        }
    }
}

exports.Track = Track;
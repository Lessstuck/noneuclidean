let count = Math.random(5);

class Track {
    constructor(name, beatProb) {
        this.name = name;
        this.beatProb = beatProb;
        this.beatCount = 0;
        this.maxBeats = 3;
    }
    play = () => {
        // play sound on first count
        if (this.beatCount == 0) {
            this.beatCount++;
            return 1;
        }
        // find new maxBeats at end of count
        else if (this.beatCount == this.maxBeats) {
            let coinToss = Math.random();
            let beatProbAccum = 0.;
            for (i = 0; i < this.beatProb.length; i++)    {
                beatProbAccum = beatProbAccum + this.beatProb[i]
                if (coinToss < beatProbAccum) {
                    this.maxBeats = i + 1 // lengths 1, 2, 3 – convert to dict?
                    this.beatCount = 0;

                    return 0; 
                }
            }
        }
        // just count
        else {
            this.beatCount++; 
        }
    }
}

exports.Track = Track;
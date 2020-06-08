let count = Math.random(5);

class Track {
    constructor() {
        this.name = "name";
        this.beatProb = [.33, .33, .33];
        this.beatCount = 0;
        this.maxBeats = 3;
    }
    play = () => {
        if (beatCount == 0) {
            // play sound
            beatCount++;
            return 1;
        }
        else if (beatCount == maxBeats) {
            // find new maxBeats
            coinToss = Math.random();
            beatProbAccum = 0.;
            for (i = 0; i < this.beatProb.length(); i++)    {
                beatProbAccum = beatProbAccum + this.beatProb[i]
                if (coinToss < beatProbAccum) {
                    maxBeats = i + 1 // lengths 1, 2, 3 – convert to dict?
                    this.beatCount = 0;

                    return 0; 
                }
            }
        }
        else {
            beatCount++; 
        }
    }
}

const track1 = new Track("hh");

exports.Track = Track;
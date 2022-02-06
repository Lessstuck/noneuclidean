function Track (beatProb = [.33, .33, .33]) {
        this.beatProb = beatProb;
        this.beatCount = 0;
        this.maxBeats = 0;
    }    Time.prototype.play = () => {
        // find new maxBeats at end of count
        if (undefined.beatCount == undefined.maxBeats) {
            let coinToss = Math.random();
            let beatProbAccum = 0.;
            var maxCount = undefined.beatProb.length;
            var m = 0;
            for (m = 0; m < maxCount; m++)    {
                beatProbAccum = beatProbAccum + undefined.beatProb[m];
                if (coinToss < beatProbAccum) {
                    undefined.maxBeats = m + 1; // lengths 1, 2, 3
                    undefined.beatCount = 0;
                    return 0; 
                }
            }
        }
        // play sound on first count
        else if (undefined.beatCount == 0) {
            undefined.beatCount++;
            return 1;
        }
        // just count
        else {
            undefined.beatCount++; 
        }
    };

export { Track as default };

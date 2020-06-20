function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let count = Math.random(5);

class Track {
  constructor(beatProb = [.33, .33, .33]) {
    _defineProperty(this, "play", () => {
      // find new maxBeats at end of count
      if (this.beatCount == this.maxBeats) {
        let coinToss = Math.random();
        let beatProbAccum = 0.;
        var maxCount = this.beatProb.length;
        var m = 0;

        for (m = 0; m < maxCount; m++) {
          beatProbAccum = beatProbAccum + this.beatProb[m];

          if (coinToss < beatProbAccum) {
            this.maxBeats = m + 1; // lengths 1, 2, 3

            this.beatCount = 0;
            return 0;
          }
        }
      } // play sound on first count
      else if (this.beatCount == 0) {
          this.beatCount++;
          return 1;
        } // just count
        else {
            this.beatCount++;
          }
    });

    this.beatProb = beatProb;
    this.beatCount = 0;
    this.maxBeats = 0;
  }

}

exports.Track = Track;

export function Track(beatProb = [0.33, 0.33, 0.33]) {
  this.beatProb = beatProb;
  this.beatCount = 0;
  this.maxBeats = 0;
  // normalize beatProb
  const initialValue = 0;
  const beatProbSum = beatProb.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const beatProbNorm = beatProb.map((x) => x / beatProbSum);

  this.play = () => {
    // find new maxBeats at end of count
    if (this.beatCount == this.maxBeats) {
      let coinToss = Math.random();
      let beatProbAccum = 0;
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
  };
}

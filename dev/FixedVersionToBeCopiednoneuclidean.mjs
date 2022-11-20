class Track {
  constructor(beatProb = [0.33, 0.33, 0.33]) {
    this.beatProb = beatProb;
    this.beatCount = 0;
    this.maxBeats = 0;      // length of this phrase
    // normalize beatProb
    const initialValue = 0;
    const beatProbSum = this.beatProb.reduce(
      (previousValue, currentValue) => previousValue + currentValue, initialValue
    );
    this.beatProbNorm = this.beatProb.map(x => x/beatProbSum);
    // starting beat count
      let coinToss = Math.random();
      let beatProbNormAccum = this.beatProbNorm[0];
      let maxCount = this.beatProbNorm.length;
      for (let m = 0; m < maxCount; m++) {
        if (coinToss <= beatProbNormAccum) {
          this.maxBeats = m + 1; // new phrase length (lengths 1, 2, 3, … )
          this.beatCount = 0;
          break;
        };
        beatProbNormAccum = beatProbNormAccum + this.beatProbNorm[m + 1];
      }  
  }
  play = () => {
    let playIt;
    if (this.beatCount == 0) {  // if at beginning of phrase, play it
      playIt = 1;
    } else  {
      playIt = 0;
    };
    if (this.beatCount == this.maxBeats) {  // if at the end of a phrase, pick a new one
      let coinToss = Math.random();
      let beatProbNormAccum = this.beatProbNorm[0];
      let maxCount = this.beatProbNorm.length;
      for (let m = 0; m < maxCount; m++) {
        if (coinToss <= beatProbNormAccum) {
          this.maxBeats = m + 1; // new phrase length (lengths 1, 2, 3, … )
          this.beatCount = 0;
          break;
        };
        beatProbNormAccum = beatProbNormAccum + this.beatProbNorm[m + 1];
      };  
    } else {
    this.beatCount++;
    };
  return playIt;
  };
}
export { Track };

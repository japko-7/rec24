function MaxtLetterRepeatCount(word: string) {
  const chars = word.split('');

  const counts = chars.reduce(
    (acc: {[index: string]: number}, char: string) => {
      acc[char] = char in acc ? acc[char] + 1 : 0;
      return acc;
    }, {  }
  );

  return Math.max(...Object.values(counts));
}

function SearchingChallenge(str: string) { 

  const words = str.split(' ');

  let maxRepeats = 0;
  let maxRepeatsWord = words[0];

  for (let i = 0; i < words.length; i++) {
    const wordRepeats = MaxtLetterRepeatCount(words[i]);

    if( wordRepeats > maxRepeats ) {
      maxRepeats = wordRepeats;
      maxRepeatsWord = words[i];
    }
  }

  return maxRepeats === 0 ? -1 : maxRepeatsWord; 

}
   
// keep this function call here 
// @ts-ignore
console.log(SearchingChallenge(readline()));

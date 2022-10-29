// const mass1 = 100; //ml
// const mass2 = 100; //ml
// const mass3 = 100; //ml
// const mass4 = 100; //ml
// const mass5 = 100; //ml

const volumeArr = [100, 100];

// const strength1 = 40; //%
// const strength2 = 40; //%
// const strength3 = 40; //%
// const strength4 = 40; //%
// const strength5 = 40; //%

const strengthArr = [40, 20];

// const coctailsArr = [
//   { strength: 40, volume: 100 },
//   { strength: 40, volume: 100 },
// ];

const alcoholVolume = volumeArr.reduce(
  (prev, curr, currIdx) => (prev + curr * strengthArr[currIdx])
  , 0
);

const volume = volumeArr.reduce((prev, curr) => (prev + curr), 0);

const strength = alcoholVolume / volume;

console.log(`strength: ${strength}%`);

//https://studfile.net/preview/8852847/page:9/
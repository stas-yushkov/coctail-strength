const coctailsArr = [
  { name: 'віскі', weight: 90, strength: 40 },
  { name: 'вермут', weight: 30, strength: 16 },
];

const strengthInputOne = document.querySelector('input.JS-strength-input-1');
const strengthLabelOne = document.querySelector('span.JS-strength-result-1');
const volumeInputOne = document.querySelector('input.JS-volume-input-1');
const volumeLabelOne = document.querySelector('span.JS-volume-result-1');

const strengthInputTwo = document.querySelector('input.JS-strength-input-2');
const strengthLabelTwo = document.querySelector('span.JS-strength-result-2');
const volumeInputTwo = document.querySelector('input.JS-volume-input-2');
const volumeLabelTwo = document.querySelector('span.JS-volume-result-2');

const result = document.querySelector('p.JS-result');
const resultButton = document.querySelector('button.JS-result-button');

const recalc = () => {
  const initialWeight = 0;
  const alcoholWeight = coctailsArr.reduce(
    (prev, curr, currIdx) => (prev + curr.weight * coctailsArr[currIdx].strength)
    , initialWeight
  );

  const weight = coctailsArr.reduce(
    (prev, curr) => (prev + curr.weight)
    , initialWeight
  );

  const strength = Math.floor(alcoholWeight / weight * 10) / 10;

  if (!strength) {
    result.textContent = '... схоже, тут безалкогольний коктейль ...';
  } else {
    result.textContent = `${strength}%`;
  }
}

strengthLabelOne.textContent = `${strengthInputOne.value}%`;
strengthInputOne.addEventListener('input', (e) => {
  strengthLabelOne.textContent = `${Number(e.target.value)}%`;
  coctailsArr[0].strength = Number(e.target.value);
});

volumeLabelOne.textContent = `${volumeInputOne.value}мл`;
volumeInputOne.addEventListener('input', (e) => {
  volumeLabelOne.textContent = `${Number(e.target.value)}мл`;
  coctailsArr[0].weight = Number(e.target.value)
});

strengthLabelTwo.textContent = `${strengthInputTwo.value}%`;
strengthInputTwo.addEventListener('input', (e) => {
  strengthLabelTwo.textContent = `${Number(e.target.value)}%`;
  coctailsArr[1].strength = Number(e.target.value);
});

volumeLabelTwo.textContent = `${volumeInputTwo.value}мл`;
volumeInputTwo.addEventListener('input', (e) => {
  volumeLabelTwo.textContent = `${Number(e.target.value)}мл`;
  coctailsArr[1].weight = Number(e.target.value);
});

resultButton.addEventListener('click', (e) => {
  recalc();
});

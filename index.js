const coctailsArr = [
  // { name: 'віскі', weight: 90, strength: 40 },
  // { name: 'вермут', weight: 30, strength: 16 },// result 34%
];

const strengthInputList = document.querySelectorAll('input.JS-strength-input');
const strengthLabelList = document.querySelectorAll('span.JS-strength-result');
const volumeInputList = document.querySelectorAll('input.JS-volume-input');
const volumeLabelList = document.querySelectorAll('span.JS-volume-result');

const resultText = document.querySelector('p.JS-result');
const resultButton = document.querySelector('button.JS-result-button');

const recalc = () => {
  const initialWeight = 0;
  const alcoholWeight = coctailsArr.reduce(
    (prev, curr, currIdx) => (prev + curr.weight * (coctailsArr[currIdx].strength / 100))
    , initialWeight
  );

  const weight = coctailsArr.reduce(
    (prev, curr) => (prev + curr.weight)
    , initialWeight
  );

  const strength = Math.round((alcoholWeight / weight) * 1000) / 10;

  if (!strength) {
    resultText.textContent = '... схоже, тут безалкогольний коктейль ...';
    return;
  }
  if (strength >= 90) {
    resultText.textContent = `${strength}% ... розірве в друзки ...`;
    return;
  }
  resultText.textContent = `${strength}%`;
}

strengthLabelList.forEach((_, idx) => {
  strengthLabelList[idx].textContent = strengthInputList[idx].value;
  volumeLabelList[idx].textContent = volumeInputList[idx].value;
  if (!coctailsArr[idx]) {
    coctailsArr.push({
      strength: Number(strengthInputList[idx].value),
      weight: Number(volumeInputList[idx].value),
      name: coctailsArr[idx]?.name || idx
    })
  } else {
    coctailsArr[idx].strength = Number(strengthInputList[idx].value);
    coctailsArr[idx].weight = Number(volumeInputList[idx].value);
    coctailsArr[idx].name = coctailsArr[idx]?.name || idx;
  }
})

strengthInputList.forEach((item, idx) => {
  item.addEventListener('input', (e) => {
    strengthLabelList[idx].textContent = Number(e.target.value);
    coctailsArr[idx].strength = Number(e.target.value);
    console.table(coctailsArr);
  });
})

volumeInputList.forEach((item, idx) => {
  item.addEventListener('input', (e) => {
    volumeLabelList[idx].textContent = Number(e.target.value);
    coctailsArr[idx].weight = Number(e.target.value);
  });
})

resultButton.addEventListener('click', () => recalc());

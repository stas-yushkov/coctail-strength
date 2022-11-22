const coctailsArr = [
  // { name: 'віскі', volume: 90, strength: 40 },
  // { name: 'вермут', volume: 30, strength: 16 },// result 34%
];

const strengthInputList = document.querySelectorAll('input.JS-strength-input');
const strengthLabelList = document.querySelectorAll('span.JS-strength-result');
const volumeInputList = document.querySelectorAll('input.JS-volume-input');
const volumeLabelList = document.querySelectorAll('span.JS-volume-result');

const resultCoctailDiv = document.querySelector('.coctail-vis');
const resultIngridientDivList = document.querySelectorAll('.ingridient-vis');

const resultNumber = document.querySelector('p.JS-result-number');
const resultText = document.querySelector('p.JS-result-text');

const resultCoctailDivHeight = resultCoctailDiv.clientHeight;

const recalc = () => {
  const initialVolume = 0;

  const alcoholVolume = coctailsArr.reduce(
    (prev, curr, currIdx) => (prev + curr.volume * (coctailsArr[currIdx].strength / 100))
    , initialVolume
  );

  const coctailVolume = coctailsArr.reduce(
    (prev, curr) => (prev + curr.volume)
    , initialVolume
  );

  if (!coctailVolume) {
    resultNumber.textContent = '...';
    resultText.textContent = '... схоже, тут пусто ...';
    return;
  }

  const coctailStrength = Math.round((alcoholVolume / coctailVolume) * 1000) / 10;

  if (coctailStrength === 0) {
    resultNumber.textContent = `${coctailStrength}%`;
    resultText.textContent = '... схоже, тут безалкогольний коктейль ...';
    return;
  }

  if (coctailStrength >= 90) {
    resultNumber.textContent = `${coctailStrength}%`;
    resultText.textContent = `... розірве в друзки ...`;
    return;
  }

  resultNumber.textContent = `${coctailStrength}%`;
  resultText.textContent = 'та й таке )';
  return;
}

const debounce = (func, timeout = 250) => {
  let timer = null;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, timeout)
  }
}

const debouncedRecalc = debounce(() => recalc());

const redraw = () => {
  const initialVolume = 0;

  const coctailVolume = coctailsArr.reduce(
    (prev, curr) => (prev + curr.volume)
    , initialVolume
  );

  // TODO: choose color for alco & nonAlco
  // TODO: fix ingridient color?

  resultIngridientDivList.forEach((elem, idx) => {
    const updatedHeight = (coctailsArr[idx].volume * resultCoctailDivHeight) / coctailVolume

    elem.style.height = `${updatedHeight}px`;

    const color = coctailsArr[idx].strength;
    elem.style.backgroundColor = `rgb(${color}%, 0% , ${100 - color}% )`;
  })
}

strengthLabelList.forEach((_, idx) => {
  strengthLabelList[idx].textContent = strengthInputList[idx].value;
  volumeLabelList[idx].textContent = volumeInputList[idx].value;
  if (!coctailsArr[idx]) {
    coctailsArr.push({
      strength: Number(strengthInputList[idx].value),
      volume: Number(volumeInputList[idx].value),
      name: coctailsArr[idx]?.name || idx
    })
  } else {
    coctailsArr[idx].strength = Number(strengthInputList[idx].value);
    coctailsArr[idx].volume = Number(volumeInputList[idx].value);
    coctailsArr[idx].name = coctailsArr[idx]?.name || idx;
  }
})
redraw();
debouncedRecalc();

document.addEventListener('input', e => {
  strengthInputList.forEach((item, idx) => {
    if (item === e.target) {
      strengthLabelList[idx].textContent = Number(e.target.value);
      coctailsArr[idx].strength = Number(e.target.value);
    }
  })

  volumeInputList.forEach((item, idx) => {
    if (item === e.target) {
      volumeLabelList[idx].textContent = Number(e.target.value);
      coctailsArr[idx].volume = Number(e.target.value);
    }
  })
  redraw();
  debouncedRecalc();
})

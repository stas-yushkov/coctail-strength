const coctailsArr = [
  // { name: 'віскі', weight: 90, strength: 40 },
  // { name: 'вермут', weight: 30, strength: 16 },// result 34%
];

const strengthInputList = document.querySelectorAll('input.JS-strength-input');
const strengthLabelList = document.querySelectorAll('span.JS-strength-result');
const volumeInputList = document.querySelectorAll('input.JS-volume-input');
const volumeLabelList = document.querySelectorAll('span.JS-volume-result');

const resultCoctailDiv = document.querySelector('.coctail-vis');
const resultIngridientDivList = document.querySelectorAll('.ingridient-vis');

const resultNumber = document.querySelector('p.JS-result-number');
const resultText = document.querySelector('p.JS-result-text');
// const resultButton = document.querySelector('button.JS-result-button');

const resultCoctailDivHeight = resultCoctailDiv.clientHeight;

const recalc = () => {
  const initialWeight = 0;

  const alcoholWeight = coctailsArr.reduce(
    (prev, curr, currIdx) => (prev + curr.weight * (coctailsArr[currIdx].strength / 100))
    , initialWeight
  );

  const coctailWeight = coctailsArr.reduce(
    (prev, curr) => (prev + curr.weight)
    , initialWeight
  );

  if (!coctailWeight) {
    resultNumber.textContent = '...';
    resultText.textContent = '... схоже, тут пусто ...';
    return;
  }

  const coctailStrength = Math.round((alcoholWeight / coctailWeight) * 1000) / 10;

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
  // resultText.textContent = `міцності`;
  return;
}

const debounce = (func, timeout = 300) => {
  let timer = null;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, timeout)
  }
}

const debouncedRecalc = debounce(() => recalc());

const redraw = () => {
  const initialWeight = 0;

  // const alcoholWeight = coctailsArr.reduce(
  //   (prev, curr, currIdx) => (prev + curr.weight * (coctailsArr[currIdx].strength / 100))
  //   , initialWeight
  // );

  const coctailWeight = coctailsArr.reduce(
    (prev, curr) => (prev + curr.weight)
    , initialWeight
  );

  // const coctailStrength = Math.round((alcoholWeight / coctailWeight) * 1000) / 10;

  // resultIngridientDivList[idx].style.backgroundColor = 'red';
  // resultIngridientDivList[idx].style.height = '10px';
  // style.backgroundColor = "teal"
  // console.log();
  resultCoctailDivHeight

  // TODO: fix ingridient color?

  resultIngridientDivList.forEach((elem, idx) => {

    // console.dir(elem);

    elem.style.height = `${(coctailsArr[idx].weight * resultCoctailDivHeight) / coctailWeight}px`;
    // console.log(Math.round(255 * (coctailsArr[idx].strength) / 100));

    const color = coctailsArr[idx].strength;
    elem.style.backgroundColor = `rgb(20%, 10%, ${color}%)`;

    // elem.classList.remove('display-none');
    // elem.style.borderWidth = '2px';

    if (!coctailsArr[idx].weight) {
      // elem.style.borderWidth = '0';
      // elem.classList.add('display-none');
      // return
    };

    // const color = Math.round(255 * (coctailsArr[idx].strength) / 100);
    // elem.style.backgroundColor = `rgb(0, 0, ${color})`;
  })

  // if (!coctailStrength) {
  //   return resultText.textContent = '... схоже, тут безалкогольний коктейль ...';
  // }

  // if (coctailStrength >= 90) {
  //   return resultText.textContent = `${coctailStrength}% ... розірве в друзки ...`;
  // }

  // return resultText.textContent = `${coctailStrength}%`;
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
      coctailsArr[idx].weight = Number(e.target.value);
    }
  })
  redraw();
  debouncedRecalc();
})

// resultButton.addEventListener('click', recalc);

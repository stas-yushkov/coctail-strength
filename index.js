// const coctailsArr = [
//   { name: 'віскі', weight: 90, strength: 40 },
//   { name: 'вермут', weight: 30, strength: 16 },
//   { name: 'лід', weight: 0, strength: 0, },
// ];

// const initialWeight = 0;
// const alcoholWeight = coctailsArr.reduce(
//   (prev, curr, currIdx) => (prev + curr.weight * coctailsArr[currIdx].strength)
//   , initialWeight
// ); //alcoholVolume

// const weight = coctailsArr.reduce(
//   (prev, curr) => (prev + curr.weight)
//   , initialWeight
// ); //volume

// const strength = alcoholWeight / weight;

// console.log(`
// РОЗРАХУНОК МІЦНОСТІ КОКТЕЛІВ

// На підприємствах громадського харчування рецептури і технологію приготування коктейлів розробляють технологи підприємств. Складовими компонентами коктейлів є найрізноманітніші напої, при змішуванні яких міняються характеристики і міцність одержуваних коктейлів. Часто виникає питання про міцність коктейлів, що готуються. Для розрахунку міцності користуються спеціальною методикою.

// Суть її полягає в наступному:
// 1) визначити вміст спирту в кожному компоненті, для чого зміст алкоголю умножають на норму закладки;
// 2) розрахувати загальний зміст спирту, складаючи всі складові;
// 3) провести розрахунок міцності з урахуванням норми виходу коктейля.
// Якщо коктейлі готують з льодом, то до загального виходу слід додати кількість льоду.

// Розглянемо даний розрахунок на прикладі:
// Для приготування коктейля використовують наступні напої:
// віскі 90 г (міцність 40%), вермут 30 г (міцність 16%).
// Розрахувати міцність приготованого коктейля.

// Рішення.
// 1. Розраховуємо вміст спирту у віскі. 90x40 = 36 г
// 2. Розраховуємо вміст спирту у вермуті. 30x16 = 4,8 р.
// 3. Визначаємо загальний вміст спирту в обох напоях 36 + 4,8 = 40,8 р.
// 4. Розраховуємо вихід напою. 90+30 = 120 р.
// 5. Розраховуємо міцність отриманого коктейля. 120 г містять 40,8 г спирти
// 100 г х г спирту
// х= (40,8 х 100) / 120 = 34 (%).

// Відповідь: міцність отриманого коктейля 34%.

// А JS каже: ${strength}%`
// );

//https://studfile.net/preview/8852847/page:9/




const coctailsArr = [
  { name: 'віскі', weight: 90, strength: 40 },
  { name: 'вермут', weight: 30, strength: 16 },
];
const result = document.querySelector('p#result');
const strengthInputOne = document.querySelector('#strength1-progress');
const strengthLabelOne = document.querySelector('.strength1-percent');
const volumeInputOne = document.querySelector('#volume1-progress');
const volumeLabelOne = document.querySelector('.volume1-percent');

const strengthInputTwo = document.querySelector('#strength2-progress');
const strengthLabelTwo = document.querySelector('.strength2-percent');
const volumeInputTwo = document.querySelector('#volume2-progress');
const volumeLabelTwo = document.querySelector('.volume2-percent');

const resultButton = document.querySelector('button.button');

const recalc = () => {
  const initialWeight = 0;
  const alcoholWeight = coctailsArr.reduce(
    (prev, curr, currIdx) => (prev + curr.weight * coctailsArr[currIdx].strength)
    , initialWeight
  ); //alcoholVolume

  const weight = coctailsArr.reduce(
    (prev, curr) => (prev + curr.weight)
    , initialWeight
  ); //volume

  if (!weight) {
    result.textContent = `ти тверезий!`;
    return;
  }

  const strength = Math.floor(alcoholWeight / weight * 10) / 10;
  console.table(coctailsArr);
  console.log('strength', strength);
  result.textContent = `ти бухий на ${strength}%`;
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

//TODO: add ingridient name
// enlarge volume  input max value
//щоб числа не стрибали
// починати роботу з нової гілки
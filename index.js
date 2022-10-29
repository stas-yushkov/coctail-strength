const coctailsArr = [
  { name: 'віскі', weight: 90, strength: 40 },
  { name: 'вермут', weight: 30, strength: 16 },
  { name: 'лід', weight: 0, strength: 0, },
];

const initialWeight = 0;
const alcoholWeight = coctailsArr.reduce(
  (prev, curr, currIdx) => (prev + curr.weight * coctailsArr[currIdx].strength)
  , initialWeight
); //alcoholVolume

const weight = coctailsArr.reduce(
  (prev, curr) => (prev + curr.weight)
  , initialWeight
); //volume

const strength = alcoholWeight / weight;

console.log(`
РОЗРАХУНОК МІЦНОСТІ КОКТЕЛІВ

На підприємствах громадського харчування рецептури і технологію приготування коктейлів розробляють технологи підприємств. Складовими компонентами коктейлів є найрізноманітніші напої, при змішуванні яких міняються характеристики і міцність одержуваних коктейлів. Часто виникає питання про міцність коктейлів, що готуються. Для розрахунку міцності користуються спеціальною методикою.

Суть її полягає в наступному:
1) визначити вміст спирту в кожному компоненті, для чого зміст алкоголю умножають на норму закладки;
2) розрахувати загальний зміст спирту, складаючи всі складові;
3) провести розрахунок міцності з урахуванням норми виходу коктейля.
Якщо коктейлі готують з льодом, то до загального виходу слід додати кількість льоду.

Розглянемо даний розрахунок на прикладі:
Для приготування коктейля використовують наступні напої:
віскі 90 г (міцність 40%), вермут 30 г (міцність 16%).
Розрахувати міцність приготованого коктейля.

Рішення.
1. Розраховуємо вміст спирту у віскі. 90x40 = 36 г
2. Розраховуємо вміст спирту у вермуті. 30x16 = 4,8 р.
3. Визначаємо загальний вміст спирту в обох напоях 36 + 4,8 = 40,8 р.
4. Розраховуємо вихід напою. 90+30 = 120 р.
5. Розраховуємо міцність отриманого коктейля. 120 г містять 40,8 г спирти
100 г х г спирту
х= (40,8 х 100) / 120 = 34 (%).

Відповідь: міцність отриманого коктейля 34%.

А JS каже: ${strength}%`
);

//https://studfile.net/preview/8852847/page:9/

const s1 = document.querySelector('#strength1-progress');
const sr1 = document.querySelector('.strength1-percent');
sr1.textContent = `${s1.value}%`;
s1.addEventListener('input', (e) => {
  sr1.textContent = `${e.target.value}%`;
});

const v1 = document.querySelector('#volume1-progress');
const vr1 = document.querySelector('.volume1-percent');
vr1.textContent = `${v1.value}мл`;
v1.addEventListener('input', (e) => {
  vr1.textContent = `${e.target.value}мл`;
});

const s2 = document.querySelector('#strength2-progress');
const sr2 = document.querySelector('.strength2-percent');
sr2.textContent = `${s2.value}%`;
s2.addEventListener('input', (e) => {
  sr2.textContent = `${e.target.value}%`;
});

const v2 = document.querySelector('#volume2-progress');
const vr2 = document.querySelector('.volume2-percent');
vr2.textContent = `${v2.value}мл`;
v2.addEventListener('input', (e) => {
  vr2.textContent = `${e.target.value}мл`;
});

// const coctailsArrTEST = [
//   { name: 'віскі', weight: 90, strength: 40 },
//   { name: 'вермут', weight: 30, strength: 16 },
//   { name: 'лід', weight: 0, strength: 0, },
// ];

// const initialWeightTEST = 0;
// const alcoholWeightTEST = coctailsArrTEST.reduce(
//   (prev, curr, currIdx) => (prev + curr.weight * coctailsArrTEST[currIdx].strength)
//   , initialWeightTEST
// ); //alcoholVolume

// const weightTEST = coctailsArrTEST.reduce(
//   (prev, curr) => (prev + curr.weight)
//   , initialWeightTEST
// ); //volume

// const strengthTEST = alcoholWeightTEST / weightTEST;
// console.log('strengthTEST', strengthTEST);

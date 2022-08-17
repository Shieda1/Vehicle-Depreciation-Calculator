// https://calculator.swiftutors.com/vehicle-depreciation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const currentValueoftheVehicleRadio = document.getElementById('currentValueoftheVehicleRadio');
const originalCostoftheVehicleRadio = document.getElementById('originalCostoftheVehicleRadio');
const percentofDepreciationperYearRadio = document.getElementById('percentofDepreciationperYearRadio');
const numberofYearsOwnedRadio = document.getElementById('numberofYearsOwnedRadio');

let currentValueoftheVehicle;
let originalCostoftheVehicle = v1;
let percentofDepreciationperYear = v2;
let numberofYearsOwned = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

currentValueoftheVehicleRadio.addEventListener('click', function() {
  variable1.textContent = '(C) Original Cost of the Vehicle ($)';
  variable2.textContent = '(r) Percent of Depreciation per Year (%)';
  variable3.textContent = '(t) Number of Years Owned (years)';
  originalCostoftheVehicle = v1;
  percentofDepreciationperYear = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

originalCostoftheVehicleRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Vehicle ($)';
  variable2.textContent = '(r) Percent of Depreciation per Year (%)';
  variable3.textContent = '(t) Number of Years Owned (years)';
  currentValueoftheVehicle = v1;
  percentofDepreciationperYear = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

percentofDepreciationperYearRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Vehicle ($)';
  variable2.textContent = '(C) Original Cost of the Vehicle ($)';
  variable3.textContent = '(t) Number of Years Owned (years)';
  currentValueoftheVehicle = v1;
  originalCostoftheVehicle = v2;
  numberofYearsOwned = v3;
  result.textContent = '';
});

numberofYearsOwnedRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Current Value of the Vehicle ($)';
  variable2.textContent = '(C) Original Cost of the Vehicle ($)';
  variable3.textContent = '(r) Percent of Depreciation per Year (%)';
  currentValueoftheVehicle = v1;
  originalCostoftheVehicle = v2;
  percentofDepreciationperYear = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(currentValueoftheVehicleRadio.checked)
    result.textContent = `Current Value of the Vehicle = ${computeCurrentValueoftheVehicle().toFixed(2)} $`;

  else if(originalCostoftheVehicleRadio.checked)
    result.textContent = `Original Cost of the Vehicle = ${computeOriginalCostoftheVehicle().toFixed(2)} $`;

  else if(percentofDepreciationperYearRadio.checked)
    result.textContent = `Percent of Depreciation per Year = ${computePercentofDepreciationperYear().toFixed(2)} %`;

  else if(numberofYearsOwnedRadio.checked)
    result.textContent = `Number of Years Owned = ${computeNumberofYearsOwned().toFixed(2)} years`;
})

// calculation

function computeCurrentValueoftheVehicle() {
  return Number(originalCostoftheVehicle.value) * Math.pow(1 - (Number(percentofDepreciationperYear.value) / 100), Number(numberofYearsOwned.value));
}

function computeOriginalCostoftheVehicle() {
  return Number(currentValueoftheVehicle.value) / Math.pow(1 - (Number(percentofDepreciationperYear.value) / 100), Number(numberofYearsOwned.value));
}

function computePercentofDepreciationperYear() {
  return (1 - Math.pow(Number(currentValueoftheVehicle.value) / Number(originalCostoftheVehicle.value), 1 / Number(numberofYearsOwned.value))) * 100;
}

function computeNumberofYearsOwned() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}
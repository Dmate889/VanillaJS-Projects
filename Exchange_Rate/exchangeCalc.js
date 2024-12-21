const API_KEY = "44300e08fb2c19431cc5ebe5";

//Button
let submitButton = document.querySelector(".exchangeButton");

submitButton.addEventListener("click", async () => {
  //Dropdowns
  let fromSelect = document.getElementById("exchange1").value;
  let toSelect = document.getElementById("exchange2").value;

  //Inputs
  let fromInput = parseFloat(document.getElementById("inputFrom").value);
  let toInput = document.getElementById("inputTo");

  const result = await fetchingData(fromSelect);
  console.log(result);

  const rate = result[toSelect];
  console.log(rate);

  toInput.value = exchangeCalculation(fromInput,rate).toFixed(2);
});

async function fetchingData(currencyType) {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currencyType}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.conversion_rates;
}

function exchangeCalculation(fromCurrency, rate) {
  return fromCurrency * rate;
}

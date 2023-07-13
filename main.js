let input = document.getElementById("input");
let select = document.querySelectorAll(".currency");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    // console.log(data);
    display(data);
  });
function display(data) {
  let entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}
btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = input.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  }
});
function convert(currency1, currency2, value) {
  let host = "api.frankfurter.app";

  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      //   result.innerHTML = Object.values(val.rates)[0];
      result.innerHTML = `${value} ${Object.values(val)[1]} = ${
        Object.values(val.rates)[0]
      }`;
    });
}

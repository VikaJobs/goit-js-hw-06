const decrementBtn = document.querySelector(`[ data-action ="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const spanValue = document.querySelector("#value");
let counterValue = 0;
decrementBtn.addEventListener("click", function () {
  counterValue--;
  spanValue.textContent = counterValue;
});
incrementBtn.addEventListener("click", function () {
  counterValue++;
  spanValue.textContent = counterValue;
});

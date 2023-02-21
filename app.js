let count = 0;

const input = document.querySelector("input");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  if (count < 10) {
    count++;
    input.value = count;
  }
});

minusButton.addEventListener("click", () => {
  if (count > -10) {
    count--;
    input.value = count;
  }
});
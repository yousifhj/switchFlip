const neutral = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let neutralColor = "#";
  for (let i = 0; i < 6; i++) {
    neutralColor = neutral[0];
  }

  color.textContent = neutralColor;
  document.body.style.backgroundColor = neutralColor;
});


let expense = 750 * 10900 + 120 * 12272.64;

console.log(expense);

document.querySelector(".btn").addEventListener("click", function () {
  const summ = +(document.querySelector(".value").value);
  console.log(summ);
  
  if (!summ) {
    document.querySelector(".info").textContent = "Pulingiz yo'q ekan-u";
  } else if (summ >= expense) {
    document.querySelector(".info").textContent =
      "Yo'lingiz bexatar bo'lsin. Oq yo'l!!!";
  } else {
    document.querySelector(".info").textContent =
      "Kursni tezroq tugatib ishga kiring, keyin borasiz chet elga!!!";
  }
});

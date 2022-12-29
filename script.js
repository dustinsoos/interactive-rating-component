const ratingStart = document.querySelector(".rating-start");
const thankYou = document.querySelector(".thank-you");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-styles");

function submitButton() {
  ratingStart.classList.add("hidden");
  thankYou.classList.remove("hidden");
}
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

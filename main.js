const selectQoute = document.querySelector(".content");
const authorEl = document.querySelector("#author");
const btnEl = document.querySelector(".button");

document.addEventListener("DOMContentLoaded", () => {
  const qouteGenerator = async () => {
  const data = await fetch("https://api.quotable.io/random");
  const response = await data.json();
  authorEl.innerText = `Author : ${response.author}`;
  selectQoute.innerText = `${response.content}`;
  btnEl.style.display = "block";
}
 btnEl.addEventListener("click", () => {
   qouteGenerator();
 })
 qouteGenerator();
})







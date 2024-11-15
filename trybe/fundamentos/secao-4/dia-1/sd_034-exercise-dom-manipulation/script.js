// Seu código aqui
document.querySelectorAll(".center-content p")[1].innerText = "Trabalhando";

document.querySelector("main").style.backgroundColor = "rgb(76, 164, 109)";

document.querySelector(".center-content").style.backgroundColor = "white";

document.querySelector("h1").innerText = "Desafio - JavaScript";

const fistP = document.querySelectorAll(".center-content p")[0];
fistP.innerText = "TEXTO PADRÃO DO NOSSO SITE";

const allP = document.querySelectorAll("p");

const allPText = Array.from(allP)
  .map((p) => p.innerText)
  .join(" ");

document.querySelector("footer p").innerText = allPText;

const botao = document.querySelector("button");
const h1 = document.querySelector("h1");

botao.addEventListener("click", mudarTexto);

function mudarTexto(){
    h1.textContent = "Deu certo";
}
import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault(); // evito o comportamento padrão de reiniciar a página


    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // Match.floor arredonda o numero para o valor inteiro mais proximo, levando como base o valor menor.

    try {
    await conectaAPI.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));
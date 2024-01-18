import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";




async function pesquisar(evento) {
    evento.preventDefault();

    const textoPesquisa = document.querySelector("[data-pesquisa]").value;
    console.log("Texto de Pesquisa:", textoPesquisa);
    
    const busca = await conectaAPI.buscaVideo(textoPesquisa);
    console.log("Resultado da Busca:", busca);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); // remove os videos que não fazem parte da pesquisa
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`;
    }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener('click', evento => pesquisar(evento));


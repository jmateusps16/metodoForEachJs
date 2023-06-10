let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI() {
    const response = await fetch(endpointDaAPI);
    livros = await response.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

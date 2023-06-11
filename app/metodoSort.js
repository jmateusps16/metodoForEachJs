let crescente = true;
let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenadosPorPreco = [];
    crescente ? livrosOrdenadosPorPreco = livros.sort((a, b) => a.preco - b.preco) : livrosOrdenadosPorPreco = livros.sort((a, b) => b.preco - a.preco);
    exibirOsLivrosNaTela(livrosOrdenadosPorPreco);
    crescente = !crescente;
}
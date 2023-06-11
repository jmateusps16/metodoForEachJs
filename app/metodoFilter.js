// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);
let apenasDisponivel = false;

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const livroCategoria = elementoBtn.value;
    let livrosFiltrados = livroCategoria == 'disponivel' ? filtraDisponibilidade(livros) : filtrarPorCategoria(livroCategoria);
    if (livroCategoria != null && livroCategoria.trim() !== '') {
        exibirOsLivrosNaTela(livrosFiltrados);
        if(livroCategoria == 'disponivel' && apenasDisponivel) {
            const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
            exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
        }
    }
}

function filtrarPorCategoria(livroCategoria) {
    return livros.filter(livro => livro.categoria == livroCategoria);
}

function filtraDisponibilidade(livros) {
    apenasDisponivel = !apenasDisponivel;
    if (apenasDisponivel) {
        return livros.filter(livro => livro.quantidade > 0);
    } else {
        return livros;
    }
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML += `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
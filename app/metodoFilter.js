// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);
let apenasDisponivel = false;

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const livroCategoria = elementoBtn.value;
    let livrosFiltrados = livroCategoria == 'disponivel' ? filtraDisponibilidade(livros) : livros.filter(livro => livro.categoria == livroCategoria);
    if (livroCategoria != null && livroCategoria.trim() !== '') {
        exibirOsLivrosNaTela(livrosFiltrados);
    }
}

function filtraDisponibilidade(livros) {
    apenasDisponivel = !apenasDisponivel;
    if (apenasDisponivel) {
        return livros.filter(livro => livro.quantidade > 0);
    } else {
        return livros;
    }
}
// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
// btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const livroCategoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == livroCategoria);
    if (livroCategoria != null && livroCategoria.trim() !== '') {
        exibirOsLivrosNaTela(livrosFiltrados);
    } else {
        getBuscaLivrosDaAPI();
    }
    
}
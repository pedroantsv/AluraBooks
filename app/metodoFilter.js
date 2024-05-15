const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBt = document.getElementById(this.id)
    const categoria = elementoBt.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : fitrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        //console.log(valorTotal)
        exibirValorTotalLivrosDisponiveis(valorTotal)
    }
}

function fitrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    elementoValorTotalLivrosDisponiveis.innerHTML = `
      <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `
}
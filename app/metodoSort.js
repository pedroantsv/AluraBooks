const btOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btOrdenarPreco.addEventListener('click', ordenarLivrosPreco)

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}
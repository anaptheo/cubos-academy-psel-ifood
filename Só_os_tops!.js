function solucao(produtos) {
	let tamanho = produtos.length;
    let somaTotal = 0;
    let totalTop = 0;
    for (let i = 0; i < tamanho; i++)
        {
            somaTotal += produtos[i].preco;
            if (produtos[i].preco > 10000)
                {
                    totalTop += produtos[i].preco;
                }
        }
    let percentual = totalTop / somaTotal;

    console.log("{ totalTop: " + totalTop + ", percentual: " + percentual + " }" );

}

function solucao(letra, palavras) {
    let tamanho = palavras.length;
    let erros = 0;
    for(let i = 0; i < tamanho; i++)
        {
            if(palavras[i][0] != letra)
                {
                    erros++;
                }
        }
	console.log(erros);
    
}
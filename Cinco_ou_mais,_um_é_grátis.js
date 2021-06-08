function solucao(precos) {
    let tamanho = precos.length;
    let min = 10000000000;
    let soma = 0;
    if (tamanho >= 5)
        {
            for (let i = 0; i < tamanho; i++)
                {
                    if (precos[i] < min)
                        {
                            min = precos[i];
                        }
                }
            for (let i = 0; i < tamanho; i++)
                {
                    soma = soma + precos[i];
                }
            soma = soma - min;
        }
    if (tamanho < 5)
        {
            for (let i = 0; i < tamanho; i++)
                {
                    soma = soma + precos[i];
                }
        }
    console.log(soma);
}

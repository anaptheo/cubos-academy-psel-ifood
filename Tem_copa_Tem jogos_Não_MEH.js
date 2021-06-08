function solucao(ano) {

    
    if((ano - 2022) % 4 == 0 || ano == 2022)
        {
            console.log("COPA");
        }
    else if ((ano - 2024) % 4 == 0 || ano == 2024)
    {
        console.log("JOGOS");
    }
    
    else
        {
            console.log("MEH");
        }
}
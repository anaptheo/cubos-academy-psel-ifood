function solucao(joao, andre) {
    if ((joao == "PEDRA" && andre == "PAPEL") || (joao == "PAPEL" && andre == "TESOURA") || (joao == "TESOURA" && andre == "PEDRA"))
        {
            console.log("ANDRE");
        }
    if ((andre == "PEDRA" && joao == "PAPEL") || (andre == "PAPEL" && joao == "TESOURA") || (andre == "TESOURA" && joao == "PEDRA"))
        {
            console.log("JOAO");
        }
    if (andre == joao)
        {
            console.log("EMPATE")
        }
}
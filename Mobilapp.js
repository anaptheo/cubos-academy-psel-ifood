function solucao(tempo, distancia) {

    if (tempo < 5)
    {
        console.log("600");
    }

    if (5 < tempo && tempo < 60)
    {
        console.log(tempo * 100 + 50 * distancia);
    }


    if (tempo > 60)
        {
            if (distancia < 100)
                {
                    console.log(200 * distancia);
                }
            if (distancia  >= 100)
                {
                    console.log (150 * distancia);
                }
        }
}

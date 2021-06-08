function solucao(obj) {
	let permite = false;
    
    if(obj.temIngresso == false)
        {
            console.log("ACESSO NEGADO");
        }
    
    if(obj.temIngresso == true)
    {
        if (obj.idade > obj.censura)
        {
        permite = true;
        }
        
        if (obj.idade < obj.censura && obj.estaComPais == true)
        {
            permite = true;
        }
    
        if(permite == true)
        { 
            if(obj.idade < 18 || obj.temCarteirinha == true)
                {
                    console.log("MEIA");
                }
            else
                {
                    console.log("INTEIRA")
                }
        }
        if(permite == false)
            {
                console.log("ACESSO NEGADO");
            }
        }
    
}

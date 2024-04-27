import personagens from "./Personagens";



function listarPersonagens(){
    const sobrenome =
    personagens.filter(personagem =>{  
       if(personagem.nome.includes('Redfield')){
            return true;
        }
        return false;
    })
    
    return (
        <>
            {sobrenome.map(personagem => {
             return(
                <div>    
             <h2> {personagem.nome}</h2>    
              <img src = {personagem.url} ></img>    
             </div>    
            )
           })}
        </>
    )

}

export default listarPersonagens;

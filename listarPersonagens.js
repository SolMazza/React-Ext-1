import personagens from "./Personagens";



function listarPersonagens(){
    const sobrenome =
    personagens.filter(personagem =>{  
       let nome = personagem.nome;
       var arr = nome.split(" ");
        if(arr[1] === 'Redfield' || arr[2] === 'Redfield' || arr[3] === 'Redfield'){
            return true;
        }
        return false;
    })
    
    return (
        <div>
            {sobrenome.map(personagem => (
                <h2> {personagem.nome}</h2>              
            ))}
        </div>
    )

}

export default listarPersonagens;
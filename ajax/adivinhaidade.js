document.querySelector('button').addEventListener('click', recuperaDados)

function recuperaDados(evento){
    evento.preventDefault();

    //Nome do usuário 
    let nome = document.getElementById('nome').value;

    //Fazemos a chamada                             //então(ou, depois)
    fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){

    
        //pegamos apenas o conteúdo do retorno
        return ret.text();

        //então
    }).then(function(cont){

        //trabalhamos com o conteúdo retornado

        //Recupera a string JSON e transforma em objeto JSON
        let dados = JSON.parse(cont);

        console.log(dados);

        let saida = `${dados.name} tem ${dados.age} anos`;

        document.getElementById('nome').value = '';
 
        document.querySelector('#dadoRecuperado').innerHTML
                                                    = saida;
});

}
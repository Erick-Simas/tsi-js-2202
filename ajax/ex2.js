document.querySelector('button').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    
    const XHR = new XMLHttpRequest();

    //true = assincrono, sincrono esta sendo descontinuado
    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true); 

    XHR.onload = function(){
        // HTTP 2000 OK
        if(this.status === 200){
            //recupera a string JSON e transforma em objeto JSON
            let dados = JSON.parse(this.responseText)


        //o valor em forEach é o que representará o objeto
        dados.forEach(function(valor){
           if(valor.idade < 18){
            document.querySelector('#dadoRecuperado').innerHTML = ( valor.nome + ' é menor de idade <br>')
           }
           else{
            document.querySelector('#dadoRecuperado').innerHTML = (valor.nome + ' é maior de idade <br>')
           }
        })
            
            //document.querySelector('#dadoRecuperado').innerText 
               // = this.responseText;
        }
        }

        //realiza a requisição
        XHR.send();
}


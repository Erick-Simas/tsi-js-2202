let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault();

    let servico = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    //recuperar os dados da matriz
    let preco = calcularPreco(servico.value, prazo.value);

    //mostra o resultado no elemento
    res.innerText = `o preco é ${preco}`


    console.log(servico.value);


    //ver dados do evento (click) no console
    console.log(evento);

    //obter os valores do servico e prazo
});

function calcularPreco(servico, prazo){
        let tabela = [['$$$', '$$', "$"],
                      ['$$$$', '$$$', "$$"],
                      ['nao faz', 'nao faz', "$$$"]];

        return tabela[servico][prazo];
}
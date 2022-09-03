let peso = parseFloat(prompt('Digite seu peso'));
let altura = parseFloat(prompt('Digite sua altura'));

let resultado = calcularImc( peso, altura);

alert(resultado);

function calcularImc(peso, altura){
    let imc = peso/(altura^2);

    let retorno = '';

    if(imc > 25){

    retorno = 'Acima do peso'
    }
    else if(imc >= 18 && imc <= 25){

        retorno = 'peso normal';
    }
    else{
        retorno = 'abaixo do peso';
    }

    return retorno;
}
let btnCalcular = document.getElementById('Calcular');

btnCalcular = addEventListener('click' ,function (evento){

    evento.preventDefault();
    console.log(evento);
});

function executa(evento){
    console.log('Clicou');
}

console.log(btnCalcular);



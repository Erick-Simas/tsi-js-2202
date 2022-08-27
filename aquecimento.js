//Utilizando for:
for (let i = 0; i<=10 ; i ++){
    console.log('Numero da linha ' + i);
}

//Utilizando While:
i = 0;
while(i < 10){
    console.log("Numero da linha com while " + i);
    i++;
}
// Utilizando Do:
i= 0
do{
    console.log('numero da linha com Do ' + i);
    i++;
}while(i <= 10);

//condicionais

let a = 0;
let b = 5;
if(a > b)
    console.log(A + ' é maior que' + B);
else if( a == b)
console.log ('A é igual a B');
else
    console.log('B é maior que A');

let c = 0

    switch(c){
        case 0:
            console.log("domingo");
            break;
            case 0:
            console.log("segunda");
            break;
            case 1:
            console.log("terça");
            break;
            case 2:
            console.log("quarta");
            break;
            case 3:
            console.log("quinta");
            break;
            case 4:
            console.log("sexta");
            break;
            case 5:
            console.log("sabado");
            break;
        
    }
 //ternario
    let x = 4;
    let y = 2;

    let resultado = x > y ? 'x é maior' : 'y é maior';

    console.log(resultado);

    let sexo = 'F';

    let res = sexo == 'F' ? 'Feminino' : 'Masculino';

    console.log(res);

    //coalescente

    let coisa = 10;
    let variavel = coisa ?? 'Não há';
    console.log(variavel);
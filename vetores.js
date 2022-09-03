let amigos = ['Erick', 'Fernanda', 'marcos', 'maria'];

console.log(amigos.length);

for(let i = 0; i < 4; i++)
{
    console.log(amigos[i]);
}

amigos.forEach(function(valor, indice){

        console.log(`${indice} : ${valor}`);
});

amigos.map(function (valor, indice){
    console.log(`${indice} : ${valor}`);
});
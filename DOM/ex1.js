console.log(window);

let meuTitulo = document.getElementById('titulo');

if(confirm('Deixe uma mensagem!')){

        let msg = prompt('Mensagem');
        meuTitulo.innerText = msg;
        meuTitulo.style.background = 'indigo';
}
else{
    meuTitulo.innerText = 'Sem mensagem';
    meuTitulo.style.background = 'grey';
}

console.log(window.navigator);
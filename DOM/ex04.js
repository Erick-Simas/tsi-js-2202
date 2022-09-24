let e;

//Com getElementByClassName
e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){
    val.style.color = 'green';
    val.innerText = 'OutraTrefa';
    console.log(val.innerText);
});

//Com querySelectorAll
e = document.querySelectorAll('li');

e.forEach(function(val){

    console.log(val.innerText);
})

//Somente ímpares (para pares, even)
e= document.querySelectorAll('li:nth-child(odd)')

e.forEach(function(val){

    val.style.background = '#dedede';
})

//Sem função anonima
e.forEach(fazAlgo);

function fazAlgo(val){
    console.log(val)
}


e = document.querySelector('ul.collection');

//console.log(e.lastChild);
//console.log(e.childElementCount);
console.log(e.Children[2]);
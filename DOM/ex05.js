//Como criar elementos

let NovoItemNaLista = document.createElement('li'); // Cria elemento li

NovoItemNaLista.className = "collection-item";//define a classe CSS do elemento

NovoItemNaLista.id = "novo-item";//define o id do elemento

NovoItemNaLista.setAttribute('title', 'Novo item na lista');//adciona atributo ao elemento


NovoItemNaLista.appendChild(document.createTextNode('Fazer exercício fisico'));//adiciona um node filho

//criar sub elemento <a>

let Ancora = document.createElement('a');
Ancora.className = "delete-item secondary-content";
Ancora.setAttribute('href', '#');

//criar sub elemento <i>
let icone = document.createElement('i');
icone.className =  'fa fa-remove';
//adiciona o <i> em <a>
Ancora.appendChild(icone);
//adiciona o <a> em <li>
NovoItemNaLista.appendChild(Ancora);

let elementoUele = document.querySelector('ul.collection');

elementoUele.appendChild(NovoItemNaLista);
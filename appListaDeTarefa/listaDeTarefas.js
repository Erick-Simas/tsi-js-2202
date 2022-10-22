const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){
    //evento para adicionar tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);

    //evento para fazer o x funcionar(apagar uma unica tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa)
    btnLimpaTudo.addEventListener('click', apagarTudo)
    filtroDeTarefa.addEventListener('keyup', filtrar)
}
function filtrar(e){

    tarefas.forEach(function(tarefa){

        textoTarefa = tarefa.innerText

        if(textoTarefa.toLowerCase().indexOf(procurado) != -1){
            tarefa.style.display = 'block'
        }
        else{
            tarefa.style.display = 'none'
        }
    })
}
function apagarTudo(evento){
    //para definir o comando padrão do objeto
    evento.preventDefault()

    listaDeTarefas.innerHTML ='';

}
carregaMonitoresDeEventos();

function apagarTarefa(evento){

        //se o elemento pai tiver a classe apaga-tarefa;
        //iy seja, se for o elemento 'a', apague li, ou seja, a tarefa
        if(evento.target.parentElement.classList.contains('apaga-tarefa')){

            //apaga o elemento pai do 'a', ou seja, o li, pois o elemento
            evento.target.parentElement.parentElement.remove();
        }
}

function adicioneTarefa(evento){
    evento.preventDefault();

    //verifica se usuario entrou com uma tarefa
    if(entradaTarefa.value === ''){

        alert('Entre com uma tarefa');
        return;
    }
    //cria li com nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //Cria onde vai ficar o c para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-conten';

    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    a.appendChild(i);

    li.appendChild(a);
    listaDeTarefas.appendChild(li);

      //apaga o input para entrada 

    gravarTarefa()
}

function gravarTarefa(tarefa){

    let tarefas = []

    let tarefasDoStorage =  localStorage.getItem('tarefas')

    if(tarefasDoStorage != null){
        tarefas = JSON.parse(tarefasDoStorage);
    }

    tarefas.push(tarefa)

    localStorage.setItem('tarefas', JSON.stringfy(tarefas))

    entradaTarefa.value = ''
}
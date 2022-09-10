let tabela = [ ['$$$','$$','$'], ['$$$$','$$$','$$'], ['--','--','$$$']];

let servico = prompt("Entre com o serviço: \n0 - Troca de óleo \n 1 Balanceamento \n 2 Cambagem");
let prazo = prompt("Entre com o prazo: \n0 - Um dia \n 1 Dois dias \n 2 Três dias"); 

if( validaEntrada(servico) && validaEntrada(prazo)){

    alert(`O serviço ficará em ${tabela[servico][prazo]}`);
}else{

    alert("ERRO: Verifique os valores imseridos e tente novamente");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}
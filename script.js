console.log("JavaScript carregado");

function validaCPF(cpf) {
    console.log(cpf.length)
    if(cpf.length != 11) { // se o número de caracteres for de diferente de 11, retorna falso
        return false; 
    }   
    else {
        var numeros = substring(0 , 9) // 0 é o primeiro número digitado, 1 é o segundo, etc...
        return true;
    }
}

function validacao() {
    console.log("Iniciando validação de CPF");
    
    var cpf = document.getElementById("cpf_digitado").value;
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById("success").style.display = 'block'; // irá aparecer mensagem de sucesso
    }
    else {
        document.getElementById("error").style.display = 'block'; // irá aparecer mensagem de erro
    }
}
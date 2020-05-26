console.log("JavaScript carregado");

function validaCPF(cpf) {
    console.log(cpf.length)
    if(cpf.length != 11) { // se o número de caracteres for diferente de 11, retorna falso
        return false; 
    }
    else {
        var numeros = cpf.substring(0 , 9) // puxa os números da posição 0-9; '0' é o 1º número digitado, '1' é o 2º, etc...
        var digitoVerificador = cpf.substring(9) // puxa os números da posição 9 em diante
        var soma = 0;

        console.log('Número do CPF ' + numeros);
        console.log('Dígito do CPF ' + digitoVerificador);  
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;

        }
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
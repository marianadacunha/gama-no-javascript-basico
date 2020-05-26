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
        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // ':' significa else
        
        // validação do primeiro digito
        if (resultado != digitoVerificador.charAt(0)){
            return false;
        }
        
        soma = 0;
        numeros = cpf.substring(0 , 10);

        for (var k = 0; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;

        }

        resultado = (soma % 11) > 2 ? 0 : 11 - (soma % 11);

        // validação do segundo digito
        if (resultado != digitoVerificador.charAt(1)){
            return false;
        }

            return true;
    }
}


function validacao() {
    console.log("Iniciando validação de CPF");
    
    var cpf = document.getElementById("cpf_digitado").value;
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('error').style.display = 'none'; // oculta o erro caso ele já tenha sido exibido anteriormente
        document.getElementById("success").style.display = 'block'; // irá aparecer mensagem de sucesso
    }
    else {
        document.getElementById('success').style.display = 'none'; // oculta success caso já tenha sido exibido anteriormente
        document.getElementById("error").style.display = 'block'; // irá aparecer mensagem de erro
    }
}



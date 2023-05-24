async function buscaEndereco(cep){
    var messagemErro = document.getElementById('erro');
    messagemErro.innerHTML = "";
    try{
         var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
         var consultaCEPConvertida = await consultaCEP.json()
         if (consultaCEPConvertida.erro){
            throw Error('CEP não existe!')
        }
        var logradouro = document.getElementById('endereco');
        var localidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');
        var complemento = document.getElementById('complemento')

        logradouro.value = consultaCEPConvertida.logradouro;
        localidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        complemento.value = consultaCEPConvertida.complemento;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch(erro){
        messagemErro.innerHTML = `<p>CEP invalido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
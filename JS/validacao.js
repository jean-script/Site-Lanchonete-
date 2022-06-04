let botaoEnviarForm = document.querySelector(".enviar");


botaoEnviarForm.addEventListener("click", function(){
    //pegar todos os forms
    let formulario = document.querySelector("#form");
    let inputs = pegarInputs(formulario);
    

    //adicionando erros
    
    let erros = errosEmbranco(inputs);
   
    if (erros.length > 0) {
        adicionandoErrosHTML(erros)
        return;
    };
   


});


function pegarInputs(formulario){
    var inputs = {
        nome:form.nome.value,
        email: form.email.value,
        telefone: form.tel.value
    }
    return inputs;
};

function errosEmbranco(inputs) {
    let erros = [];

    if (inputs.nome.length == 0){
        erros.push("Nome não pode ser em branco");
    }
    if (inputs.email.length == 0) {
        erros.push("Email não pode ser em branco");
    }
    if (inputs.telefone.length == 0) {
        erros.push("Telefone não pode ser em branco");
    }
    return erros;
}

function adicionandoErrosHTML(erros) {
    var ul = document.querySelector(".ul-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent= erro;
        ul.appendChild(li);
    });

}
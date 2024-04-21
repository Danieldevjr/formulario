
function validarEmail(email) {
    // Expressão regular para validar emails
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+\.[^<>()\[\]\\.,;:\s@\"]+)|((\w+\.[^\w\-]+)@(([\w\-.]+\.)+[a-zA-Z]{2,})))$/;
    return re.test(email);
}

function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validação do campo de nome
    if (nome === "") {
        alert('Por favor, preencha o campo "Nome".');
        return false;
    }

    // Validação do campo de email
    if (!validarEmail(email)) {
        alert('Por favor, digite um email válido.');
        return false;
    }

    // Validação do campo de assunto
    if (assunto === "") {
        alert('Por favor, preencha o campo "Assunto".');
        return false;
    }

    // Validação do campo de mensagem
    if (mensagem === "") {
        alert('Por favor, preencha o campo "Mensagem".');
        return false;
    }

    // Se todos os campos estiverem válidos, envie o formulário
    return true;
}

// Adicione o evento "onsubmit" ao formulário para chamar a função validarFormulario()
document.getElementById('contatoForm').onsubmit = function () {
    return validarFormulario();
};

let botao = document.getElementById("funcao-botao");

botao.addEventListener("click", enviar);

function enviar() {
    let Nome = document.getElementById("Nome").value;
    let Idade = document.getElementById("Idade").value;
    let Email = document.getElementById("Email").value;

    function FiltroEmail() {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(Email);
    }
    //Funcionou!

    const ValidacaoEmail = (Email) => {
        if (!FiltroEmail(Email)) {
            alert("Este não é um email válido!")
            return false;
        }

        return true;
    }

    if (!ValidacaoEmail(Email)) {
        return;
    }

    console.log(Nome, Idade, Email);
    alert("Usuário confirmado! Bem-vindo(a)!");
}
let botao = document.getElementById("funcao-botao");

botao.addEventListener("click", enviar);

//console.log(dom);

function enviar() {
    let Nome = document.getElementById("Nome").value;
    let Idade = document.getElementById("Idade").value;
    let Email = document.getElementById("Email").value;

    function FiltroEmail() {
        const regexEmail = ""; //vou procurar e já volto
        return regexEmail.test(Email);
    }

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
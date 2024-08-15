let botao = document.getElementById("funcao-botao");

botao.addEventListener("click", enviar);

//console.log(dom);

function enviar() {
    let Nome = document.getElementById("Nome").value;
    let Idade = document.getElementById("Idade").value;
    let Email = document.getElementById("Email").value;

    console.log(Nome, Idade, Email)
    alert("OK!");
}
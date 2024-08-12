let botao = document.getElementById("funcao-botao");

botao.addEventListener("click", enviar);

//console.log(dom);

function enviar() {
    let Nome = document.getElementById("Nome").value;
    let Idade = document.getElementById("Idade").value;
    let CPF = document.getElementById("CPF").value;

    console.log(Nome, Idade, CPF)
    alert("OK!");
}
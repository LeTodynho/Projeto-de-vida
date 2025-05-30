const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i< botoes.length; j++){
botoes[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classlist.remove("ativo");
        textos[j].classlist.remove("ativo");
    }

    botoes[i].classlist.add("ativo");
    textos[j].classlist.remove("ativo");
}
}

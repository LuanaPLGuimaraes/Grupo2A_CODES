document.addEventListener('DOMContentLoaded', function() {

    submit = document.querySelectorAll("input")[1];
    caixa_de_texto = document.querySelectorAll("input")[0]
    lista = document.querySelector(".chat")

    submit.addEventListener('click', function(event) {
        novo_item = document.createElement("li")
        novo_item.innerHTML = caixa_de_texto.value

        lista.appendChild(novo_item)
        caixa_de_texto.value = ''
        event.preventDefault()
    });
})
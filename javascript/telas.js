document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var caixa_de_texto = document.querySelector("input[type='text']");
    var lista = document.querySelector(".chat");

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var novo_item_usuario = document.createElement("li");
        var messageContainerUsuario = document.createElement("div");
        messageContainerUsuario.className = "message_container user_message";
        messageContainerUsuario.innerHTML = caixa_de_texto.value;

        novo_item_usuario.appendChild(messageContainerUsuario);
        lista.appendChild(novo_item_usuario);

        var resposta = obterResposta(caixa_de_texto.value);
        var novo_item_resposta = document.createElement("li");
        var messageContainerBot = document.createElement("div");
        messageContainerBot.className = "message_container bot_message";
        messageContainerBot.innerHTML = resposta;

        novo_item_resposta.appendChild(messageContainerBot);
        lista.appendChild(novo_item_resposta);

        caixa_de_texto.value = '';
    });

    function obterResposta(mensagemUsuario) {
        return 'Oii, tem alg dúvida?';
    }

    lista_setas = document.querySelectorAll(".seta_index")
    video = document.querySelector(".video")


    if (lista_setas != null){
        lista_setas[1].addEventListener("click", function(event) {
            contador += 1;
            video.src = lista_videos[contador];
            if (contador > 2){
                video.src = lista_videos[2];
                contador = 2
            }
        });
    
        lista_setas[0].addEventListener("click", function(event) {
            contador -= 1;
            video.src = lista_videos[contador];
            if (contador < 0){
                video.src = lista_videos[0];
                contador = 0
            }
        });
    }

});

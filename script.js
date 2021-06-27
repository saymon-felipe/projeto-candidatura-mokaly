$("#modalPermissao").modal("show")

//FUNÇÃO IRÁ TESTAR SE O MODAL FOI CLICADO
modal = document.getElementById("modalPermissao")
modal.addEventListener("click", function() {
    $("#modalPermissao").modal("hide")
})

//FUNÇÃO QUE DESCOBRIRÁ A LARGURA DO BROWSER
function descobrirLargura() {
    return window.innerWidth
}

//FUNÇÃO PRINCIPAL
function iniciarDocumento(repetir) {

    //PEGANDO OS ELEMENTOS
    let avatar1 = document.getElementById("avatar1")
    let avatar2 = document.getElementById("avatar2")
    let avatar3 = document.getElementById("avatar3")
    let avatar4 = document.getElementById("avatar4")
    let avatar5 = document.getElementById("avatar5")
    let translate1 = document.getElementById("translateX1")
    let translate2 = document.getElementById("translateX2")
    let translate3 = document.getElementById("translateX3")
    let translate4 = document.getElementById("translateX4")
    let translate5 = document.getElementById("translateX5")

    //DEFININDO VARIÁVEIS E VETORES
    let avatares = [avatar1, avatar2, avatar3, avatar4, avatar5]
    let translate = [translate1, translate2, translate3, translate4, translate5]
    let numeros = []
    let numerosImagens = []
    let counter = 0

    //FUNÇÃO IRÁ SORTEAR OS AVATARES QUE IRÃO SER ANIMADOS
    function sortear(numero) {
        return Math.floor(Math.random() * numero)
    }

    //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES (SELEÇÃO DE ELEMENTO)
    function sortearAvatar() {
        while(numeros.length < 5) {
            x = sortear(5)
            if(numeros.indexOf(x) === -1) {
                numeros.push(x)
            }
        }
    }
    sortearAvatar()

    //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES (SELEÇÃO DAS IMAGENS)
    function sortearImagens() {
        while(numerosImagens.length < 5) {
            y = sortear(5)
            if (numerosImagens.indexOf(y) === -1) {
                numerosImagens.push(y)
            }
        }
    }
    sortearImagens()

    //FUNÇÃO PARA SORTEAR A QUANTIDADE DE PIXELS DE TRANSLATE
    function pixelsTranslate() {
        let x = sortear((descobrirLargura()-70))
        if (x < 70) {
            x += 70
        }
        return x
    }

    resetarClasses()

    //FUNÇÃO DE ANIMAÇÃO
    function startAnimation() {

        //TOCAR AUDIO, MOSTRAR BOTAO SE ANIMAÇÃO JÁ TIVER SIDO CONCLUÍDA E RESETA POSIÇÕES NO EIXO X
        if(counter >= 4) {
            setTimeout(resetaTranslateX, 2800)
            setTimeout(tocarAudio, 2800)
            setTimeout(mostrarBotao, 3600)
        }

        //TROCA DE CLASSES, IMAGENS E POSIÇÃO NO EIXO X
        if (avatares[numeros[counter]].classList == "avatar") {
            let pixels = pixelsTranslate()

            //TESTAGEM PARA SABER A LARGURA DA TELA
            if (descobrirLargura() < 768) {
                //ANIMAÇÃO PARA BAIXO
                avatares[numeros[counter]].classList.add("avatar", "animacaoBaixo")
            } else {
                pixels -= 150
                //ANIMAÇÃO PARA CIMA
                avatares[numeros[counter]].classList.add("avatar", "animacaoCima")
            }

            translate[numeros[counter]].style.transform = "translateX(" + pixels + "px)"
            avatares[numeros[counter]].src = `imagens/mokaly-avatar-cup-${numerosImagens[counter]+2}.png`
        }
        counter++

        //FUNÇÃO TIMER E ESCONDE BOTÃO
        if(counter <= 4) {
            setTimeout(startAnimation, 2000)
            esconderBotao()
        }
    }
    
    if(repetir == 0) {
        //DELAY PARA QUANDO A APLICAÇÃO É INICIADA PELA PRIMEIRA VEZ
        setTimeout(startAnimation, 4000)
    } else {
        //DELAY PARA QUANDO A APLICAÇÃO JÁ FOI INICIADA
        setTimeout(startAnimation, 100)
    }

    //FUNÇÃO IRÁ RESETAR AS CLASSES DOS AVATARES
    function resetarClasses() {
        for (i=0; i<5;i++) {
            avatares[i].classList = "avatar"
        }
    }

    //FUNÇÃO IRÁ TOCAR O AUDIO
    function tocarAudio() {
        let audio = document.querySelector("audio")
        audio.play()
    }

    //RESETA AS POSIÇÕES DOS AVATARES NO EIXO X
    function resetaTranslateX() {
        for (i=0;i<5;i++) {
            translate[numeros[i]].style.transform = "translateX(0px)"
        }
    }

    //FUNÇÃO IRÁ MOSTRAR O BOTÃO DE REPETIR ANIMAÇÃO
    function mostrarBotao() {
        botao = document.getElementById("repetirAnimacao")
        if (botao.classList == "mt-5", "botao", "d-none") {
            botao.classList.remove("mt-5", "botao", "d-none")
            botao.classList.add("mt-5", "botao", "d-block")
        }
    }

    //FUNÇÃO IRÁ ESCONDER BOTÃO DE REPETIR ANIMAÇÃO
    function esconderBotao() {
        botao = document.getElementById("repetirAnimacao")
        if (botao.classList == "mt-5", "botao", "d-block") {
            botao.classList.remove("mt-5", "botao", "d-block")
            botao.classList.add("mt-5", "botao", "d-none")
        }
    }
}

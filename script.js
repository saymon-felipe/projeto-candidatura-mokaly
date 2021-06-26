$("#modalPermissao").modal("show")

let windowWidth

//FUNÇÃO QUE DESCOBRIRÁ A LARGURA DO BROWSER
function descobrirLargura() {
    windowWidth = window.innerWidth
    return windowWidth
}

//FUNÇÃO QUE LISTA AS IMAGENS EM UM ARRAY

function iniciarDocumento(som, repetir) {

    //TESTE SE É A PRIMEIRA VEZ QUE ACONTECE ANIMAÇÕES
    if(repetir == 1) {
        //PEGANDO OS ELEMENTOS
        avatar1 = document.getElementById("avatar1")
        avatar2 = document.getElementById("avatar2")
        avatar3 = document.getElementById("avatar3")
        avatar4 = document.getElementById("avatar4")
        avatar5 = document.getElementById("avatar5")

        //DEFININDO VARIÁVEIS
        let avatares = [avatar1, avatar2, avatar3, avatar4, avatar5]
        imagens = ["imagens/mokaly-avatar-cup-2.png", "imagens/mokaly-avatar-cup-3.png", "imagens/mokaly-avatar-cup-4.png", "imagens/mokaly-avatar-cup-5.png", "imagens/mokaly-avatar-cup-6.png" ]
        console.log(imagens)
        let numeros = []
        let numerosImagens = []
        let x
        let y

        //FUNÇÃO IRÁ SORTEAR OS AVATARES QUE IRÃO SER ANIMADOS
        function sortear() {
            return Math.floor(Math.random() * 5)
        }

        //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES (SELEÇÃO DE ELEMENTO)
        function sortearAvatar() {
            while(numeros.length < 5) {
                x = sortear()
                if(numeros.indexOf(x) === -1) {
                    numeros.push(x)
                }
            }
            console.log(numeros)
        }
        sortearAvatar()

        //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES (SELEÇÃO DAS IMAGENS)
        function sortearImagens() {
            while(numerosImagens.length < 5) {
                y = sortear()
                if (numerosImagens.indexOf(y) === -1) {
                    numerosImagens.push(y)
                }
            }
            console.log(numerosImagens)
        }
        sortearImagens()

        let counter = 0
        resetarClasses()
        function startAnimation() {
            if (descobrirLargura() >= 768) {
                //ANIMAÇÃO PARA CIMA

                //TOCAR AUDIO E MOSTRAR BOTAO
                if(counter+1 >= 6) {
                    if (som == 1) {
                        setTimeout(tocarAudio, 1000)
                    }
                    setTimeout(mostrarBotao, 2000)
                }

                //TROCA DE CLASSES E IMAGENS
                if (avatares[numeros[counter]].classList == "avatar") {
                    avatares[numeros[counter]].classList.add("avatar", "animacaoCima")
                    avatares[numeros[counter]].src = `imagens/mokaly-avatar-cup-${numerosImagens[counter]+2}.png`
                }
                counter++

                //FUNÇÃO TIMER E ESCONDE BOTÃO
                if(counter <= 5) {
                    setTimeout(startAnimation, 2000)
                    esconderBotao()
                }

            } else {
                //ANIMAÇÃO PARA BAIXO

                //TOCAR AUDIO E MOSTRAR BOTAO
                if(counter+1 >= 6) {
                    if (som == 1) {
                        setTimeout(tocarAudio, 1000)
                    }
                    setTimeout(mostrarBotao, 2000)
                } 

                //TROCA DE CLASSES E IMAGENS
                if (avatares[numeros[counter]].classList == "avatar") {
                    avatares[numeros[counter]].classList.add("avatar", "animacaoBaixo")
                    avatares[numeros[counter]].src = `imagens/mokaly-avatar-cup-${numerosImagens[counter]+2}.png`
                }
                counter++

                //FUNÇÃO TIMER E ESCONDE BOTÃO
                if(counter <= 5) {
                    setTimeout(startAnimation, 2000)
                    esconderBotao()
                }
            }
        }
        
        //CHAMADA DA FUNÇÃO DE ANIMAÇÃO
        setTimeout(startAnimation, 100)

        //FUNÇÃO IRÁ RESETAR AS CLASSES
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

    } else {
        //PEGANDO OS ELEMENTOS
        avatar1 = document.getElementById("avatar1")
        avatar2 = document.getElementById("avatar2")
        avatar3 = document.getElementById("avatar3")
        avatar4 = document.getElementById("avatar4")
        avatar5 = document.getElementById("avatar5")

        //DEFININDO VARIÁVEIS
        let avatares = [avatar1, avatar2, avatar3, avatar4, avatar5]
        imagens = ["imagens/mokaly-avatar-cup-2.png", "imagens/mokaly-avatar-cup-3.png", "imagens/mokaly-avatar-cup-4.png", "imagens/mokaly-avatar-cup-5.png", "imagens/mokaly-avatar-cup-6.png" ]
        console.log(imagens)
        let numeros = []
        let numerosImagens = []
        let x
        let y

        //FUNÇÃO IRÁ SORTEAR OS AVATARES QUE IRÃO SER ANIMADOS
        function sortear() {
            return Math.floor(Math.random() * 5)
        }

        //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES
        function sortearAvatar() {
            while(numeros.length < 5) {
                x = sortear()
                if(numeros.indexOf(x) === -1) {
                    numeros.push(x)
                }
            }
        }
        sortearAvatar()

        //FUNÇÃO IRÁ ARMAZENAR OS VALORES SORTEADOS PARA QUE NÃO HAJA REPETIÇÕES (SELEÇÃO DAS IMAGENS)
        function sortearImagens() {
            while(numerosImagens.length < 5) {
                y = sortear()
                if (numerosImagens.indexOf(y) === -1) {
                    numerosImagens.push(y)
                }
            }
            console.log(numerosImagens)
        }
        sortearImagens()

        let counter = 0
        resetarClasses()
        function startAnimation() {
            if (descobrirLargura() >= 768) {
                //ANIMAÇÃO PARA CIMA

                //TOCAR AUDIO E MOSTRAR BOTAO
                if(counter+1 >= 6) {
                    if (som == 1) {
                        setTimeout(tocarAudio, 1000)
                    }
                    setTimeout(mostrarBotao, 2000)
                } 

                //TROCA DE CLASSES E IMAGENS
                if (avatares[numeros[counter]].classList == "avatar") {
                    avatares[numeros[counter]].classList.add("avatar", "animacaoCima")
                    avatares[numeros[counter]].src = `imagens/mokaly-avatar-cup-${numerosImagens[counter]+2}.png`
                }
                counter++

                //FUNÇÃO TIMER E ESCONDE BOTÃO
                if(counter <= 5) {
                    setTimeout(startAnimation, 2000)
                    esconderBotao()
                }

            } else {
                //ANIMAÇÃO PARA BAIXO

                //TOCAR AUDIO E MOSTRAR BOTAO
                if(counter+1 >= 6) {
                    if (som == 1) {
                        setTimeout(tocarAudio, 1000)
                    }
                    setTimeout(mostrarBotao, 2000)
                } 

                //TROCA DE CLASSES E IMAGENS
                if (avatares[numeros[counter]].classList == "avatar") {
                    avatares[numeros[counter]].classList.add("avatar", "animacaoBaixo")
                    avatares[numeros[counter]].src = `imagens/mokaly-avatar-cup-${numerosImagens[counter]+2}.png`
                }
                counter++

                //FUNÇÃO TIMER E ESCONDE BOTÃO
                if(counter <= 5) {
                    setTimeout(startAnimation, 2000)
                    esconderBotao()
                }
            }
        }
        
        //CHAMADA DA FUNÇÃO DE ANIMAÇÃO
        setTimeout(startAnimation, 4000)

        //FUNÇÃO IRÁ RESETAR AS CLASSES
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
}

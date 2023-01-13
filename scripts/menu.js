var menu = document.querySelector(".menu-aberto")
var lMenuCima = document.getElementById("lCimaMenuIndicador")
var lMenuMeio = document.getElementById("lMeioMenuIndicador")
var lMenuBaixo = document.getElementById("lBaixoMenuIndicador")


const mudarRotacao = (elemento, rotacao) => {
  elemento.style.rotate = `${rotacao}deg`
}

const mudarPosicaoTop = (elemento, top) => {
  elemento.style.top = `${top}%`
}

const mudarVisualizacao = (elemento, display) => {
  elemento.style.display = `${display}`
}

const funcMenu = () => {
  if (lMenuCima.style.rotate == "0deg" && lMenuBaixo.style.rotate == "0deg" ) {
    // Rotaçao das linhas quando o meu esta aberto
    mudarRotacao(lMenuCima, 45)
    mudarRotacao(lMenuBaixo, 315)

    // Possicionamento das linha quando o menu esta aberto
    mudarPosicaoTop(lMenuCima, 50)
    mudarPosicaoTop(lMenuBaixo, 50)

    // Aparecimento do menu
    mudarVisualizacao(menu, "block")

    // Desaparecimento da linha do meio
    mudarVisualizacao(lMenuMeio, "none")

  } else {
    // Rotaçao padrão das linhas
    mudarRotacao(lMenuCima, 0)
    mudarRotacao(lMenuBaixo, 0)

    // Possicionamento padrão das linha
    mudarPosicaoTop(lMenuCima, 40)
    mudarPosicaoTop(lMenuBaixo, 60)    

    // Desaparecimento do menu
    mudarVisualizacao(menu, "none")

   // Aparecimento da linha do meio
   mudarVisualizacao(lMenuMeio, "block")
  }
}

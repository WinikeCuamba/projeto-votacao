var menu = document.querySelector(".menu-aberto")
var menuIndicador = document.querySelector("#menuIndicador")
var lMenuCima = document.getElementById("lCimaMenuIndicador")
var lMenuBaixo = document.getElementById("lBaixoMenuIndicador")

const funcMenu = () => {
  if (lMenuCima.style.rotate == "0deg" && lMenuBaixo.style.rotate == "0deg" ) {
    // Rotaçao das linhas quando o meu esta aberto
    lMenuCima.style.rotate = "45deg"
    lMenuBaixo.style.rotate = "315deg"

    // Possicionamento das linha quando o menu esta aberto
    lMenuCima.style.top = "50%"
    lMenuBaixo.style.top = "50%"

    // Aparecimento do menu
    menu.style.display = "block"
  } else {
    // Rotaçao padrão das linhas
    lMenuCima.style.rotate = "0deg"
    lMenuBaixo.style.rotate = "0deg"

    // Possicionamento padrão das linha
    lMenuCima.style.top = "60%"
    lMenuBaixo.style.top = "40%"

    // Desaparecimento do menu
    menu.style.display = "none"

  }

}

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Space Color</title>
    <link rel = "icon" href = "https://github.com/WerikTo/Space_Color/issues/2#issue-1859258890" type = "image/x-icon">
    <link rel="stylesheet" href="spacecolor.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="spacecolor.js" defer></script>
  </head>
  <body>
    <div class="container">
      <section class="tools-board">
        <div class="row">
          <label class="title">Formas</label>
          <ul class="options">
            <li class="option tool" id="rectangle">
              <img src="https://github.com/WerikTo/Space_Color/issues/6#issue-1859271936" height="22" width="22" alt="forma de retangulo">
              <span>Quadrado</span>
            </li>
            <li class="option tool" id="circle">
              <img src="https://github.com/WerikTo/Space_Color/issues/11#issue-1859275733" height="22" width="22" alt="forma de circulo">
              <span>Círculo</span>
            </li>
            <li class="option tool" id="triangle">
              <img src="https://github.com/WerikTo/Space_Color/issues/1#issue-1859258098" height="22" width="22" alt="forma de triangulo">
              <span>Triângulo</span>
            </li>
            <li class="option">
              <input type="checkbox" id="fill-color">
              <label for="fill-color">Preenchimento</label>
            </li>
          </ul>
        </div>
        <div class="row">
          <label class="title">Opções</label>
          <ul class="options">
            <li class="option active tool" id="brush" name="borracha">
              <img src="https://github.com/WerikTo/Space_Color/issues/7#issue-1859272423" height="22" width="22" alt="caixa de seleção de pincel">
              <span>Pincél</span>
            </li>
            <li class="option tool" id="eraser">
              <img src="https://github.com/WerikTo/Space_Color/issues/12#issue-1859276178" height="22" width="22" alt="caixa de seleção de borracha">
              <span>Borracha</span>
            </li>
            <li class="option">
              <input type="range" id="size-slider" min="1" max="30" value="5">
            </li>
          </ul>
        </div>
        <div class="row colors">
          <label class="title">Cores</label>
          <ul class="options">
            <li class="option"></li>
            <li class="option selected"></li>
            <li class="option"></li>
            <li class="option"></li>
            <li class="option">
              <input type="color" id="color-picker" value="#4A98F7">
            </li>
          </ul>
        </div>
        <div class="row buttons">
          <button class="clear-canvas">Limpar tela</button>
          <button class="save-img">Salvar imagem</button>
        </div>
      </section>
      <section class="drawing-board">
        <canvas></canvas>
      </section>
    </div>
    <div id="container_astronauta">
      <img src="https://github.com/WerikTo/Space_Color/issues/14#issue-1859405584 alt="imagem de astronauta" id="astronauta../html/src/img/astronauta.png"">
    </div>
  </body>
</html>

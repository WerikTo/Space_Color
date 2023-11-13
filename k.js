function pesquisa() {
    var personagem = document.getElementById("Campo").value;
    if (personagem == "mercurio") {
      document.getElementById("resultado").innerHTML =
      "<img src=https://user-images.githubusercontent.com/115472908/282481158-825141dc-a6dc-4b69-8025-6bd76ab03d1c.jpg>Mercúrio é o planeta mais próximo ao Sol e o oitavo em tamanho no sistema solar. A distância média é de 57,9 milhões de quilômetros do Sol. É basicamente constituído por ferro, sendo chamado por Iron Planet. Pode ser visto da Terra a olho nu, contudo pouco antes do amanhecer e instantes após o anoitecer porque sua proximidade com o Sol dificulta a observação. Já era observado a 3 mil anos a.C. e recebeu dos gregos dois nomes: Apolo, por sua aparição matutina e Hermes, a estrela da noite. Devido à sua velocidade, foi batizado com o nome de Mercúrio por ser o deus do comércio, das viagens e da malandragem. É o planeta mais rápido do Sistema Solar, perfazendo 47,87 quilômetros por segundo ao redor do Sol. A superfície é semelhante à da Lua, rochosa e com diversas crateras.";
    } else if (personagem == "venus") {
      document.getElementById("resultado").innerHTML =
        "<img src=https://user-images.githubusercontent.com/115472908/282481477-04ad1011-8d88-49c9-97f5-ef05836ea106.jpg>Vênus é o segundo planeta do sistema Solar mais próximo do Sol. Tem cerca de 800 milhões de anos e além do Sol e da Lua é o corpo celeste mais brilhante no céu, motivo pelo qual é conhecido desde a antiguidade. Também chamado de Estrela Dalva, estrela da manhã, estrela da tarde e joia do céu, é considerado um planeta irmão da Terra. Isso decorre em virtude das similaridades de massa, densidade e volume entre ambos.";
    } else if (personagem == "terra") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == "marte") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == "") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == "") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if ((personagem == "") | (personagem == "")) {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == "") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == "") {
      document.getElementById("resultado").innerHTML =
        "";
    } else if (personagem == ""){
      document.getElementById("resultado").innerHTML = 
      "";
    } else {
      document.getElementById("resultado").innerHTML =
        "Não registrado em nosso sistema.";
    }
  }

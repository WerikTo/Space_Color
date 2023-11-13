function pesquisa() {
    var personagem = document.getElementById("Campo").value;
    if (personagem == "mercurio") {
      document.getElementById("resultado").innerHTML =
      "<img src=https://user-images.githubusercontent.com/115472908/282547205-9c6faaec-ed36-4e40-a2ac-402c05646caf.png> Mercúrio é o planeta mais próximo ao Sol e o oitavo em tamanho no sistema solar. A distância média é de 57,9 milhões de quilômetros do Sol. É basicamente constituído por ferro, sendo chamado por Iron Planet. Pode ser visto da Terra a olho nu, contudo pouco antes do amanhecer e instantes após o anoitecer porque sua proximidade com o Sol dificulta a observação. Já era observado a 3 mil anos a.C. e recebeu dos gregos dois nomes: Apolo, por sua aparição matutina e Hermes, a estrela da noite. Devido à sua velocidade, foi batizado com o nome de Mercúrio por ser o deus do comércio, das viagens e da malandragem. É o planeta mais rápido do Sistema Solar, perfazendo 47,87 quilômetros por segundo ao redor do Sol. A superfície é semelhante à da Lua, rochosa e com diversas crateras.";
    } else if (personagem == "venus") {
      document.getElementById("resultado").innerHTML =
        "<https://user-images.githubusercontent.com/115472908/282547865-08605518-83fc-4e54-9f34-25fe7d28e6d6.png> Vênus é o segundo planeta do sistema Solar mais próximo do Sol. Tem cerca de 800 milhões de anos e além do Sol e da Lua é o corpo celeste mais brilhante no céu, motivo pelo qual é conhecido desde a antiguidade. Também chamado de Estrela Dalva, estrela da manhã, estrela da tarde e joia do céu, é considerado um planeta irmão da Terra. Isso decorre em virtude das similaridades de massa, densidade e volume entre ambos.";
    } else if (personagem == "terra") {
      document.getElementById("resultado").innerHTML =
        "<img src=https://user-images.githubusercontent.com/115472908/282549211-b9cc982b-f700-49e4-8ea9-f78d55693c55.png> Segundo os estudos, a Terra se formou há 4,56 bilhões de anos. Inicialmente, o planeta chamado de Proto-Terra sofria com diversas colisões de outros astros que vagavam pelo universo, como a Terra. Uma dessas colisões teria sido a responsável pela formação da Lua. Nesse primeiro momento, a Terra encontrava-se envolta em gás e com uma intensa atividade vulcânica. Ao longo de todo um processo de resfriamento, tornou-se possível a formação da crosta terrestre. O arrefecimento do novo planeta tornou possível a presença de água em estado líquido e, consequentemente, a formação dos oceanos. Desse modo, concluiu-se o processo de formação do planeta Terra, há 4 bilhões de anos.";
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

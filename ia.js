//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var messages = [], //matriz que mantém o registro de cada cadeia de caracteres no bate-papo
  lastUserMessage = "", //mantém o controle da cadeia de entrada mais recente do usuário
  botMessage = "", //VAR acompanha o que o chatbot vai dizer
  botName = "Roberto", //nome do chatbot
  talking = true; //quando falso, a função de fala não funciona

//Edite esta função para alterar o que o chatbot diz
function chatbotResponse() {
  talking = true;
  botMessage = "Não entendi"; //A mensagem padrão

  if (lastUserMessage === "oi" || lastUserMessage == "ola") {
    const oi = ["Como posso ajudar?"];
    botMessage = oi[Math.floor(Math.random() * oi.length)];
  }

  if (lastUserMessage === "nome") {
    botMessage = "Meu nome é " + botName;
  }

  if (lastUserMessage === "como desenhar") {
    botMessage = "Muito bem, siga as instruções para saber como começar a pintar: Para começar, clique no botão Pintar que se encontra no centro da tela inicial. Logo após você será direcionado ao planeta da criatividade, clique na cor que desejar e comece a desenhar na tela. Você pode escolher formas geométricas, e todas as cores que quiser para fazer seus desenhos. Também estão disponíveis desenhos já prontos para quem deseja apenas colorir, eles estão acompanhados de informações divertidas sobre esse vasto universo! Para acessá-los, clique no botão Desenhos. Quando terminar sua pintura, você pode baixá-la clicando no botão Salvar imagem. Partiu tripulantes! Caso tenha mais dúvidas, pergunte aos seus pais ou responsáveis ou professor(a), ou nos envie um e-mail.";
  }
}

//Isso é executado sempre que Enter é pressionado.
//Controla a entrada e saída geral
function newEntry() {
  //Se a mensagem do usuário não estiver vazia, execute
  if (document.getElementById("chatbox").value != "") {
    //extrai o valor da caixa de bate-papo e o define como lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //Define a caixa de bate-papo para ser clara(limpa)
    document.getElementById("chatbox").value = "";
    //Adiciona o valor da caixa de bate-papo às mensagens da matriz
    messages.push(lastUserMessage);
    //Fala(Speech)(lastUserMessage);  //diz o que o usuário digitou em voz alta
    //define a variável botMessage em resposta a lastUserMessage
    chatbotResponse();
    //Adiciona o nome e a mensagem do chatbot às mensagens do array
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // diz a mensagem usando a função de conversão de texto em fala escrita abaixo
    Speech(botMessage);
    //Gera a saída dos últimos elementos de matriz das mensagens para HTML
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML =
          messages[messages.length - i];
    }
  }
}

//texto para Fala(Speech)
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ("speechSynthesis" in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Nota: algumas vozes não suportam a alteração de parâmetros
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//Executa a função keypress() quando uma tecla é pressionada
document.onkeypress = keyPress;
//se a tecla pressionada for 'enter' executa a função newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key == 13 || key == 3) {
    //Executa esta função quando Enter é pressionado
    newEntry();
  }
  if (key == 38) {
    console.log("oi");
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//Limpa o texto do espaço reservado na caixa de bate-papo
//Esta função é definida para ser executada quando os usuários trazem o foco para a caixa de bate-papo, clicando nela
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

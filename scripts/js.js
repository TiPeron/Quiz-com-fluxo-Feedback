const fluxo = {
  Q1N1: { correta: "Q2N2", incorreta: "Q2N1" },
  Q2N2: { correta: "Q3N2", incorreta: "Q3N1" },
  Q2N1: { correta: "texto2", incorreta: "texto1" },
  Q3N2: { correta: "texto3", incorreta: "texto4" },
  Q3N1: { correta: "texto4", incorreta: "texto5" }
};

//Objeto de fluxo descrito no documento

const perguntas = {
  Q1N1: {
    enunciado: "(FATEC-SP/2011) O monitoramento da qualidade do ar em São Paulo é realizado, diariamente, pela CETESB (Companhia Ambiental do Estado de São Paulo), a fim de determinar o nível de concentração de um grupo de poluentes universalmente consagrados como indicadores. Esses indicadores foram selecionados devido à sua maior frequência na atmosfera e também devido aos efeitos adversos que causam ao meio ambiente. Para cada um deles, foram definidos padrões de qualidade do ar, ou seja, limites máximos de concentração que, quando ultrapassados, podem afetar a saúde, a segurança e o bem-estar da população, bem como ocasionar danos ao meio ambiente em geral. Assim, por exemplo, o estudo de um desses indicadores demonstrou que não se devem deixar veículos com o motor em funcionamento em ambientes pouco ventilados, como garagens fechadas e túneis sem circulação adequada de ar, porque ele se combina com moléculas de hemoglobina, inutilizando-as irreversivelmente para o transporte de oxigênio. Esse indicador é um gás inodoro representado pela fórmula molecular:",
    opcoes: ["a) CO2", "b) CO"],
    correta: 1
  },
  Q2N2: {
    enunciado: "(CEFETSP-SP/2001) MEDIDA É COMUM PARA CONTER POLUIÇÃO: Em muitos países, restrição à circulação é adotada para garantir a qualidade do ar – O rodízio de veículos é uma medida adotada em várias cidades do mundo como forma de diminuir os efeitos da emissão de poluentes e melhorar a qualidade do ar. A melhoria do trânsito, na maioria dos países onde a restrição foi adotada, é um dado acessório, conseqüência da preocupação ambiental. (O Estado de São Paulo, 26/05/2001). Entre os poluentes nocivos a que se refere o texto acima e que tem origem nos escapamentos dos veículos, destaca(m) se principalmente: ",
    opcoes: ["a) o oxigênio por ser absorvido pelos pulmões do homem, originando oxi-hemoglobina e radicais livres.", "b) o monóxido de carbono que, ao se combinar com a hemoglobina, originam compostos estáveis sendo, portanto, altamente tóxico.",],
    correta: 1
  },
  Q2N1: {
    enunciado: "(GOWDAK/1990) Nas áreas de intenso movimento de veículos, as grandes cidades, há dias em que muitas pessoas sentem tonturas, lacrimejamento, náusea e dor de cabeça. O principal poluente responsável por esses sintomas é: ",
    opcoes: ["a) o CO", "b) o CH4"],
    correta: 0
  },
  Q3N2: {
    enunciado: ". (USCS-SP/2014) Engarrafamentos em túneis com alta circulação de veículos automotivos ou incêndios são situações que podem causar danos à saúde humana, sobretudo, devido à inalação do gás monóxido de carbono (CO). Esse gás é tóxico porque, ao ser inalado,",
    opcoes: ["a) reage com a molécula de hemoglobina e forma um composto estável, que dificulta a captação de gás O2 e a eliminação de gás CO2, podendo causar asfixia.", "a) reage com a molécula de hemoglobina e forma um composto instável, que deixa o pH do sangue ácido, danificando o bulbo e levando à morte por parada cardiorrespiratória.",],
    correta: 0
  },
  Q3N1: {
    enunciado: "O poluente monóxido de carbono (CO) é perigoso por: ",
    opcoes: ["a) produzir enfisema pulmonar. ", "b) reduzir sensivelmente a capacidade do sangue em transportar oxigênio."],
    correta: 1

  
  }
};

//objeto de perguntas aleatorias para compreensao do codigo. 
//Obs importante: "correta 0(1)" define a resposta correta,
//sendo 0 a primeira e 1 a segunda


let perguntaAtual = "Q1N1";

//Questao em que o usuario esta, definida em uma variavel

function carregarPergunta(codigo) {
  const pergunta = perguntas[codigo];
  document.getElementById("enunciado").textContent = pergunta.enunciado;
  const opcoesEl = document.getElementById("opcoes");
  opcoesEl.innerHTML = "";

  pergunta.opcoes.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "opcao";
    btn.textContent = texto;
    btn.onclick = () => proximaEtapa(i === pergunta.correta);
    opcoesEl.appendChild(btn);
  });
}

//Pega o enunciado e opções da pergunta atual;
//Cria botões com as alternativas;
//Define o que acontece ao clicar (verifica se está certo ou errado).



function proximaEtapa(acertou) {
  const proximo = fluxo[perguntaAtual][acertou ? "correta" : "incorreta"];

  if (proximo.startsWith("Q")) {
    perguntaAtual = proximo;
    carregarPergunta(proximo);
  } else {
    mostrarTextoFinal(proximo);
  }
}

//Usa o fluxo para saber qual é a próxima pergunta (ou texto final);
//Se for outra pergunta (Q...), chama carregarPergunta;
//Se for texto..., vai para a função mostrarTextoFinal.

function mostrarTextoFinal(chaveTexto) {
    localStorage.setItem("mensagemFinal", chaveTexto);
    window.location.href = "pagina-final.html";
  }


//Salva o resultado do quiz para usar em outras partes do script futuramente
//Manda o usuario para pagina final para o seu feedback

carregarPergunta(perguntaAtual);
// Inicia o quiz
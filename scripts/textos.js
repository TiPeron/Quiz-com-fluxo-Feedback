const pontuacao = parseInt(localStorage.getItem("pontuacaoFinal")) || 0;
  const chaveMensagem = localStorage.getItem("mensagemFinal") || "texto1";

  //pega a pontuação final que foi salva no localStorage.
  //localStorage.getItem("pontuacaoFinal") → busca o valor salvo com essa chave.
  //parseInt(...) → converte o valor (que vem como string) para número.
  //0 → se não tiver nada salvo (ou for inválido), assume 0 como padrão.
  //Vai buscar a chave que identifica qual texto deve ser exibido.

  const textos = {
    texto1: "Você pode aperfeiçoar seus estudos; principalmente nos significados dos conceitos e sua aplicação conceitual envolvendo o Monóxido de Carbono.",
    texto2: "É importante rever os conceitos e a aplicação dos conceitos referente ao monóxido de carbono.",
    texto3: "Parabéns, você pode ter compreendido os conceitos aplicados aos efeitos do Monóxido de carbono como poluente. Acertou todas as questões.",
    texto4: "Interessante, pode ser que tenha certa dificuldade na interpretação do enunciado. Você acertou duas das três questões.",
    texto5: "É recomendado rever os conceitos aplicados ao monóxido de carbono como poluente atmosférico e suas consequências fisiológicas."
  };

  //Objeto textos

  const mensagemEl = document.getElementById("mensagemFinal");

  //Procura no HTML um elemento com id="mensagemFinal".


  mensagemEl.textContent = textos[chaveMensagem];

  //Usa chaveMensagem (ex: "texto3") para buscar no objeto textos.

  //Depois coloca o conteúdo encontrado dentro do elemento mensagemFinal do HTML.

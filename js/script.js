let img = window.document.getElementById("imagem");
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correta: "0",
};

const q1 = {
  numQuestao: 1,
  pergunta: "Qual foi o último ano que Taylor Swift veio ao Brasil?",
  alternativaA: "2011",
  alternativaB: "2012",
  alternativaC: "2013",
  alternativaD: "2014",
  correta: "2012",
};

const q2 = {
  numQuestao: 2,
  pergunta:
    "Quanto é o valor da fortuna da gata da cantora Taylor Swift, Olivia Benson?",
  alternativaA: "$ 97 milhões",
  alternativaB: "$ 98 milhões",
  alternativaC: "$ 99 milhões",
  alternativaD: "$ 100 milhões",
  correta: "$ 97 milhões",
};

const q3 = {
  numQuestao: 3,
  pergunta:
    "Complete a frase da música 'A Place In This World': 'Feeling lucky today, got the _____'.",
  alternativaA: "happiness",
  alternativaB: "power",
  alternativaC: "love",
  alternativaD: "sunshine",
  correta: "sunshine",
};

const q4 = {
  numQuestao: 4,
  pergunta:
    "Complete a frase da música 'White Horse': 'I never really had a _____'.",
  alternativaA: "choice",
  alternativaB: "option",
  alternativaC: "chance",
  alternativaD: "opportunity",
  correta: "chance",
};

const q5 = {
  numQuestao: 5,
  pergunta: "Quantos videoclipes Taylor Swift tem?",
  alternativaA: "43",
  alternativaB: "45",
  alternativaC: "52",
  alternativaD: "55",
  correta: "45",
};

const q6 = {
  numQuestao: 6,
  pergunta: "Quantos singles promocionais Taylor Swift possui?",
  alternativaA: "16",
  alternativaB: "17",
  alternativaC: "18",
  alternativaD: "19",
  correta: "19",
};

const q7 = {
  numQuestao: 7,
  pergunta:
    "Complete a frase da música 'Dress': 'All of this silence and ____'.",
  alternativaA: "patience",
  alternativaB: "persistence",
  alternativaC: "peace",
  alternativaD: "tranquility",
  correta: "patience",
};

const q8 = {
  numQuestao: 8,
  pergunta:
    "Complete a frase da música 'The Archer': 'Who could ever leave me, ____'",
  alternativaA: "dear",
  alternativaB: "sweet",
  alternativaC: "darling",
  alternativaD: "beloved",
  correta: "darling",
};

const q9 = {
  numQuestao: 9,
  pergunta: "Quantos prêmios Taylor Swift possui?",
  alternativaA: "443",
  alternativaB: "458",
  alternativaC: "465",
  alternativaD: "474",
  correta: "458",
};

const q10 = {
  numQuestao: 10,
  pergunta: "Quantas collabs Taylor Swift tem?",
  alternativaA: "19",
  alternativaB: "23",
  alternativaC: "25",
  alternativaD: "27",
  correta: "27",
};

const q11 = {
  numQuestao: 11,
  pergunta: "Quantas participações de filmes/séries Taylor Swift fez?",
  alternativaA: "10",
  alternativaB: "11",
  alternativaC: "12",
  alternativaD: "13",
  correta: "11",
};

const q12 = {
  numQuestao: 12,
  pergunta: "Complete a frase da música 'hoax': 'You have ____ my heart'.",
  alternativaA: "beaten",
  alternativaB: "all",
  alternativaC: "not",
  alternativaD: "forever",
  correta: "beaten",
};

const q13 = {
  numQuestao: 13,
  pergunta:
    "Complete a frase da música 'closure': 'Some situation that needs to be ____'.",
  alternativaA: "finished",
  alternativaB: "closed",
  alternativaC: "handled",
  alternativaD: "fixed",
  correta: "handled",
};

const q14 = {
  numQuestao: 14,
  pergunta:
    "Complete a frase da música 'Holy Ground (Taylor's Version)': 'And for the first time I had something to ____'.",
  alternativaA: "say",
  alternativaB: "do",
  alternativaC: "make",
  alternativaD: "lose",
  correta: "lose",
};

const q15 = {
  numQuestao: 15,
  pergunta:
    "Complete a frase da música 'Picture To Burn': 'Would be bad for your ____'.",
  alternativaA: "head",
  alternativaB: "health",
  alternativaC: "sanity",
  alternativaD: "reputation",
  correta: "health",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativaA;
  b.textContent = questoes[nQuestao].alternativaB;
  c.textContent = questoes[nQuestao].alternativaC;
  d.textContent = questoes[nQuestao].alternativaD;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
  c.setAttribute("value", nQuestao + "C");
  d.setAttribute("value", nQuestao + "D");
}

function bloquearAlternativas() {
  a.classList.add("bloqueado");
  b.classList.add("bloqueado");
  c.classList.add("bloqueado");
  d.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  a.classList.remove("bloqueado");
  b.classList.remove("bloqueado");
  c.classList.remove("bloqueado");
  d.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta;
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10; // pontos = pontos + 10
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
  }

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Score: " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    //respostaEsta.textContent = '...'
    proxima = numeroDaQuestao + 1;

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 250);
  desbloquearAlternativas();
}

function reiniciarQuiz() {
  pontos = 0; // Zerar os pontos
  proximaQuestao(1); // Reiniciar o quiz começando pela primeira questão
  instrucoes.textContent = ""; // Limpar a mensagem de fim de jogo
  articleQuestoes.style.display = "block"; // Exibir novamente o article das questões
  document.getElementById("btn-reiniciar").style.display = "none"; // Ocultar o botão de reiniciar
}

function fimDoJogo() {
  instrucoes.textContent = "Fim de Jogo!";
  numQuestao.textContent = "";

  let pont = "";
  pontos == 0 ? (pont = "ponto") : (pont = "pontos");

  pergunta.textContent = "Você conseguiu: " + pontos + " " + pont;

  //aviso.textContent = "Você conseguiu: " + pontos + " " + pont;

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  document.getElementById("btn-reiniciar").style.display = "block";
}

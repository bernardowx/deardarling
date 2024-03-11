

const elementoTitulo = document.querySelector(".titulo");
const containerBotoes = document.querySelector(".botoes");
const botaoSim = document.querySelector(".btn--sim");
const botaoNao = document.querySelector(".btn--nao");
const imgGato = document.querySelector(".img-gato");

const MAX_IMAGENS = 5;

let jogando = true;
let contadorNao = 0;

botaoSim.addEventListener("click", lidarComCliqueSim);

botaoNao.addEventListener("click", function () {
  if (jogando) {
    contadorNao++;
    const indiceImagem = Math.min(contadorNao, MAX_IMAGENS);
    alterarImagem(indiceImagem);
    redimensionarBotaoSim();
    atualizarTextoBotaoNao();
    if (contadorNao === MAX_IMAGENS) {
      jogando = false;
    }
  }
});

function lidarComCliqueSim() {
  elementoTitulo.innerHTML = "Yayyy!! :3";
  containerBotoes.classList.add("escondido");
  alterarImagem("sim");
}

function redimensionarBotaoSim() {
  const estiloCalculado = window.getComputedStyle(botaoSim);
  const tamanhoFonte = parseFloat(estiloCalculado.getPropertyValue("font-size"));
  const novoTamanhoFonte = tamanhoFonte * 1.6;

  botaoSim.style.fontSize = `${novoTamanhoFonte}px`;
}

function gerarMensagem(contadorNao) {
  const mensagens = [
    "Não",
    "Tem certeza?",
    "Por favor, Pookie",
    "Não faça isso comigo :(",
    "Você está partindo meu coração",
    "Vou chorar...",
  ];

  const indiceMensagem = Math.min(contadorNao, mensagens.length - 1);
  return mensagens[indiceMensagem];
}

function alterarImagem(imagem) {
  imgGato.src = `img/gato-${imagem}.jpg`;
}

function atualizarTextoBotaoNao() {
  botaoNao.innerHTML = gerarMensagem(contadorNao);
}
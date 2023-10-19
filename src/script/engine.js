const emojis = [
    "🍇",
    "🍇",
    "🍉",
    "🍉",
    "🥑",
    "🥑",
    "🥕",
    "🥕",
    "🥥",
    "🥥",
    "🌽",
    "🌽",
    "🍌",
    "🍌",
    "🍎",
    "🍎",
]
let opemCards = []
// a variavel shuffleEmojis vai receber os itens da variavel emojis sorteados (.sort())
// dentro do sorteio ele vai receber um número aleatório com a Math.random
// vai ter a condição de IF TERNÁRIO (condição ? expressão 1 (quando a condição for true) : expressão 2(quando a condição for false))
// no caso vai verificar se o número aleatório vai ser maior que 0.5
// caso sim ele vai receber a posição 2 caso não ele recebe a posição -1
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0 ; i < emojis.length; i++) {
    // criando uma div 
    let box = document.createElement("div");
    // adicionando uma classe .item na div criada
    box.className = "item";
    // colocando dentro da div um elemento que é o emoji ja embaralhado
    box.innerHTML = shuffleEmojis[i];
    // cada vez que ouver um clique vai chamar a função handleClick()
    box.onclick = handleClick;
    
    
    // indo na tag do documento HTML com a classe .game usando o querySelector()
    // adicionando em um filho usando o appendChild()
    // o filho que vai ser addicionado é uma div(que no caso é o box que criamos acima)
    document.querySelector(".game").appendChild(box)

}


function handleClick() {
    if(opemCards.length < 2 ) {
        // adicionando a .boxOpen para o elemento que recebu o clique
        this.classList.add("boxOpen");
        // adicionando a carta aberta em opemCards
        opemCards.push(this)
    }

    if(opemCards.length == 2) {
        // caso tenha 2 cartas clicadas vai checar se são iguais
        // a verificação vai durar 500 milisegundos
        setTimeout(checkMatch, 500);
    }

    console.log(opemCards);
}

function checkMatch() {
    // verificando se a carta selecionada são iguais dentro do HTML
    if(opemCards[0].innerHTML === opemCards[1].innerHTML) {
        opemCards[0].classList.add("boxMatch");
        opemCards[1].classList.add("boxMatch");

    } else{
        opemCards[0].classList.remove("boxOpen");
        opemCards[1].classList.remove("boxOpen");
        }

    opemCards = []
}
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
/*
Função abaixo é para adicionar e remover a classe depois que apertar o kaydown(seta para cima)
sendo assim, depois de 1200s ele remove, podendo ir lá e add novamente.
*/
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1200);
}

/*
a função abaixo seria um loop de verificação, para verificar se caso o mario bateu no boneco,
se orientanção por posição, e não colisão.
*/
const loop = setInterval(() => {

    const pipePosicao = pipe.offsetLeft;
    const marioPisicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log('loop')
    if (pipePosicao <= 125 && pipePosicao > 0 && marioPisicao < 80){
      pipe.style.animation = 'none';  
      pipe.style.left = `${pipePosicao}px`;
      mario.style.animation = 'none';  
      mario.style.bottom = `${marioPisicao}px`;

      mario.src = "./img/game-over.png";
      mario.style.width = "74px";
      mario.style.marginLeft = "50px";

      clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);;
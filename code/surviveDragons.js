/*
   
Um herói está a caminho do castelo para completar sua missão. No entanto, ele foi informado de que o castelo está cercado por alguns dragões poderosos! 
cada dragão leva 2 balas para ser derrotado, nosso herói não tem ideia de quantas balas ele deve carregar. 
Supondo que ele pegue um número específico de balas e siga em frente para lutar contra outro número específico de dragões, ele sobreviverá?

Retorne verdadeiro se sim, falso caso contrário :)
*/

const bullets = 7;
const dragons = 4;
function hero(bullets, dragons) {
  const killDragon = dragons * 2;
  if (killDragon <= bullets) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(bullets, dragons));

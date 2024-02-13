/*
Houve um teste em sua turma e você passou. Parabéns! Mas você é uma pessoa ambiciosa. 
Você quer saber se é melhor do que o aluno médio da sua turma. Você recebe uma matriz com as pontuações dos testes de seus colegas. 
Agora calcule a média e compare sua pontuação! Retorne True se você estiver melhor, caso contrário, False! 
Nota: Seus pontos não estão incluídos na matriz de pontos da sua turma. 
Para calcular o ponto médio você pode adicionar seu ponto à matriz fornecida!
*/

const classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
const yourPoints = 75;

function betterThanAverage(classPoints, yourPoints) {
  const somaMediaTurma = classPoints.reduce((acc, points) => acc + points, 0);
  const mediaGeral = somaMediaTurma / classPoints.length;

  if (mediaGeral <= yourPoints) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage(classPoints, yourPoints));

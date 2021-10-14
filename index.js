const alunos = [
  {
     nome: 'Levi',
     nota: 9.5
  },
  {
    nome: 'Ravi',
    nota: 7.5
  },
  {
    nome: 'Fabi',
    nota: 5.5
  }
]

const nomesAlunos = ['Levi , Ravi , Fabi']

console.log(alunos);

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

if (media >5) {
    console.log(`A media foi de ${media}. parabens`)
} else {
    console.log('Sua media foi abaixo de 5');
}







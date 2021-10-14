const alunosDaTurmaA = [
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
  },
  {
    nome: 'Gui',
    nota: 5
  }
]

const alunosDaTurmaB = [
  {
     nome: 'Rage',
     nota: 6.5
  },
  {
    nome: 'Iago',
    nota: 3.5
  },
  {
    nome: 'Tatá',
    nota: 2.5
  },
  {
    nome:'Leo',
    nota: 9.5
  }
]

function calculaMedia(alunos) {
  let soma = 0;
  for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota 
  }

 return soma / alunos.length

}
  
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media , turma) {
  if (media >5) {
    console.log(`A media da ${turma} foi de ${media}. parabens`)
} else {
    console.log(`Sua media da ${turma} foi abaixo de 5`);
}  
}

enviaMensagem(media1 , 'turmaA')
enviaMensagem(media2 , 'turmaB')








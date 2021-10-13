    // Desafio 1//
const nome = 'Manoel'
const peso = 104
const altura = 1.88
const sexo = 'masculino'

const imc = peso / (altura * altura);

if (imc >= 30 ){
    console.log('Manoel você está acima do peso');
}else{
    console.log('Manoel você não está acima do peso');
}

    
//const nome = 'Silvana'
//const sexo = 'F'
//const idade = 48
//const contribuicao = 23

//const nome = 'Ademir'
//const sexo = 'M'
//const idade = 45
//const contribuicao = 20

//const calculoContribuicao = idade + contribuicao

//const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
//const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

//if ( homemPodeAposentar || mulherPodeAposentar) {
//    console.log(`${nome}, você pode se aposentar!`)
//} else {
//    console.log(`${nome}, você não pode se aposentar!`)
//}
//desafio 1.2b//

//const  objeto  =  { 
//  propriedade : [ 
  //  {  nome : "C ++" ,  especialidade : "Desktop"  } , 
   // {  nome : "JavaScript" ,  especialidade : "Web / Mobile"  } 
 // ] 
//} ;
//console.log(`O usuário Carlos tem 32 anos e usa a tecnologia ${objeto.propriedade.nome} com especialidade em ${objeto.propriedade.especialidade}`);


const  objeto  =  {
  nome : "Jose" ,
  idade : 47 ,
  tecnologias :   [
      {  nome : 'c++' ,  especialidade : 'Desktop'  } , 
      {  nome : 'JavaScript' ,  especialidade : 'Web / Mobile'  }
  ]
}

console . log ( `O usuário ${ objeto . nome } tem ${ objeto . idade } anos e usa a tecnologia ${ objeto . tecnologias [ 0 ] . nome } com especialidade em ${ objeto . tecnologias [ 0 ] . especialidade } ` )

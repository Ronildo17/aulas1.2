const usuarios = [
  {
    nome: 'Carlos' ,
    tecnologias: ['html', 'css']
  },
  {
    nome: 'Ronaldo',
    tecnologias:['php','java']
  },
  {
    nome: 'Levi',
    tecnologias:['js','css']
  }

]
//interção do ultimo pro primeiro.
function imprime(p) {
  for (let index = 0; index < p.length; index++) {
   const existeCss = checarCss(p[index])

   if(existeCss){
    console.log ( `O usuário ${p[index].nome} trabalha com CSS` ) 
   }

  }
}

function checarCss(usuario) {
   for(let i = 0; i < usuario.tecnologias.length; i++){
     if(usuario.tecnologias[i]==="css"){
      return true
     }
   }
}

imprime(usuarios)
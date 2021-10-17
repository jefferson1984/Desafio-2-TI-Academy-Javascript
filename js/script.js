window.onload=function(){

   /*
     durante todo processo de criação do código não tive problemas em fazer busca no viacep, porém 
     após ja ter concluido o projeto, fazendo novas busca obtive o erro de cors, tentei algumas
     soluções discutidas no stack flow, mas não obtive sucesso, espero que esse problema seja da minha
     máquina, e não interfira na correção.




   */

       function localizar(dados){


         for (let campo in dados) {
            if(document.querySelector(`#${campo}`)){
               document.querySelector(`#${campo}`).value=dados[campo]
            }

            
        }
       }
     

      let dadosCep=async function(cep){
         
        let url=`https://viacep.com.br/ws/${cep}/json/` 

        let dadosFetch=await fetch(url,{
           method:'GET',
           mode:'cors',
           headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
           }
        })

        let dadosJson=await dadosFetch.json()

         localizar(dadosJson)

      }

    
   const btnBuscar =document.querySelector('#btn')

   const cxCep =document.querySelector('#cep')
   
   btnBuscar.addEventListener('click',()=>{

        dadosCep(cxCep)

   })








}
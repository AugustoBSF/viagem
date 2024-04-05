// dom
const calcular = document.querySelector('#btncalcular')
const resultado = document.querySelector('#resultadao')





// evento
calcular.addEventListener('click',()=>
{
    
 let distancia = Number(document.querySelector('#inputDistancia').value)
let  consumo= Number(document.querySelector('#inputConsumo').value)
let  preco= Number(document.querySelector('#inputPreco').value)

media= (distancia/consumo)*preco

resultado.textContent= `Sua média de consumo é R$ ${media.toFixed(2)}` 









})













// funçoes
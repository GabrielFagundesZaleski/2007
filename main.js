//  let seuNome = ('gabriel');
// alert(gabriel);
//  function soma (numero1,numero2) {
// return numero1 + numero2;
// }
// console.log (soma(1,2));
// function areaQuadrado (lado) {
//     return lado**2;
// }
// console.log (areaQuadrado (5))

// let areaTriangulo = function(base,altura){
//     return  (base*altura)/2  ; 
// }
// console.log (areaTriangulo(200,100,2));



// let media1 = parseInt (prompt ('Qual a media dos valores?'));
// function media (numero1,numero2,numero3){
//     return (numero1,numero2,numero3)/3;
// }
// console.log (media(2,3,6));

let estados= ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rm', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to', 'df']

// let i=0;
// while (i<estados.length){
//      console.log (i); 
//      i++;
//      console.log(estados[i]);
// }

for (let i = 0; i < estados.length; i++) {
   console.log(estados[i]);

}
let idade = parseInt(prompt('qual é a sua idade?'));
if(idade > 17){
console.log('já pode dirigir'); 
}
else{
    console.log('ilegal dirigir');
}
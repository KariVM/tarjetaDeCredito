// Creando la funcion CardNumberInArray
function CardNumberInArray(numberCard){
  if ( numberCard === ""){
   alert ("Ingrese los numeros de su tarjeta");
   } else {
     var cardNumberInArrayReverse = [];
     for( var i= 0; i < numberCard.length; i++){
      //Accediendo a cada digito del numero ingresado(string)
     cardNumberInArrayReverse.unshift(parseInt(numberCard.charAt(i)));
     }
       return cardNumberInArrayReverse;//Retornamos el nuevo Array.
    }

do{
  var inPut = prompt("Ingrese su numero de tarjeta de credito");
   var newCard = CardNumberInArray(inPut);
 // console.log (newCard);
} while(inPut === "");
//Llamando a la funcion, y el array nuevo obtenido le agregamos a la variable"newCard"
function duplicateDigitCard(newCard){
  var array = [];
  for(var j = 0; j < newCard.length; j++){
    //Creando la condicion para ubicar las posiciones pares del array "newCard".
    if(j%2===1){
      //duplicando los digitos de las posiciones pares.
      var result = newCard[j]*2;
      if(result >= 10){
        var sum = 0;
        for (var i = 0; i < String(result).length; i++){
          sum += parseInt(String(result).charAt(i));
        }
        array.push(sum);
    }else {array.push(result);
     }
  }else{
    array.push(newCard[j]);//agregando al nuevo array los digitos de las posiciones impares.
  }
}
 return array;
}
}
//Llamando la funcion
isValidCard(modifiedCardNumber);

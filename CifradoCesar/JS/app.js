//Pedimos a la persona una frase
var phrase=prompt("Escriba la frase a cifrar: ");
//Creamos una funcion, para Cifrar una frase
function cipher(phrase,n){
    //Almacenamos los newLetterUp y newLetterDown
    var arrayCodeAscii = [];
    //Hacemos un bucle para extraer los caracteres de la sentence
    for(i = 0; i < phrase.length; i++){
        //Extraemos una letter de la sentence de acuerdo a su posición
        var letter = phrase.charAt(i);
        //Verificamos si la letra es mayuscula o miniscula
        if(letter == letter.toUpperCase()){
            //Devuelve el Codigo ASCII de la letra mayuscula
            var letterUp = letter.charCodeAt(0);
            //Aplicando la formula nos devuelve el nuevo código ASCII
            newLetterUp = (letterUp - 65 + n) % 26 + 65;
            /*Aplicando el metodo push introducimos los valores de
            newLetterUp en arrayCodeAscii*/
            arrayCodeAscii.push(newLetterUp);
        }
        else {
            //Devuelve el Codigo ASCII de la letra minuscula
            var letterDown = letter.charCodeAt(0);
            //Aplicando la formula nos devuelve el nuevo código ASCII
            newLetterDown = (letterDown - 97 + n) % 26 + 97;
            /*Aplicando el metodo push introducimos los valores de
            newLetterDown en arrayCodeAscii*/
            arrayCodeAscii.push(newLetterDown);
        }
    }
    //Invertimos la posición del array para un buen orden en newSentence
    var reversArray = arrayCodeAscii.reverse();
    //Declaramos newSentence vacio, para que tome los valores de la concatenación
    var newSentence = " ";
    //Hacemos el bucle, para extraer los codigos ASCII que estan en el index de reversArray
    for(b = 0; b < reversArray.length; b++){
        //Devuelve la letra que se encuentra en el nuevo codigo ASCII
        var newLetter = String.fromCharCode(reversArray[b]);
        //Concatena las letras
        var newSentence = newLetter.concat(newSentence);
   }
   //Mostramos al usuario la frase incriptada mediante una alert
   return alert("La frase incriptada sería: " + newSentence);

}
//llamamos a la fución
console.log(cipher(phrase, 33));

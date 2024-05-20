/*Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500 */

function almacenarArray () {
    let arrayPrincipal = []
    let arrayPrimeros = []
    let arraySegundos = []

    for(let i = 0; i < 10; i++){
        let numero = parseFloat(prompt(`Ingrese aquí su número`));

        if (isNaN(numero) || numero > 500 || numero < 0 || numero > 500) {
            alert ("Inserte un número válido");
            i--;
            continue;
        }
        
        arrayPrincipal.push(numero)

        if(numero <= 250 && numero >= 1){
            arrayPrimeros.push(numero)
        } else if (numero >= 251 && numero <=500){
            arraySegundos.push(numero)
        }

    }
    console.log("Array Principal: " + arrayPrincipal)
    console.log("Numeros entre el 1 y el 250: " + arrayPrimeros)
    console.log("Numeros entre el 251 y el 500: " + arraySegundos)


}
almacenarArray();
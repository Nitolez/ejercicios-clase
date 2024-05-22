//CATA 1
const regExp1 = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,19}$/;
function validPass(password){
  if(regExp1.test(password)){
    return "VALID"
  } else {return "INVALID"}
}
/* ^: Inicio de la cadena.
(?=.*[a-zA-Z]): Asegura que haya al menos una letra.
(?=.*\d): Asegura que haya al menos un número.
[a-zA-Z\d]{4,19}: Asegura que la cadena tenga entre 4 y 19 caracteres alfanuméricos.
$: Fin de la cadena.*/

//CATA 2

const regExp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function password(str) {
  if(regExp2.test(str)){
    return true
    } else {
      return false
    }
}

/* ^: Inicio de la cadena.
(?=.*[a-z]): Asegura que haya al menos una letra minúscula.
(?=.*[A-Z]): Asegura que haya al menos una letra mayúscula.
(?=.*\d): Asegura que haya al menos un número.
.{8,}: Asegura que la cadena tenga al menos 8 caracteres alfanuméricos.
$: Fin de la cadena.*/


//CATA 3


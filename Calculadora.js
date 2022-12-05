//Ingreso de datos por el Usuario

let numero1 = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));
let operacion = prompt("Ingrese una operacion (+,-,*,/):");
let resultado;
let mensaje = "El resultado de tu operacion es";

switch (operacion){
    case "+": resultado = numero1+numero2;
    console.log("El resultado es: ",resultado);
    
    break;    

    case "-": resultado = numero1-numero2;
    console.log("El resultado es: ",resultado);
      
    break;  

    case "*": resultado = numero1*numero2;
    console.log("El resultado es: ",resultado);
            
    break;

    case "/": resultado = numero1/numero2;
    console.log("El resultado es: ",resultado);
                
    break;  


}

if(numero1=='0' && operacionSeleccionada=='/') {
    limpiar();
    resultado = "Indefinido";
    
}

alert(mensaje);

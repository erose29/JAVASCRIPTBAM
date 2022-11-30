//Ingreso de datos por el Usuario

let numero1 = parseInt(prompt("Ingrese primer numero"));
let numero2 = parseInt(prompt("Ingrese segundo numero"));
let operacion = prompt("Ingrese una operacion (+,-,*,/):");
let resultado;


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



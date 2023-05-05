let costo_hora = 10;
function calcular_presupuesto(horas_proyecto, costo_hora) 
{
    if (horas_proyecto === null || horas_proyecto === "" || isNaN(horas_proyecto) || horas_proyecto < 0) {
      console.log("Por favor ingrese un valor válido para la cantidad de horas del proyecto");
      return null;
    } else {
      let presupuesto = parseFloat(horas_proyecto) * parseFloat(costo_hora);
      return presupuesto;
    }
  }
  
  console.log("¡Hola! Mi nombre es Virginia y soy Tester QA. Te doy la bienvenida a mi portfolio");
  
  let contratar_servicio = prompt("¿Querés contratar mis servicios? Ingrese SI o NO").toUpperCase();
  
  while (contratar_servicio === "SI") {

    console.log("Gracias por contratarme, a la brevedad me pondré en contacto para detallar pasos a seguir");
    console.log("Mientras tanto, podés consultar el costo de mis servicios");
    
    let horas_proyecto = prompt("Ingrese cantidad de horas que tendrá su proyecto, de lo contrario ingrese SALIR");
    let presupuesto = calcular_presupuesto(horas_proyecto, costo_hora);
    
    if (presupuesto !== null) {
      console.log("El costo del servicio es de:", presupuesto);
    }
    contratar_servicio = prompt("¿Desea continuar contratando mis servicios? Ingrese SI o NO").toUpperCase();
  }
  
  console.log("A continuación podrás ver información detallada sobre mis aptitudes y experiencia");
  let email_usuario = prompt("Ingrese su email");






/*
// CALCULAR PRESUPUESTO

let horas_proyecto = "";
let costo_hora = 10;
horas_proyecto = parseFloat(horas_proyecto);
costo_hora = parseFloat(costo_hora);
let presupuesto = horas_proyecto * costo_hora;
presupuesto = parseFloat(presupuesto);


function calcular_presupuesto (horas_proyecto , costo_hora){
    
    if(horas_proyecto != "SALIR" && horas_proyecto > 0){
    return presupuesto;
    }

    else if(horas_proyecto != "SALIR" && horas_proyecto< 0){
        console.log("Por favor ingrese valores mayores a cero");
    }

}


// BIENVENIDA A AL USUARIO
console.log("¡Hola! Mi nombre es Virginia y soy Tester QA . Te doy la bienvenida a mi portfolio");

contratar_servicio = prompt("¿Querés contratar mis servicios? , ingresa SI o NO");
horas_proyecto = prompt ("Ingrese cantidad de horas que tendrá su proyecto, de lo contrario ingrese SALIR");
horas_proyecto = parseFloat(horas_proyecto);

while (contratar_servicio == "SI"){

    console.log("Gracias por contratarme, a la brevedad me pondré en contacto para detallar pasos a seguir");
    console.log("Mientras tanto, podés consultar el costo de mis servicios");
    email_usuario = prompt ("Ingrese su email");

if ( horas_proyecto != "SALIR"){
    let presupuesto = horas_proyecto*costo_hora;
    console.log("El costo del servicio es de: ", presupuesto);
}

else{
    console.log("A continuación podrás ver información detallada sobre mis aptitudes y experiencia");
    }
}
*/
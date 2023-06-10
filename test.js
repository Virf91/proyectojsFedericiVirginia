/*

//Calcular presupuesto "mi versión" A PARTIR DE ACA ES EL COD ANTERIOR

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



  //Saludo de bienvenida
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






 /* El archivo js en este caso pongamos index.js
  Guarda con las variables que tengamos definidas globalmente pueden causar errores
  Podemos dividir en funciones mas pequeñas tambien si quisieras como las siguientes
  
  
  function validarHorasProyecto(horas_proyecto, costo_hora) {
    if (horas_proyecto === null || horas_proyecto === "" || isNaN(horas_proyecto) || horas_proyecto < 0) {
      console.log("Por favor ingrese un valor válido para la cantidad de horas del proyecto");
      return null;
    } else {
      return parseFloat(horas_proyecto) * parseFloat(costo_hora);
    }
  }
  
  
  function calcularPresupuesto(horas_proyecto, costo_hora) {
    let presupuesto = validarHorasProyecto(horas_proyecto, costo_hora);
    if (presupuesto !== null) {
      return presupuesto;
    }
    return null;
  }*/
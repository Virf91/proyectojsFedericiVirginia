let costo_hora = 10;

function calcular_presupuesto(horas_proyecto, costo_hora) {
  if (horas_proyecto === null || horas_proyecto === "" || isNaN(horas_proyecto) || horas_proyecto < 0) {
    alert("Por favor ingrese un valor válido para la cantidad de horas del proyecto");
    return null;
  } else {
    let presupuesto = parseFloat(horas_proyecto) * parseFloat(costo_hora);
    return presupuesto;
  }
}

// Saludo de bienvenida
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

// Objeto "proyecto"
let proyecto = {
  nombre: "E2E Testing website venta de Licores",
  horas: 50,
  presupuesto: calcular_presupuesto(50, costo_hora),
  descripcion: "Este es un proyecto donde se realizaron todas las pruebas necesarias para asegurar el cumplimiento de requerimientos"
};

//console.log("Detalles del proyecto:", proyecto);

// Ejemplo de Array
let proyectos = [
  proyecto,
  {
    nombre: "Proyecto ABC",
    horas: 30,
    presupuesto: calcular_presupuesto(30, costo_hora),
    descripcion: "Este es otro proyecto de prueba"
  },
  {
    nombre: "Proyecto 123",
    horas: 20,
    presupuesto: calcular_presupuesto(20, costo_hora),
    descripcion: "Un tercer proyecto de prueba"
  }
];

console.log("Lista de proyectos:", proyectos);

// Ejemplo de filtro
let proyectos_costo_mayor_200 = proyectos.filter(proyecto => proyecto.presupuesto > 200);
console.log("Proyectos con presupuesto mayor a $200:", proyectos_costo_mayor_200);




















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
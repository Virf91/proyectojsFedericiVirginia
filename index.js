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

// Obtener referencias a los elementos del DOM
const outputContainer = document.getElementById('container');
const contratarServicioInput = document.getElementById('contratar-servicio-input');
const horasProyectoInput = document.getElementById('horas-proyecto-input');
const contratarServicioBtn = document.getElementById('contratar-servicio-btn');

// Saludo de bienvenida
outputContainer.innerHTML = "¡Hola! Mi nombre es Virginia y soy Tester QA. <br/> Te doy la bienvenida a mi portfolio";

// Función para mostrar un mensaje en el DOM
function mostrarMensaje(mensaje) {
  outputContainer.innerHTML += "<br>" + mensaje;
}

// Función para obtener el valor del input de contratar servicio
function obtenerContratarServicio() {
  return contratarServicioInput.value.toUpperCase();
}

// Función para obtener el valor del input de horas proyecto
function obtenerHorasProyecto() {
  return horasProyectoInput.value;
}

// Evento para manejar la opción de contratar servicios
contratarServicioBtn.addEventListener('click', () => {
  let contratar_servicio = obtenerContratarServicio();

  if (contratar_servicio === "SI") {
    mostrarMensaje("Gracias por contratarme, a la brevedad me pondré en contacto para detallar los pasos a seguir");
    mostrarMensaje("Mientras tanto, puedes consultar el costo de mis servicios");
    horasProyectoInput.disabled = false;
  } else {
    mostrarMensaje("¡Espero verte pronto! Si decides contratar mis servicios, aquí estaré");
    contratarServicioInput.disabled = true;
    horasProyectoInput.disabled = true;
  }
});

// Evento para manejar el cálculo del presupuesto
horasProyectoInput.addEventListener('change', () => {
  let horas_proyecto = obtenerHorasProyecto();
  let presupuesto = calcular_presupuesto(horas_proyecto, costo_hora);

  if (presupuesto !== null) {
    mostrarMensaje("El costo del servicio es de: " + presupuesto);
    localStorage.setItem('presupuesto', presupuesto); // Guardar el presupuesto en el Local Storage
  }
});

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








/*let costo_hora = 10;

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

*/



















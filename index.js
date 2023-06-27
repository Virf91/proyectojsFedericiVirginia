
// PRESUPUESTO 

// Obtener referencia a los elementos del DOM
    const form = document.getElementById('budget-form');
    const hoursInput = document.getElementById('hours');
    const resultDiv = document.getElementById('result');
    const budgetParagraph = document.getElementById('budget');

// Escuchar el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      const hours = parseFloat(hoursInput.value); // Obtener las horas de trabajo ingresadas

      if (isNaN(hours)) {
        alert('Ingrese un valor válido de horas de trabajo.');
        return;
      }

      const precioHora = 10; // Precio por hora de trabajo
      const presupuesto = calculateBudget(hours, precioHora);

// Mostrar el resultado en el DOM
      budgetParagraph.textContent = 'El costo del servicio es USD' + presupuesto;
      resultDiv.style.display = 'block';

// Guardar el resultado en el almacenamiento local
      localStorage.setItem('presupuesto', presupuesto);
    });

// Función para calcular el presupuesto
    function calculateBudget(hours, precioHora) {
      return hours * precioHora;
    }

//PROYECTOS Y FILTROS

const filterContainer = document.querySelector(".gallery__categories");
    const galleryItems = document.querySelectorAll(".project__card");
    
        filterContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("filter-item")) {
                filterContainer.querySelector(".active").classList.remove("active");
                event.target.classList.add("active")
                const filterValue = event.target.getAttribute("data-filter")
                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue) || filterValue === "all") {
                        item.classList.remove("hide")
                        item.classList.add("show")
                    } else {
                        item.classList.remove("show")
                        item.classList.add("hide")
                    }
                })
            }
        })
    
        function scrollToSection(sectionId){
            document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
        }

  // Consumiendo API DE CONVERSIÓN DE DIVISAS

const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Event listeners
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();
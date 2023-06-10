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
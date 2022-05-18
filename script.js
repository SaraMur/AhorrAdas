//CARD FILTROS************************************************/
//creacion CONTAINER FILTROS
const cardFilterContainer = document.createElement("div");
cardFilterContainer.id = "card-filter-container";

cardFilterContainer.style.padding = "20px 20px";

cardFilterContainer.classList.add("margin-iz");
cardFilterContainer.classList.add("margin-top");
cardFilterContainer.classList.add("padding-bottom");
cardFilterContainer.classList.add("column");
cardFilterContainer.classList.add("box");
cardFilterContainer.classList.add("is-one-third");

document.body.appendChild(cardFilterContainer);
//----------------------------------------------------------//

//CONTAINER de todos los filtros***********************/
const containerAllFilters = document.createElement("div");
containerAllFilters.id = "container-all-filters";
cardFilterContainer.appendChild(containerAllFilters);
//--------------------------------------------------------//


//MOSTRAR / OCULTAR FILTROS

const toggleMostrarOcultarFiltros = document.createElement("a");
toggleMostrarOcultarFiltros.id = "filters-toggle";
toggleMostrarOcultarFiltros.appendChild(document.createTextNode("Ocultar filtros"));

cardFilterContainer.appendChild(toggleMostrarOcultarFiltros);


toggleMostrarOcultarFiltros.addEventListener("click", (e) =>{
    const cambiarMostrarOcultar = () => {
        const toggle =  toggleMostrarOcultarFiltros;
        const filters = containerAllFilters;
    
        if (toggle.innerText === "Ocultar Filtros") {
            toggle.innerText = "Mostrar Filtros"
            filters.classList.add("is-hidden")
        } else {
            toggle.innerText = "Ocultar Filtros"
            filters.classList.remove("is-hidden")
        }
    } 
});




//----------------------------------------------------------//

//TITULO DE CARD FILTROS

const tituloFiltro = document.createElement("h2");
tituloFiltro.appendChild(document.createTextNode("Filtros"));

tituloFiltro.classList.add("card-header-tittle");

containerAllFilters.appendChild(tituloFiltro);

//-----------------------------------------------------------//

//creacion LABELS, INPUTS y SELECTS de FILTROS
//TIPO---------------------------------
//label TIPO
const labelTipo = document.createElement("label");
labelTipo.appendChild(document.createTextNode("Tipo"));

labelTipo.classList.add("label");

containerAllFilters.appendChild(labelTipo);
//select TIPO
const selectTipo = document.createElement("select");
selectTipo.id = "select-tipo";

selectTipo.classList.add("select");

containerAllFilters.appendChild(selectTipo);

const opcionesTipo = [
    {
        value: 'todos', 
        label: 'Todos' 
    },
    {
        value: 'ganancia',
        label: 'Ganancia'
    },
    {
        value: 'gasto',
        label: 'Gasto'
    }
];
opcionesTipo.forEach(option => {
    const opt = document.createElement("option");
    opt.appendChild(document.createTextNode(option.label));
    opt.setAttribute("value", option.value);
    selectTipo.appendChild(opt);
});

selectTipo.addEventListener("change", (e) =>{

});

//-------------------------------------------

//CATEGORIA---------------------------------
//label CATEGORIA
const labelCategoria = document.createElement("label");
labelCategoria.appendChild(document.createTextNode("Categoría"));

labelCategoria.classList.add("label");

containerAllFilters.appendChild(labelCategoria);

//select CATEGORIA
const selectCategoria = document.createElement("select");
selectCategoria.id = "select-categoria";

selectCategoria.classList.add("select");

containerAllFilters.appendChild(selectCategoria);

const opcionesCategoria = [
    {
        value: 'todas',
        label: 'Todas'
    },
    {
        value: 'comida',
        label: 'Comida'
    },
    {
        value: 'servicios',
        label: 'Servicios'
    },
    {
        value: 'salidas',
        label: 'Salidas'
    },
    {
        value: 'educacion',
        label: 'Educación'
    },
    {
        value: 'transporte',
        label: 'Transporte'
    },
    {
        value: 'trabajo',
        label: 'Trabajo'
    }

];
opcionesCategoria.forEach(option => {
    const optCat = document.createElement("option");
    optCat.appendChild(document.createTextNode(option.label));
    optCat.setAttribute("value", option.value);
    selectCategoria.appendChild(optCat);
});

selectCategoria.addEventListener("change", (e) =>{

});


//-----------------------------------------

//DESDE---------------------------------
//label DESDE
const labelDesde = document.createElement("label");
labelDesde.appendChild(document.createTextNode("Desde"));

labelDesde.classList.add("label");

containerAllFilters.appendChild(labelDesde);
//input DESDE
const inputDesde = document.createElement("input");
inputDesde.type = "date";

inputDesde.classList.add("input");

containerAllFilters.appendChild(inputDesde);


//-----------------------------------------

//ORDENAR---------------------------------
//label ORDENAR
const labelOrdenar = document.createElement("label");
labelOrdenar.appendChild(document.createTextNode("Ordenar por"));

labelOrdenar.classList.add("label");

containerAllFilters.appendChild(labelOrdenar);

//select ORDENAR

const selectOrdenar = document.createElement("select");
selectOrdenar.id = "select-ordenar";

selectOrdenar.classList.add("select");

containerAllFilters.appendChild(selectOrdenar);

const opcionesOrdenar = [
    {
        value: 'mas-reciente',
        label: 'Más reciente'
    },
    {
        value: 'menos-reciente',
        label: 'Menos reciente'
    },
    {
        value: 'mayor-monto',
        label: 'Mayor monto'
    },
    {
        value: 'menor-monto',
        label: 'Menor monto'
    },
    {
        value: 'a-z',
        label: 'A/Z'
    },
    {
        value: 'z-a',
        label: 'Z/A'
    }
];
opcionesOrdenar.forEach(option => {
    const optOrd = document.createElement("option");
    optOrd.appendChild(document.createTextNode(option.label));
    optOrd.setAttribute("value", option.value);
    selectOrdenar.appendChild(optOrd);
});

selectOrdenar.addEventListener("change", (e) =>{

});

//ORDENAR DE A/Z Y DE Z/A*************************************/
const operacionesAzZa = operaciones.value;

        if(sortBy.value==='az'){
            operacionesAzZa.sort(function (a, b) {
                if (a.label > b.label) {
                  return 1;
                }
                if (a.label < b.label) {
                  return -1;
                }
                // a tiene que ser igual a b
                return 0;
              });
        }
        if(sortBy.value==='za'){
            operacionesAzZa.sort(function (a, b) {
                if (a.label < b.label) {
                  return 1;
                }
                if (a.label > b.label) {
                  return -1;
                }
                // a tiene que ser igual a b
                return 0;
              });
        }

//-----------------------------------------

//***************************************************************** */


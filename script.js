// menuDanila
///**header */
const header = document.createElement ("header");
header.id = "header";
document.body.appendChild(header);

// /**
//  * container
//  */
const divContainer = document.createElement("div");
document.body.appendChild(divContainer);

/**
 * menú principal
 */
const navRow = document.createElement("nav");
navRow.classList.add("navbar");
navRow.classList.add("has-background-success");
navRow.classList.add("is-primary");
navRow.classList.add("is-spaced");
navRow.classList.add("has-shadow");
header.appendChild(navRow);

/**
 * div logo
 */
const divLogo = document.createElement("div");
divLogo.classList.add("navbar-brand");
const linkLogo = document.createElement("a");
linkLogo.setAttribute ("href", "#");
linkLogo.classList.add("has-text-white");
linkLogo.classList.add("navbar-item");
const iconLogo = document.createElement("i");
iconLogo.setAttribute("class","fa-solid fa-wallet","mr-2");
const titleLogo = document.createElement ("h1");
titleLogo.classList.add("title");
titleLogo.classList.add("is-size-2-desktop");
titleLogo.classList.add("has-text-white");
titleLogo.textContent = "AhorrADAs";
linkLogo.appendChild(iconLogo);
linkLogo.appendChild(titleLogo);
divLogo.appendChild(linkLogo);
navRow.appendChild(divLogo);


/**
 * navbar
 */
const navBar = document.createElement("nav");
navBar.id = "nav-bar";
navBar.classList.add("navbar-menu");
navBar.classList.add("is-active");
navRow.appendChild(navBar);

// /**
//  * Lista
//  */
const ulMenu = document.createElement ("ul");
ulMenu.classList.add("navbar-end");
navBar.appendChild(ulMenu);

/**
 * items
 */
const itemBalance = document.createElement("li");
itemBalance.classList.add("navbar-item");
const linkBalance = document.createElement("a");
linkBalance.setAttribute ("href", "#");
linkBalance.classList.add("has-text-white");
const iconBalance = document.createElement("i");
iconBalance.setAttribute("class", "fa-solid fa-chart-line","mr-2");
const spanBalance = document.createElement("span");
spanBalance.textContent = "Balance";
linkBalance.appendChild(iconBalance);
linkBalance.appendChild(spanBalance);
itemBalance.appendChild(linkBalance);
ulMenu.appendChild(itemBalance);
 


const itemCategorias = document.createElement("li");
itemCategorias.classList.add("navbar-item");
itemCategorias.classList.add("has-text-white");
const linkCategorias = document.createElement("a");
linkCategorias.setAttribute ("href", "#");
linkCategorias.classList.add("has-text-white");
const iconCategorias = document.createElement("i");
iconCategorias.setAttribute("class", "fa-solid fa-tag","mr-2");
const spanCategorias = document.createElement("span");
spanCategorias.textContent = "Categorías";
linkCategorias.appendChild(iconCategorias);
linkCategorias.appendChild(spanCategorias);
itemCategorias.appendChild(linkCategorias);
ulMenu.appendChild(itemCategorias);


const itemReportes = document.createElement("li");
itemReportes.classList.add("navbar-item");
itemReportes.classList.add("has-text-white");
const linkReportes = document.createElement("a");
linkReportes.setAttribute ("href", "#");
linkReportes.classList.add("has-text-white");
const iconReportes = document.createElement("i");
iconReportes.setAttribute("class","fa-solid fa-chart-pie","mr-2");
const spanReportes = document.createElement("span");
spanReportes.textContent = "Reportes";
linkReportes.appendChild(iconReportes);
linkReportes.appendChild(spanReportes);
itemReportes.appendChild(linkReportes);
ulMenu.appendChild(itemReportes);

//--------------------------------------------------------------//


=======

const containerGeneral = document.getElementById("container-general");
const containerNuevasOperaciones = document.getElementById("container-nuevas-operaciones");
// main

//CARD FILTROS************************************************/
//creacion CONTAINER FILTROS
const cardFilterContainer = document.createElement("div");
cardFilterContainer.id = "card-filter-container";

cardFilterContainer.style.padding = "20px 20px";

cardFilterContainer.classList.add("margin-iz");
cardFilterContainer.classList.add("margin-top");
//cardFilterContainer.classList.add("padding-bottom");
cardFilterContainer.classList.add("column");
cardFilterContainer.classList.add("box");
cardFilterContainer.classList.add("is-one-quarter");
cardFilterContainer.setAttribute("margin-left", "10%");

containerGeneral.appendChild(cardFilterContainer);

//----------------------------------------------------------//

//----------------------------------------------------------//

//TITULO DE CARD FILTROS

const tituloFiltro = document.createElement("h2");
tituloFiltro.appendChild(document.createTextNode("Filtros"));

tituloFiltro.className = "title is-3";

cardFilterContainer.appendChild(tituloFiltro);


//-----------------------------------------------------------//


//MOSTRAR / OCULTAR FILTROS

const toggleMostrarOcultarFiltros = document.createElement("a");
toggleMostrarOcultarFiltros.id = "filters-toggle";
toggleMostrarOcultarFiltros.appendChild(document.createTextNode("Ocultar filtros"));
toggleMostrarOcultarFiltros.className = "a";

cardFilterContainer.appendChild(toggleMostrarOcultarFiltros);

//-----------------------------------------------------//

//CONTAINER de todos los filtros***********************/
const containerAllFilters = document.createElement("div");
containerAllFilters.id = "container-all-filters";
cardFilterContainer.appendChild(containerAllFilters);

//--------------------------------------------------------//


//FUNCIONALIDAD MOSTRAR / OCULTAR FILTROS
toggleMostrarOcultarFiltros.addEventListener("click", (e) =>{
        const toggle =  toggleMostrarOcultarFiltros;
        const filters = containerAllFilters;
    
        if (toggle.innerText === "Ocultar Filtros") {
            toggle.innerText = "Mostrar Filtros"
            filters.classList.add("is-hidden")
        } else {
            toggle.innerText = "Ocultar Filtros"
            filters.classList.remove("is-hidden")
        }
 
});






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

/******************************************* */
//CONTAINER OPERACIONES----------------------//
const operationContainer = document.createElement("div");
operationContainer.className = "card is-medium column is-four-fifths";
operationContainer.setAttribute("margin-left", "10%");
operationContainer.id = "operation-container";
containerGeneral.appendChild(operationContainer);
//-------------------------------------------

//CONTAINER TITULO Y BOTON
const containerBtnTitOperaciones = document.createElement("div");
containerBtnTitOperaciones.id = "container-btn-tit-operaciones";
containerBtnTitOperaciones.className = "column has-text-right";

operationContainer.appendChild(containerBtnTitOperaciones);
//-------------------------------------------

//CONTAINER TITULO OPERACIONES
const containerTitOper = document.createElement("div");
containerTitOper.id = "container-tit-oper";
containerBtnTitOperaciones.appendChild(containerTitOper);

//TITULO OPERACIONES Y -------------//
const tituloOperaciones = document.createElement("h2");
tituloOperaciones.id = "titulo-operaciones";
tituloOperaciones.appendChild(document.createTextNode("Operaciones"));
tituloOperaciones.className = "title is-3";
containerTitOper.appendChild(tituloOperaciones);

//---------------------------------------------

//CONTAINER BOTON OPERACIONES
const containerBtnOper = document.createElement("div");
containerBtnOper.id = "container-btn-oper";
containerBtnTitOperaciones.appendChild(containerBtnOper);

//OPERACIONES BOTON-----------------//
const botonOperaciones = document.createElement("button");
botonOperaciones.className = "button is-success is-right";

botonOperaciones.appendChild(document.createTextNode("+ Nueva operación"));
containerBtnOper.appendChild(botonOperaciones);

/*******************************************************/

//OPERACIONES IMAGENES-----------------------//
const operationImage = document.createElement("img");
operationImage.className = "card-image is-center";
operationImage.setAttribute("src", "https://frontend-proyecto-ahorradas.adaitw.org/imgs/wallet.svg");
operationImage.id = "operation-image";

operationContainer.appendChild(operationImage);
//-------------------------------------------

//SUBTITULO CARD OPERACIONES
const subtCardOperaciones = document.createElement("h4");
subtCardOperaciones.className = "subtitle has-text-centered";
subtCardOperaciones.appendChild(document.createTextNode("Sin resultados"));

operationContainer.appendChild(subtCardOperaciones);
//--------------------------------------------

//PARRAFO OPERACIONES
const parrCardOperaciones = document.createElement("p");
parrCardOperaciones.className = "p has-text-centered";
parrCardOperaciones.appendChild(document.createTextNode("Cambia los filtros o agrega operaciones"));

operationContainer.appendChild(parrCardOperaciones);
//--------------------------------------------

//***************************************************************** */

//CONTAINER NUEVAS OPERACIONES*********//
const cardNewOperationContainer = document.createElement("div");
cardNewOperationContainer.classList.add("box");

containerNuevasOperaciones.appendChild(cardNewOperationContainer);
//--------------------------------------//

//FORMULARIO NUEVAS OPERACION**********//
const formNewOperation = document.createElement("form");

formNewOperation.className = "form is-three-quarters";

cardNewOperationContainer.appendChild(formNewOperation);

//--------------------------------------//

//LABELS, INPUTS Y SELECTS DEL FORMULARIO NUEVA OPERACION****//


const operaciones = [
    {
        label:'Descripción',
        input: {
            type: 'text',
        },
        
    },
    {
        label: 'Monto',
        input: {
            type: 'number',
        },

    },
    {
        label: 'Tipo',
        select: ['Ganancia', 'Gasto'],
    },
    {
        label: 'Categoría',
        select: ['Todas', 'Comida', 'Servicios', 'Salidas', 'Educación', 'Transporte', 'Trabajo'],
        //opcionesCategoria(),
    },
    {
        label: 'Fecha',
        input: {
            type: 'date',
        },

    }

];
//formNewOperation.appendChild(operaciones);
//---------------------------------//




/******************************************************** */
//ARRAY Y FORMULARIO DE NUEVAS OPERACIONES/

const recorrerOperaciones = () =>{


    for (const operacion of operaciones) {
        const label = document.createElement('label');
        label.appendChild(document.createTextNode(operacion.label));
        label.classList.add("label");
        formNewOperation.appendChild(label);
        let input
        if(operacion.select){
            input = document.createElement('select');
            input.classList.add("select");
            for (const option of operacion.select) {
                const opt = document.createElement('option');
                opt.value = option;
                opt.label = option;
                input.appendChild(opt);
            }
        }else{
            input = document.createElement('input');
            input.type = operacion.input.type;
            input.classList.add("input");
            
        }
        formNewOperation.appendChild(input);
    }


}


//BOTONES FORMULARIO NUEVA OPERACION
//CANCELAR
const buttonCancelar = document.createElement("button");
buttonCancelar.appendChild(document.createTextNode("Cancelar"));
buttonCancelar.className = "button is-light";
formNewOperation.appendChild(buttonCancelar);
//-----------

//AGREGAR
const buttonAgregar = document.createElement("button");
buttonAgregar.appendChild(document.createTextNode("Agregar"));
buttonAgregar.className = "button is-success";
formNewOperation.appendChild(buttonAgregar);
//---------------------------------//




//FILTROS
/*const operacionesAzZa = operaciones.input;

        if(sortBy.value==='az'){
            operacionesAzZa.sort(function (a, b) {
                if (a.input > b.input) {
                  return 1;
                }
                if (a.input < b.input) {
                  return -1;
                }
                // a tiene que ser igual a b
                return 0;
              });
        }
        if(sortBy.value==='za'){
            operacionesAzZa.sort(function (a, b) {
                if (a.input < b.input) {
                  return 1;
                }
                if (a.input > b.input) {
                  return -1;
                }
                // a tiene que ser igual a b
                return 0;
              });
        }
*/
//-----------------------------------------


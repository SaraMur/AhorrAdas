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

//TITULO DE CARD FILTROS

const tituloFiltro = document.createElement("h2");
tituloFiltro.appendChild(document.createTextNode("Filtros"));

tituloFiltro.classList.add("card-header-tittle");

cardFilterContainer.appendChild(tituloFiltro);

//-----------------------------------------------------------//

//creacion LABELS, INPUTS y SELECTS de FILTROS
//TIPO---------------------------------
//label TIPO
const labelTipo = document.createElement("label");
labelTipo.appendChild(document.createTextNode("Tipo"));

labelTipo.classList.add("label");

cardFilterContainer.appendChild(labelTipo);
//select TIPO
const selectTipo = document.createElement("select");
selectTipo.id = "select-tipo";

selectTipo.classList.add("select");

cardFilterContainer.appendChild(selectTipo);

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

cardFilterContainer.appendChild(labelCategoria);

//select CATEGORIA
const selectCategoria = document.createElement("select");
selectCategoria.id = "select-categoria";

selectCategoria.classList.add("select");

cardFilterContainer.appendChild(selectCategoria);

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

cardFilterContainer.appendChild(labelDesde);
//input DESDE
const inputDesde = document.createElement("input");
inputDesde.type = "date";

inputDesde.classList.add("input");

cardFilterContainer.appendChild(inputDesde);


//-----------------------------------------

//ORDENAR---------------------------------
//label ORDENAR
const labelOrdenar = document.createElement("label");
labelOrdenar.appendChild(document.createTextNode("Ordenar por"));

labelOrdenar.classList.add("label");

cardFilterContainer.appendChild(labelOrdenar);

//select ORDENAR

const selectOrdenar = document.createElement("select");
selectOrdenar.id = "select-ordenar";

selectOrdenar.classList.add("select");

cardFilterContainer.appendChild(selectOrdenar);

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


//-----------------------------------------

//***************************************************************** */
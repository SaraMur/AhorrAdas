//CARD FILTROS************************************************/
//creacion CONTAINER FILTROS
const cardFilterContainer = document.createElement("div");
cardFilterContainer.id = "card-filter-container";
cardFilterContainer.textContent = "Filtros";

cardFilterContainer.add

document.body.appendChild(cardFilterContainer);

//-----------------------------------------------------------//

//creacion LABELS, INPUTS y SELECTS de FILTROS
//TIPO---------------------------------
//label TIPO
const labelTipo = document.createElement("label");
labelTipo.appendChild(document.createTextNode("Tipo"));
cardFilterContainer.appendChild(labelTipo);
//select TIPO
const selectTipo = document.createElement("select");
selectTipo.id = "select-tipo";
cardFilterContainer.appendChild(selectTipo);

selectTipo.addEventListener("click",  
 seleccionarTipoOpciones = (e) =>{
    //buscar el metodo.. opcionesTipo.map/filter? for each? for of?
});

//opciones TIPO
const opcionesTipo = [
    {
        value: 'ganancia',
        label: 'Ganancia'
    },
    {
        value: 'gasto',
        label: 'Gasto'
    }
];






//-------------------------------------------

//CATEGORIA---------------------------------
//label CATEGORIA
const labelCategoria = document.createElement("label");
labelCategoria.appendChild(document.createTextNode("Categoría"));
cardFilterContainer.appendChild(labelCategoria);


//select CATEGORIA

//-----------------------------------------

//DESDE---------------------------------
//label DESDE
const labelDesde = document.createElement("label");
labelDesde.appendChild(document.createTextNode("Desde"));
cardFilterContainer.appendChild(labelDesde);
//input DESDE
const inputDesde = document.createElement("input");
//inputDesde.appendChild(document.createElement("type date"));???
cardFilterContainer.appendChild(inputDesde);


//-----------------------------------------

//ORDENAR---------------------------------
//label ORDENAR
const labelOrdenar = document.createElement("label");
labelOrdenar.appendChild(document.createTextNode("Ordenar por"));
cardFilterContainer.appendChild(labelOrdenar);

//select ORDENAR

//-----------------------------------------

//***************************************************************** */
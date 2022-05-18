const operaciones = [
    {
        label:'Descripción',
        input: {
            type: 'text',
        },
        value: input
    },
    {
        label: 'Monto',
        input: {
            type: 'number',
        },
        value: input

    },
    {
        label: 'Tipo',
        select: ['gasto', 'ganancia'],
        value: select
    },
    {
        label: 'Categoría',
        select: opcionesCategoria(),
        value: select
    },
    {
        label: 'Fecha',
        input: {
            type: 'date',
        },
        value: input
        
    }

]
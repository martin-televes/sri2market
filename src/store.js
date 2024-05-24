import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    opcionesSelect: { 
        tipo: [
          { id: 1, label: 'Residencial', value: 'residencial' },
          { id: 2, label: 'No Residencial', value: 'no-residencial' }
        ],
        uso: [
          { id: 1, label: 'Residencial - Hogar unifamiliar', value: 'r1'},
          { id: 2, label: 'Residencial - Hogar multifamiliar pequeño', value: 'r2'},
          { id: 3, label: 'Residencial - Hogar multifamiliar grande', value: 'r3'},
          { id: 4, label: 'Residencial - Otro', value: 'r4'},
          { id: 5, label: 'No residencial - Oficina', value: 'n1'},
          { id: 6, label: 'No residencial - Educativo', value: 'n2'},
          { id: 7, label: 'No residencial - Sanitario', value: 'n3'},
          { id: 8, label: 'No residencial - Otro', value: 'n4'}
        ],
        paisesUE: [
          { id: 1, label: "Austria", value: 'Austria' }, 
          { id: 2, label: "Bélgica", value: 'Belgium' }, 
          { id: 3, label: "Bulgaria", value: 'Bulgaria' }, 
          { id: 4, label: "Croacia", value: 'Croatia' }, 
          { id: 5, label: "Chipre", value: 'Cyprus' }, 
          { id: 6, label: "República Checa", value: 'Czech Republic' }, 
          { id: 7, label: "Dinamarca", value: 'Denmark' }, 
          { id: 8, label: "Estonia", value: 'Estonia' }, 
          { id: 9, label: "Finlandia", value: 'Finland' }, 
          { id: 10, label: "Francia", value: 'France' }, 
          { id: 11, label: "Alemania", value: 'Germany' }, 
          { id: 12, label: "Grecia", value: 'Greece' }, 
          { id: 13, label: "Hungría", value: 'Hungary' }, 
          { id: 14, label: "Irlanda", value: 'Ireland' }, 
          { id: 15, label: "Italia", value: 'Italy' }, 
          { id: 16, label: "Letonia", value: 'Latvia' },
          { id: 17, label: "Lituania", value: 'Lithuania' }, 
          { id: 18, label: "Luxemburgo", value: 'Luxembourg' }, 
          { id: 19, label: "Malta", value: 'Malta' }, 
          { id: 20, label: "Países Bajos", value: 'Netherlands' },
          { id: 21, label: "Polonia", value: 'Poland' }, 
          { id: 22, label: "Portugal", value: 'Portugal' }, 
          { id: 23, label: "Rumanía", value: 'Romania' }, 
          { id: 24, label: "Eslovaquia", value: 'Slovakia' },
          { id: 25, label: "Eslovenia", value: 'Slovenia' }, 
          { id: 26, label: "España", value: 'Spain' }, 
          { id: 27, label: "Suecia", value: 'Sweden' }, 
          { id: 28, label: "No UE", value: 'non EU' }
        ],
        area: [
          { id: 1, label: '< 200 m²', value: 'a1' },
          { id: 2, label: '200 - 500 m²', value: 'a2' },
          { id: 3, label: '500 - 1.000 m²', value: 'a3' },
          { id: 4, label: '1.000 - 10.000 m²', value: 'a4' },
          { id: 5, label: '10.000 - 25.000 m²', value: 'a5' },
          { id: 6, label: '> 25.000 m²', value: 'a6' }
        ],
        anho: [
          { id: 1, label: '< 1960', value: 't1' },
          { id: 2, label: '1960 - 1990', value: 't2' },
          { id: 3, label: '1990 - 2010', value: 't3' },
          { id: 4, label: '> 2010', value: 't4' },
          { id: 5, label: 'Todavía no construido', value: 't0' }
        ],
        estado: [
          { id: 1, label: 'Original', value: 0 },
          { id: 2, label: 'Renovado', value: 1 }
        ],
        ponderaciones: [
          { id: 1, label: 'Por defecto', value: 0 },
          { id: 2, label: 'Personalizada por el usuario', value: 1 }
        ],
        catalogo: [
          { id: 1, label: 'A: una metodología simplificada', value: "A" },
          { id: 2, label: 'B: una metodología detallada', value: "B" }
        ],
        dominios: [
          { id: 1, name: 'Calefacción' },
          { id: 2, name: 'Agua caliente' },
          { id: 3, name: 'Refrigeración' },
          { id: 4, name: 'Ventilación' },
          { id: 5, name: 'Iluminación' },
          { id: 6, name: 'Envolvente dinámico' },
          { id: 7, name: 'Electricidad' },
          { id: 8, name: 'Carga de vehículos eléctricos' },
          { id: 9, name: 'Monitoreo y control' }
        ]
    }
    ,
    datosServicios: {
        heating: [
          { id: 'H-1a', servicio: 'H-1a. Control de emisión de calor', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático centralizado (por ejemplo, termostato central)',                                           impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control individual por habitación (por ejemplo, válvulas termostáticas o control electrónico)',                             impactos: [2, 0, 2, 2, 2, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control individual por habitación con comunicación entre controladores y al BACS',  impactos: [2,	0, 2,	3, 2,	1, 0] },
              { label: 'level 4',  descripcion: '4 - Control individual por habitación con comunicación y detección de ocupación',            impactos: [3, 0, 2, 3, 2, 1, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-1b', servicio: 'H-1b. Control de emisión para TABS (modo de calefacción)', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático centralizado',                                           impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control automático centralizado avanzado',                                  impactos: [1, 0, 1, 2, 2, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control automático centralizado avanzado con operación intermitente y/o control de retroalimentación de temperatura ambiente',              impactos: [2,	0, 2, 3, 2, 1, 1] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-1c', servicio: 'H-1c. Almacenamiento y desplazamiento de energía térmica', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Vehículos de almacenamiento de agua caliente disponibles',                         impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Vehículos de almacenamiento de agua caliente controlados según señales externas (de BACS o la red)',    impactos: [2, 0, 1, 1, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-1d', servicio: 'H-1d. Control de bombas de distribución en redes', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de encendido y apagado',                                                       impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de múltiples etapas',                                                    impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control de velocidad variable de la bomba (estimaciones internas de la unidad de bomba)',                   impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control de velocidad variable de la bomba (señal de demanda externa)',                 impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-1f', servicio: 'H-1f. Almacenamiento de energía térmica (TES) para calefacción de edificios (excluyendo TABS)', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Operación de almacenamiento continua',                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Operación de almacenamiento programada por tiempo',                               impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Operación de almacenamiento basada en predicciones de carga',            impactos: [2, 1, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Almacenamiento de calor capaz de control flexible a través de señales de la red (por ejemplo, DSM)',   impactos: [2, 2, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-2a', servicio: 'H-2a. Control de generadores de calor (excepto bombas de calor)', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control de temperatura constante',                                       impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de temperatura variable según la temperatura exterior',  impactos: [1, 0, 1, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de temperatura variable según la carga (por ejemplo, según el punto de ajuste de temperatura del agua de suministro)',                               impactos: [2, 0, 2, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-2b', servicio: 'H-2b. Control de generadores de calor (para bombas de calor)', max_nivel: 3, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control encendido/apagado del generador de calor',                              impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de múltiples etapas de la capacidad del generador de calor según la carga o demanda (por ejemplo, encendido/apagado de varios compresores)',                    impactos: [1, 1, 1, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control variable de la capacidad del generador de calor según la carga o demanda (por ejemplo, derivación de gas caliente, control de frecuencia de inversor)',                           impactos: [2, 1, 2, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control variable de la capacidad del generador de calor según la carga Y señales externas de la red',                     impactos: [2, 3, 2, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-2d', servicio: 'H-2d. Secuenciación en caso de diferentes generadores de calor', max_nivel: 4, metodologia: 'B',
          niveles: [
            { label: 'level 0',  descripcion: '0 - Prioridades basadas solo en el tiempo de funcionamiento',        impactos: [0, 0, 0, 0, 0, 0, 0] },
            { label: 'level 1',  descripcion: '1 - Control según lista de prioridades fija: por ejemplo, basado en eficiencia energética clasificada',            impactos: [1, 0, 0, 0, 0, 0, 0] },
            { label: 'level 2',  descripcion: '2 - Control según lista de prioridades dinámica (basada en la eficiencia energética actual, emisiones de carbono y capacidad de los generadores, por ejemplo, energía solar, calor geotérmico, planta de cogeneración, combustibles fósiles)',        impactos: [2, 1, 0, 0, 0, 0, 0] },
            { label: 'level 3',  descripcion: '3 - Control según lista de prioridades dinámica (basada en la carga actual Y predicha, eficiencia energética, emisiones de carbono y capacidad de los generadores)',     impactos: [3, 2, 0, 0, 0, 0, 0] },
            { label: 'level 4',  descripcion: '4 - Control según lista de prioridades dinámica (basada en la carga actual Y predicha, eficiencia energética, emisiones de carbono, capacidad de los generadores Y señales externas de la red)',     impactos: [3, 3, 0, 0, 0, 0, 0] },
            { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-3', servicio: 'H-3. Informe sobre el rendimiento del sistema de calefacción', max_nivel: 4, metodologia: 'A',
              niveles: [
                { label: 'level 0',  descripcion: '0 - Ninguno',                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
                { label: 'level 1',  descripcion: '1 - Informe central o remoto de los KPI actuales de rendimiento (por ejemplo, temperaturas, uso de energía de submedición)',                           impactos: [1, 0, 0, 0, 0, 1, 1] },
                { label: 'level 2',  descripcion: '2 - Informe central o remoto de los KPI actuales de rendimiento y datos históricos',                            impactos: [1, 0, 0, 0, 0, 1, 2] },
                { label: 'level 3',  descripcion: '3 - Informe central o remoto de la evaluación del rendimiento, incluyendo pronósticos y/o benchmarking',      impactos: [1, 0, 0, 0, 0, 1, 3] },
                { label: 'level 4',  descripcion: '4 - Informe central o remoto de la evaluación del rendimiento, incluyendo pronósticos y/o benchmarking; también incluye gestión predictiva y detección de fallos',                   impactos: [1, 0, 0, 1, 0, 3, 3] },
                { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
          { id: 'H-4', servicio: 'H-4. Flexibilidad e interacción con la red', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                           impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Operación programada del sistema de calefacción',             impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control óptimo autoaprendizaje del sistema de calefacción',                      impactos: [2, 1, 2, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Sistema de calefacción capaz de un control flexible a través de señales de la red (por ejemplo, DSM)',      impactos: [2, 3, 2, 3, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control optimizado del sistema de calefacción basado en predicciones locales y señales de la red (por ejemplo, a través de control predictivo basado en modelos)',  impactos: [2, 3, 3, 3, 1, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ] },
        ],
        dhw: [
          { id: 'DHW-1a', servicio: 'DHW-1a. Control de carga del almacenamiento de agua caliente sanitaria (con calefacción eléctrica o bomba de calor)', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control automático de encendido y apagado',                                                impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático on / off y habilitación de carga programada',                             impactos: [1, 1, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control automático on / off, habilitación de carga programada y gestión de almacenamiento multisensor', impactos: [2, 2, 0, 2, 0, 0, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DHW-1b', servicio: 'DHW-1b. Control de carga de almacenamiento de agua caliente sanitaria', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Recipientes de almacenamiento de agua caliente sanitaria disponibles',           impactos: [1, 1, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de carga automático basado en la disponibilidad local de renovables o información de la red eléctrica (DR, DSM)',                            impactos: [2, 2, 0, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DHW-1d', servicio: 'DHW-1d. Control de carga de almacenamiento de agua caliente sanitaria (con colector solar y generación complementaria de calor)', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control seleccionado manualmente de la energía solar o generación de calor',  impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático de la carga del almacenamiento solar (Prioridad 1) y carga complementaria del almacenamiento', impactos: [1, 0, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control automático de la carga del almacenamiento solar (Prioridad 1) y carga complementaria del almacenamiento, suministro orientado a la demanda o gestión de almacenamiento multisensor', impactos: [2, 1, 0, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control automático de la carga del almacenamiento solar (Prioridad 1) y carga complementaria del almacenamiento, suministro orientado a la demanda, control de temperatura de retorno y gestión de almacenamiento multisensor', impactos: [3, 2, 0, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DHW-2b', servicio: 'DHW-2b. Secuenciación en caso de diferentes generadores de agua caliente sanitaria', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Prioridades basadas solo en tiempo de funcionamiento',        impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control según lista de prioridades fijas: por ejemplo, basado en eficiencia energética nominal',            impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control según lista de prioridades dinámica (basada en eficiencia energética actual, emisiones de carbono y capacidad de los generadores, por ejemplo, energía solar, calor geotérmico, planta de cogeneración, combustibles fósiles)',        impactos: [2, 1, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control según lista de prioridades dinámica (basada en carga actual Y predicha, eficiencia energética, emisiones de carbono y capacidad de los generadores)',     impactos: [3, 2, 0, 0, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control según lista de prioridades dinámica (basada en carga actual Y predicha, eficiencia energética, emisiones de carbono, capacidad de los generadores Y señales externas de la red)',     impactos: [3, 3, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DHW-3', servicio: 'DHW-3. Informe de información sobre el rendimiento del agua caliente doméstica', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Indicación de valores actuales (por ejemplo, temperaturas, uso de energía de submedición)',                           impactos: [1, 0, 0, 0, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Valores actuales y datos históricos',                            impactos: [1, 0, 0, 0, 0, 1, 2] },
              { label: 'level 3',  descripcion: '3 - Evaluación del rendimiento que incluye pronósticos y/o comparaciones de referencia',      impactos: [1, 0, 0, 0, 0, 1, 3] },
              { label: 'level 4',  descripcion: '4 - Evaluación del rendimiento que incluye pronósticos y/o comparaciones de referencia; también incluye gestión predictiva y detección de fallos',                   impactos: [1, 0, 0, 1, 0, 2, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
        ],
        cooling: [
          { id: 'C-1a', servicio: 'C-1a. Control de emisiones de refrigeración', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático centralizado',                                            impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control individual de habitaciones',                                              impactos: [1, 0, 1, 2, 2, 0, 0]  },
              { label: 'level 2',  descripcion: '3 - Control individual de habitaciones con comunicación entre controladores',       impactos: [2, 0, 2, 3, 2, 1, 0]  },
              { label: 'level 2',  descripcion: '4 - Control individual de habitaciones con comunicación y detección de ocupación',   impactos: [3, 0, 2, 3, 2, 1, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-1b', servicio: 'C-1b. Control de emisiones para TABS (modo de refrigeración)', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control automático centralizado',                                            impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control automático centralizado avanzado',                                   impactos: [1, 0, 1, 1, 2, 0, 0] },
              { label: 'level 2',  descripcion: '3 - Control automático centralizado avanzado con operación intermitente',       impactos: [2, 0, 2, 3, 2, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-1c', servicio: 'C-1c. Control de temperatura del agua enfriada en la red de distribución (suministro o retorno)', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control de temperatura constante',                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control compensado por temperatura exterior',                              impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control basado en la demanda',                                                 impactos: [2, 0, 1, 1, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-1d', servicio: 'C-1d. Control de bombas de distribución en redes', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de encendido/apagado',                                                       impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de varios niveles',                                                  impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control de bomba de velocidad variable (estimaciones de la unidad de la bomba (interno))',       impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control de bomba de velocidad variable (señal de demanda externa)',                 impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-1f', servicio: 'C-1f. Interbloqueo: evitando el calentamiento y enfriamiento simultáneo en la misma habitación', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin interbloqueo',                                                                                     impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Interbloqueo parcial (minimizando el riesgo de calentamiento y enfriamiento simultáneos)',                          impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Interbloqueo total (el sistema de control garantiza que no puede haber calentamiento y enfriamiento simultáneos)',      impactos: [3, 0, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-1g', servicio: 'C-1g. Control de la operación de almacenamiento de energía térmica (TES)', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Operación de almacenamiento continua',                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Operación de almacenamiento programada por tiempo',                                               impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Operación de almacenamiento basada en la predicción de carga',                                        impactos: [2, 1, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Almacenamiento en frío capaz de control flexible a través de señales de la red (por ejemplo, DSM)',      impactos: [2, 2, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-2a', servicio: 'C-2a. Control de generador para refrigeración', max_nivel: 3, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control de encendido/apagado de la producción de refrigeración',                                                                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control multinivel de la capacidad de producción de refrigeración según la carga o demanda (por ejemplo, encendido/apagado de varios compresores)',           impactos: [1, 1, 1, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control variable de la capacidad de producción de refrigeración según la carga o demanda (por ejemplo, control de frecuencia del inversor, bypass de gas caliente)', impactos: [2, 1, 2, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control variable de la capacidad de producción de refrigeración según la carga y señales externas de la red',                              impactos: [2, 3, 2, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-2b', servicio: 'C-2b. Secuenciación de diferentes generadores de refrigeración', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Prioridades basadas solo en tiempos de funcionamiento',                                                                                                      impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Secuenciación fija basada solo en cargas: por ejemplo, dependiendo de las características de los generadores como enfriador de absorción vs. enfriador centrífugo',   impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Prioridades dinámicas basadas en la eficiencia y características del generador (por ejemplo, disponibilidad de enfriamiento gratuito)',                                    impactos: [2, 1, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Secuenciación basada en la predicción de carga: la secuencia se basa, por ejemplo, en el COP y la potencia disponible de un dispositivo y la potencia requerida predicha',        impactos: [3, 2, 0, 0, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Secuenciación basada en lista de prioridades dinámicas, incluidas señales externas de la red',                                                             impactos: [3, 3, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-3', servicio: 'C-3. Informe sobre el rendimiento del sistema de refrigeración', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Informe central o remoto de KPIs de rendimiento actuales (por ejemplo, temperaturas, consumo de energía por submedición)',                                                        impactos: [1, 0, 0, 0, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Informe central o remoto de KPIs de rendimiento actuales y datos históricos',                                                                                  impactos: [1, 0, 0, 0, 0, 1, 2] },
              { label: 'level 3',  descripcion: '3 - Informe central o remoto de evaluación de rendimiento que incluye pronósticos y/o benchmarking',                                                              impactos: [1, 0, 0, 0, 0, 1, 3] },
              { label: 'level 4',  descripcion: '4 - Informe central o remoto de evaluación de rendimiento que incluye pronósticos y/o benchmarking; también incluye gestión predictiva y detección de fallas',    impactos: [1, 0, 0, 1, 0, 3, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'C-4', servicio: 'C-4. Flexibilidad e interacción con la red', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                                                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Operación programada del sistema de refrigeración',                                                                                        impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control óptimo autoaprendizaje del sistema de refrigeración',                                                                              impactos: [2, 1, 2, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Sistema de refrigeración capaz de control flexible a través de señales de la red (por ejemplo, DSM)',                                                  impactos: [2, 3, 2, 3, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control optimizado del sistema de refrigeración basado en predicciones locales y señales de la red (por ejemplo, a través del control predictivo del modelo)',     impactos: [2, 3, 3, 3, 1, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
        ],
        ventilation: [
          { id: 'V-1a', servicio: 'V-1a. Control del flujo de aire de suministro a nivel de habitación', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin sistema de ventilación o control manual',                                                                                impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de tiempo programado',                                                                                                          impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de detección de ocupación',                                                                                            impactos: [1, 0, 2, 2, 2, 0, 0]  },
              { label: 'level 3',  descripcion: '3 - Control de Demanda Central basado en sensores de calidad del aire (CO2, VOC, humedad, ...)',                                          impactos: [2, 0, 3, 3, 3, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control de Demanda Local basado en sensores de calidad del aire (CO2, VOC, ...) con flujo local desde/hacia la zona regulado por compuertas', impactos: [3, 0, 3, 3, 3, 0, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'V-1c', servicio: 'V-1c. Control del flujo de aire o presión a nivel del manipulador de aire', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático: Suministro continuo de flujo de aire para una carga máxima de todas las habitaciones',                                                                                          impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de tiempo de encendido/apagado: Suministro continuo de flujo de aire para una carga máxima de todas las habitaciones durante el tiempo de ocupación nominal',                                                             impactos: [1, 0, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de múltiples etapas: Para reducir la demanda de energía auxiliar del ventilador',                                                                                                            impactos: [2, 0, 0, 0, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control automático del flujo o la presión sin reinicio de presión: Suministro dependiente de la carga de flujo de aire para la demanda de todas las habitaciones conectadas',                                            impactos: [3, 0, 0, 0, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control automático del flujo o la presión con reinicio de presión: Suministro dependiente de la carga de flujo de aire para la demanda de todas las habitaciones conectadas (para sistemas de volumen de aire variable con VFD)',    impactos: [3, 0, 0, 0, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'V-2c', servicio: 'V-2c. Control de recuperación de calor: prevención del sobrecalentamiento', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control de sobrecalentamiento',                                                                          impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Modulación o bypass de recuperación de calor basado en sensores en el aire de escape',                                     impactos: [1, 0, 1, 1, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Modulación o bypass de recuperación de calor basado en múltiples sensores de temperatura de la habitación o control predictivo',    impactos: [2, 0, 2, 2, 2, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'V-2d', servicio: 'V-2d. Control de la temperatura del aire de suministro a nivel de la unidad de manipulación de aire', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                                                                                                     impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Punto de ajuste constante: Un bucle de control permite controlar la temperatura del aire de suministro, el punto de ajuste es constante y solo puede modificarse mediante una acción manual',    impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Punto de ajuste variable con compensación de temperatura exterior',                                                                                                 impactos: [2, 0, 2, 1, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Punto de ajuste variable con compensación dependiente de la carga. Un bucle de control permite controlar la temperatura del aire de suministro',                                       impactos: [3, 0, 2, 1, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'V-3', servicio: 'V-3. Enfriamiento libre con sistema de ventilación mecánica', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control automático',                                                                                                                       impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Enfriamiento nocturno',                                                                                                                              impactos: [1, 0, 3, 2, 1, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Enfriamiento libre: los flujos de aire se modulan durante todos los períodos de tiempo para minimizar el enfriamiento mecánico',                                                impactos: [2, 0, 3, 2, 1, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control dirigido: la cantidad de aire exterior y aire de recirculación se modulan durante todos los períodos de tiempo para minimizar el enfriamiento mecánico',  impactos: [3, 0, 3, 2, 1, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'V-6', servicio: 'V-6. Información de informes sobre CAI (Calidad del Aire Interior)', max_nivel: 3, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Sensores de calidad del aire (por ejemplo, CO2) y monitoreo autónomo en tiempo real',                                                                                     impactos: [0, 0, 0, 0, 2, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Monitoreo en tiempo real e información histórica de la CAI disponible para los ocupantes',                                                                            impactos: [0, 0, 0, 0, 3, 1, 2] },
              { label: 'level 3',  descripcion: '3 - Monitoreo en tiempo real e información histórica de la CAI disponible para los ocupantes + advertencia sobre necesidades de mantenimiento o acciones de los ocupantes (por ejemplo, apertura de ventanas)',   impactos: [0, 0, 0, 0, 3, 2, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
        lighting: [
          { id: 'L-1a', servicio: 'L-1a. Control de ocupación para iluminación interior', max_nivel: 3, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Interruptor manual encendido/apagado',                                             impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Interruptor manual encendido/apagado + señal adicional de extinción general',     impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Detección automática (encendido automático / atenuado o apagado automático)',               impactos: [2, 0, 2, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Detección automática (encendido manual / atenuado o apagado automático)',             impactos: [3, 0, 2, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'L-2', servicio: 'L-2. Control de la potencia de iluminación artificial basado en los niveles de luz natural', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Manual (central)',                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Manual (por habitación / zona)',                                 impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Conmutación automática',                                      impactos: [2, 0, 1, 1, 1, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Atenuación automática',                                        impactos: [3, 0, 2, 2, 2, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Atenuación automática incluyendo control de luz basado en escenas',    impactos: [3, 0, 3, 3, 3, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
        dbe: [
          { id: 'DE-1', servicio: 'DE-1. Control de sombreado solar en ventanas', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin protección solar o solo operación manual',                            impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Operación motorizada con control manual',                            impactos: [1, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Operación motorizada con control automático basado en datos de sensores',    impactos: [2, 0, 1, 2, 1, 0, 0]  },
              { label: 'level 3',  descripcion: '3 - Control combinado de luz/cortina/HVAC',                                  impactos: [3, 0, 2, 3, 2, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Control predictivo de cortinas (por ejemplo, basado en pronóstico del tiempo)',          impactos: [3, 0, 3, 3, 3, 0, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DE-2', servicio: 'DE-2. Control de apertura/cierre de ventanas, combinado con el sistema HVAC', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Operación manual o solo ventanas fijas',                                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Detección de apertura/cierre para apagar sistemas de calefacción o refrigeración',                                        impactos: [2, 0, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Nivel 1 + Apertura mecánica automatizada de ventanas basada en datos de sensores de la habitación',                              impactos: [2, 0, 2, 1, 1, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Nivel 2 + Coordinación centralizada de ventanas operables, por ejemplo, para controlar la refrigeración natural nocturna gratuita',   impactos: [2, 0, 2, 2, 1, 0, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'DE-4', servicio: 'DE-4. Información de informes sobre el rendimiento de sistemas de envolvente de edificios dinámicos', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin informes',                                                                                                                     impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Posición de cada producto y detección de fallos',                                                                                       impactos: [0, 0, 0, 0, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Posición de cada producto, detección de fallos y mantenimiento predictivo',                                                               impactos: [0, 0, 0, 0, 0, 1, 2] },
              { label: 'level 3',  descripcion: '3 - Posición de cada producto, detección de fallos, mantenimiento predictivo, datos de sensores en tiempo real (viento, lux, temperatura, ...)',               impactos: [0, 0, 0, 0, 0, 1, 3] },
              { label: 'level 4',  descripcion: '4 - Posición de cada producto, detección de fallos, mantenimiento predictivo, datos de sensores en tiempo real e históricos (viento, lux, temperatura, ...)',  impactos: [0, 0, 0, 1, 0, 2, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
        electricity: [
          { id: 'E-2', servicio: 'E-2. Información sobre generación eléctrica local', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguna',                                                                                                                       impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Datos de generación actual disponibles',                                                                                          impactos: [1, 0, 0, 0, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Valores reales e históricos disponibles',                                                                                          impactos: [1, 0, 0, 0, 0, 1, 2]  },
              { label: 'level 3',  descripcion: '3 - Evaluación del rendimiento incluyendo pronósticos y/o comparaciones',                                                           impactos: [1, 0, 0, 0, 0, 1, 3]  },
              { label: 'level 4',  descripcion: '4 - Evaluación del rendimiento incluyendo pronósticos y/o comparaciones; también incluye gestión predictiva y detección de fallos', impactos: [1, 0, 0, 1, 0, 2, 3]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-3', servicio: 'E-3. Almacenamiento de electricidad (generada localmente)', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                                                                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Almacenamiento local de electricidad (por ejemplo, batería eléctrica)',                                                                                                                               impactos: [0, 1, 0, 2, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Almacenamiento local de energía (por ejemplo, batería eléctrica o almacenamiento térmico) con controlador basado en señales de la red',                                                                           impactos: [0, 2, 0, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Almacenamiento local de energía (por ejemplo, batería eléctrica o almacenamiento térmico) con controlador que optimiza el uso de electricidad generada localmente',                                             impactos: [0, 2, 0, 2, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Almacenamiento local de energía (por ejemplo, batería eléctrica o almacenamiento térmico) con controlador que optimiza el uso de electricidad generada localmente y posibilidad de devolverla a la red',  impactos: [0, 3, 0, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-4', servicio: 'E-4. Optimización del autoconsumo de electricidad generada localmente', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                                 impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Programación del consumo de electricidad (cargas de enchufes, electrodomésticos, etc.)',                                                                   impactos: [0, 1, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Gestión automatizada del consumo local de electricidad basada en la disponibilidad actual de energía renovable',                                 impactos: [0, 2, 0, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Gestión automatizada del consumo local de electricidad basada en las necesidades energéticas actuales y previstas y la disponibilidad de energía renovable',  impactos: [0, 3, 0, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-5', servicio: 'E-5. Control de la planta de energía combinada (CHP)', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Control de CHP basado en la gestión programada del tiempo de funcionamiento y/o la demanda actual de energía térmica',                                                                                      impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de tiempo de funcionamiento de CHP influenciado por la disponibilidad fluctuante de ER; la sobreproducción se alimentará en la red',                                                          impactos: [1, 1, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de tiempo de funcionamiento de CHP influenciado por la disponibilidad fluctuante de ER y señales de red; control de carga dinámica y tiempo de funcionamiento para optimizar el autoconsumo de renovables',  impactos: [2, 2, 0, 1, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-8', servicio: 'E-8. Soporte de modos de operación de (micro)red', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Gestión automatizada del consumo de electricidad (a nivel de edificio) basada en señales de red',                                                             impactos: [0, 2, 0, 2, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Gestión automatizada del consumo de electricidad (a nivel de edificio) y suministro de electricidad a edificios vecinos (microred) o red',              impactos: [0, 2, 0, 2, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Gestión automatizada del consumo y suministro de electricidad (a nivel de edificio), con potencial para continuar una operación limitada fuera de la red (modo isla)',   impactos: [0, 3, 0, 3, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-11', servicio: 'E-11. Reporte de información sobre almacenamiento de energía', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                           impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Datos de estado de carga actuales disponibles',                                                                                   impactos: [1, 0, 0, 0, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Valores reales e históricos',                                                                                              impactos: [1, 0, 0, 0, 0, 1, 2] },
              { label: 'level 3',  descripcion: '3 - Evaluación del rendimiento que incluye pronósticos y/o comparaciones',                                                               impactos: [1, 0, 0, 0, 0, 1, 3] },
              { label: 'level 4',  descripcion: '4 - Evaluación del rendimiento que incluye pronósticos y/o comparaciones; también incluye gestión predictiva y detección de fallos',     impactos: [1, 0, 0, 1, 0, 2, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'E-12', servicio: 'E-12. Reporte de información sobre el consumo de electricidad', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                               impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Reporte sobre el consumo de electricidad actual a nivel de edificio',                                     impactos: [0, 0, 0, 0, 0, 0, 1] },
              { label: 'level 2',  descripcion: '2 - Retroalimentación en tiempo real o comparación en tiempo real a nivel de edificio',                                               impactos: [1, 0, 0, 0, 0, 0, 2] },
              { label: 'level 3',  descripcion: '3 - Retroalimentación en tiempo real o comparación en tiempo real a nivel de electrodoméstico',                                              impactos: [2, 0, 0, 0, 0, 1, 3] },
              { label: 'level 4',  descripcion: '4 - Retroalimentación en tiempo real o comparación en tiempo real a nivel de electrodoméstico con recomendaciones personalizadas automatizadas',  impactos: [3, 0, 0, 1, 0, 2, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
        ev: [
          { id: 'EV-15', servicio: 'EV-15. Capacidad de carga de vehículos eléctricos', max_nivel: 4, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - No presente',                                                    impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Conductos (o simple toma de corriente) disponible',                       impactos: [0, 0, 0, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Cero a nueve por ciento de espacios de estacionamiento tiene puntos de recarga',   impactos: [0, 0, 0, 2, 0, 0, 0]  },
              { label: 'level 3',  descripcion: '3 - Diez a cincuenta por ciento de espacios de estacionamiento tiene puntos de recarga',    impactos: [0, 0, 0, 3, 0, 0, 0] },
              { label: 'level 4',  descripcion: '4 - Más del 50% de los espacios de estacionamiento tiene puntos de recarga',           impactos: [0, 0, 0, 3, 0, 0, 0]  },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'EV-16', servicio: 'EV-16. Equilibrio de la red de carga de vehículos eléctricos', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - No presente (carga no controlada)',                                                                    impactos: [0,-2, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Carga controlada de un solo sentido (por ejemplo, incluyendo hora de salida deseada y señales de red para optimización)',    impactos: [0, 1, 0, 2, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Carga controlada de dos sentidos (por ejemplo, incluyendo hora de salida deseada y señales de red para optimización)',    impactos: [0, 3, 0, 2, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'EV-17', servicio: 'EV-17. Información y conectividad de carga de vehículos eléctricos', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - No hay información disponible',                                                                                             impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Información de estado de carga de vehículos eléctricos informada al ocupante',                                                              impactos: [0, 0, 0, 1, 0, 0, 2] },
              { label: 'level 2',  descripcion: '2 - Información de estado de carga de vehículos eléctricos informada al ocupante Y identificación automática y autorización del conductor', impactos: [0, 1, 0, 1, 0, 0, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
        monitoring: [
          { id: 'MC-3', servicio: 'MC-3. Gestión del tiempo de funcionamiento de sistemas HVAC', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Configuración manual',                                                                        impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Configuración del tiempo de funcionamiento de plantas de calefacción y refrigeración siguiendo un horario predefinido',    impactos: [1, 1, 1, 1, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Control de encendido/apagado de plantas de calefacción y refrigeración basado en cargas del edificio',                       impactos: [2, 1, 2, 2, 1, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Control de encendido/apagado de plantas de calefacción y refrigeración basado en control predictivo o señales de la red eléctrica',   impactos: [3, 2, 2, 3, 1, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-4', servicio: 'MC-4. Detección de fallos de sistemas técnicos del edificio y apoyo al diagnóstico de estos fallos', max_nivel: 3, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin indicación central de fallos detectados y alarmas',                                                          impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Con indicación central de fallos detectados y alarmas para al menos 2 sistemas técnicos relevantes',                            impactos: [0, 0, 0, 1, 1, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Con indicación central de fallos detectados y alarmas para todos los sistemas técnicos relevantes',                                   impactos: [0, 0, 0, 2, 2, 2, 2] },
              { label: 'level 3',  descripcion: '3 - Con indicación central de fallos detectados y alarmas para todos los sistemas técnicos relevantes, incluyendo funciones de diagnóstico',   impactos: [0, 0, 0, 3, 3, 3, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-9', servicio: 'MC-9. Detección de ocupación: servicios conectados', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Detección de ocupación para funciones individuales, por ejemplo, iluminación',                                  impactos: [1, 0, 1, 1, 0, 1, 0] },
              { label: 'level 2',  descripcion: '2 - Detección centralizada de ocupantes que alimenta varios sistemas técnicos del edificio como iluminación y calefacción',    impactos: [1, 0, 1, 1, 0, 2, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-13', servicio: 'MC-13. Informe centralizado del rendimiento y uso de energía de los sistemas técnicos del edificio', max_nivel: 3, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                                           impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Informe central o remoto del uso de energía en tiempo real por portador de energía',                                                          impactos: [1, 0, 0, 1, 0, 1, 1] },
              { label: 'level 2',  descripcion: '2 - Informe central o remoto del uso de energía en tiempo real por portador de energía, combinando sistemas técnicos de al menos 2 dominios en una interfaz',    impactos: [1, 0, 0, 2, 0, 2, 2] },
              { label: 'level 3',  descripcion: '3 - Informe central o remoto del uso de energía en tiempo real por portador de energía, combinando sistemas técnicos de todos los dominios principales en una interfaz',      impactos: [1, 0, 0, 3, 0, 3, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-25', servicio: 'MC-25. Integración de la Red Inteligente', max_nivel: 2, metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguna: sin armonización entre la red y los SBT; el edificio funciona de forma independiente de la carga de la red',      impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Gestión del lado de la demanda posible para (algunos) SBT individuales, pero no coordinada en varios dominios',       impactos: [0, 2, 0, 0, 0, 0, 0] },
              { label: 'level 2',  descripcion: '2 - Gestión coordinada del lado de la demanda de múltiples SBT',                                                        impactos: [1, 3, 0, 1, 0, 0, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-28', servicio: 'MC-28. Información de Reporte sobre el Desempeño y Operación de la Gestión del Lado de la Demanda', max_nivel: 2, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguno',                                                                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Información de reporte sobre el estado actual de la GSD, incluidos los flujos de energía gestionados',                            impactos: [0, 1, 0, 0, 0, 0, 2] },
              { label: 'level 2',  descripcion: '2 - Información de reporte sobre el estado actual, histórico y predicho de la GSD, incluidos los flujos de energía gestionados',   impactos: [0, 2, 0, 0, 0, 1, 3] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-29', servicio: 'MC-29. Anulación del control de GSD', max_nivel: 4, metodologia: 'B',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Sin control de GSD',                                                                                                         impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Control de GSD sin la posibilidad de anular este control por parte del usuario del edificio (ocupante o gerente de instalaciones)',       impactos: [0, 3, -2, 0, 0, -1, -2] },
              { label: 'level 2',  descripcion: '2 - Anulación manual y reactivación del control de GSD por parte del usuario del edificio',                                                  impactos: [0, 1, 0, 1, 0, 0, 0] },
              { label: 'level 3',  descripcion: '3 - Anulación programada del control de GSD (y reactivación) por parte del usuario del edificio',                                             impactos: [0, 1, 0, 2, 0, 1, 0] },
              { label: 'level 4',  descripcion: '4 - Anulación programada del control de GSD y reactivación con control optimizado',                                              impactos: [0, 2, 0, 3, 0, 1, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          },
          { id: 'MC-30', servicio: 'MC-30. Plataforma única que permite el control automatizado y la coordinación entre SBT + optimización del flujo de energía basada en la ocupación, el clima y las señales de la red', max_nivel: 3,
          metodologia: 'A',
            niveles: [
              { label: 'level 0',  descripcion: '0 - Ninguna',                                                                                                                                                   impactos: [0, 0, 0, 0, 0, 0, 0] },
              { label: 'level 1',  descripcion: '1 - Plataforma única que permite el control manual de múltiples SBT',                                                                                             impactos: [0, 0, 0, 1, 0, 1, 0] },
              { label: 'level 2',  descripcion: '2 - Plataforma única que permite el control automatizado y la coordinación entre SBT',                                                                               impactos: [1, 0, 0, 2, 0, 1, 0] },
              { label: 'level 3',  descripcion: '3 - Plataforma única que permite el control automatizado y la coordinación entre SBT + optimización del flujo de energía basada en la ocupación, el clima y las señales de la red',    impactos: [2, 0, 0, 3, 0, 1, 0] },
              { label: 'level -1',  descripcion: 'No aplicable' }
            ]
          }
        ],
      },
    datosPonderaciones: {
      residencial: {
        northEurope: [    
                          [ 0.299090510608208,  0.426728885193792,  0.16,   0.10,   0.20,   0.31459707154419,   0.114285714285714 ],
                          [ 0.092805264964947,  0.132410376972754,  0.00,   0.10,   0.00,   0.0976168201474652, 0.114285714285714 ],
                          [ 0.00,               0.00,	              0.16,	  0.10,	  0.20,	  0.00,	              0.114285714285714 ],
                          [ 0.187363947310881,	0.00,	              0.16,	  0.10,	  0.20,	  0.19707796485117,	  0.114285714285714 ],
                          [ 0.0369676699306249,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00 ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.13377260718534,	  0.190860737833454,	0.00,	  0.10,	  0.00,	  0.140708143457174,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20 ] 
                        ],
        westEurope: [     
                          [ 0.339668015186256,  0.457215993005328,  0.16,   0.10,   0.20,   0.34643472948636,   0.114285714285714 ],
                          [ 0.076210440038600,  0.102584377868239,  0.00,   0.10,   0.00,   0.0777286703439871, 0.114285714285714 ],
                          [ 0.0303893122300324, 0.0409060581120194,	0.16,	  0.10,	  0.20,	  0.0309947145182771,	0.114285714285714 ],
                          [ 0.178171975395353,	0.00,	              0.16,	  0.10,	  0.20,	  0.181721437811249,	0.114285714285714 ],
                          [ 0.0146493272559673,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.110910929893791,	0.149293571014414,	0.00,	  0.10,	  0.00,	  0.113120447840127,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ],
        southEurope: [     
                          [ 0.316664041326773,  0.376243256143256,  0.16,   0.10,   0.20,   0.328404652087307,  0.114285714285714 ],
                          [ 0.099794349364438,  0.118570301800792,  0.00,   0.10,   0.00,   0.103494316708629,  0.114285714285714 ],
                          [ 0.0688087545300087, 0.0817548773364425,	0.16,	  0.10,	  0.20,	  0.0713599024294329,	0.114285714285714 ],
                          [ 0.0919518532877628,	0.00,	              0.16,	  0.10,	  0.20,	  0.095361052872402,	0.114285714285714 ],
                          [ 0.0268128298866479,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.14596817160437,	  0.17343156471951,	  0.00,	  0.10,	  0.00,	  0.151380075902229,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                      ],
        northEastEurope: [     
                          [ 0.303829758306122,  0.411719277437284,  0.16,   0.10,   0.20,   0.30636313934145,   0.114285714285714 ],
                          [ 0.139276802303361,  0.188733798584468,  0.00,   0.10,   0.00,   0.140438114518411,  0.114285714285714 ],
                          [ 0.00,               0.00,	              0.16,	  0.10,	  0.20,	  0.00,	              0.114285714285714 ],
                          [ 0.190332828383569,	0.00,	              0.16,	  0.10,	  0.20,	  0.191919853895867,	0.114285714285714 ],
                          [ 0.006201907254835,  0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.110358703752113,	0.149546923978248,	0.00,	  0.10,	  0.00,	  0.111278892244273,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ],
                        
        southEastEurope: [     
                          [ 0.206205389313451,  0.244382451275582,  0.16,   0.10,   0.20,   0.208709733468151,  0.114285714285714 ],
                          [ 0.0580318116485613, 0.0687758764688753, 0.00,   0.10,   0.00,   0.058736602288479,  0.114285714285714 ],
                          [ 0.146592735404923,  0.17373305390671,	  0.16,	  0.10,	  0.20,	  0.148373089746074,	0.114285714285714 ],
                          [ 0.10816450153836,	  0.00,	              0.16,	  0.10,	  0.20,	  0.109478148762012,	0.114285714285714 ],
                          [ 0.0089993795919985, 0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.222006182502705,	0.263108618348833,	0.00,	  0.10,	  0.00,	  0.224702425735285,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ]
      },

      noResidencial: {
        northEurope: [    
                          [ 0.313218935871908,  0.493837245146382,  0.16,   0.10,   0.20,   0.349623516027657,  0.114285714285714 ],
                          [ 0.0536862990236882, 0.0846446078943496, 0.00,   0.10,   0.00,   0.0599261107088688, 0.114285714285714 ],
                          [ 0.0936961875833051, 0.147726276599639,	0.16,	  0.10,	  0.20,	  0.104586239175076,	0.114285714285714 ],
                          [ 0.196214637763448,	0.00,	              0.16,	  0.10,	  0.20,	  0.219020128396722,	0.114285714285714 ],
                          [ 0.0780938176785907,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00 ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.0150901220790601,	0.0237918703596299,	0.00,	  0.10,	  0.00,	  0.0168440056916775,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20 ] 
                        ],
        westEurope: [     
                          [ 0.272780872338696,  0.40662223154885,   0.16,   0.10,   0.20,   0.316587776494549,  0.114285714285714 ],
                          [ 0.0825849793535045, 0.123105730651973,  0.00,   0.10,   0.00,   0.0958476111657529, 0.114285714285714 ],
                          [ 0.126701525794181,  0.188868290937589,	0.16,	  0.10,	  0.20,	  0.147048999388204,	0.114285714285714 ],
                          [ 0.143086498291582,	0.00,	              0.16,	  0.10,	  0.20,	  0.166065296118994,	0.114285714285714 ],
                          [ 0.103779048201677,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.0210670760203591,	0.0314037468615883,	0.00,	  0.10,	  0.00,	  0.0244503168325009,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ],
        southEurope: [     
                          [ 0.301977421739789,  0.417460186245778,  0.16,   0.10,   0.20,   0.359375228915857,  0.114285714285714 ],
                          [ 0.107271979412709,  0.148295128313171,  0.00,   0.10,   0.00,   0.127661505074105,  0.114285714285714 ],
                          [ 0.117432152913538,  0.162340774168114,	0.16,	  0.10,	  0.20,	  0.139752855005663,	0.114285714285714 ],
                          [ 0.0876872014381328,	0.00,	              0.16,	  0.10,	  0.20,	  0.104354186178111,	0.114285714285714 ],
                          [ 0.119786651717529,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.0158445927783021,	0.0219039112729367,	0.00,	  0.10,	  0.00,	  0.0188562248262636,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                      ],
        northEastEurope: [     
                          [ 0.29247812776352,   0.444277120585925,  0.16,   0.10,   0.20,   0.324032703255978,  0.114285714285714 ],
                          [ 0.0938783062217452, 0.142602060169789,  0.00,   0.10,   0.00,   0.104006551104294,  0.114285714285714 ],
                          [ 0.0838776515530687, 0.127410968466117,	0.16,	  0.10,	  0.20,	  0.0929269562251821,	0.114285714285714 ],
                          [ 0.18322164888626,	  0.00,	              0.16,	  0.10,	  0.20,	  0.202988875228425,	0.114285714285714 ],
                          [ 0.0730356269029061,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.0235086386725003,	0.0357098507781683,	0.00,	  0.10,	  0.00,	  0.0260449141861213,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ],
                        
        southEastEurope: [     
                          [ 0.287063086242738,  0.421843248904747,  0.16,   0.10,   0.20,   0.32573870075996,   0.114285714285714 ],
                          [ 0.115722725519248, 0.170056175261324,   0.00,   0.10,   0.00,   0.131313889056311,  0.114285714285714 ],
                          [ 0.0745857283830771, 0.109604778499591,	0.16,	  0.10,	  0.20,	  0.0846345609138849,	0.114285714285714 ],
                          [ 0.150578196510228,	0.00,	              0.16,	  0.10,	  0.20,	  0.170865389681431,	0.114285714285714 ],
                          [ 0.089049016344213,	0.00,	              0.16,	  0.10,	  0.00,	  0.00,	              0.00              ],
                          [ 0.05,	              0.00,	              0.16,	  0.10,	  0.20,	  0.05,	              0.114285714285714 ],
                          [ 0.0330012470004962,	0.0484957973343379,	0.00,	  0.10,	  0.00,	  0.0374474595884134,	0.114285714285714 ],
                          [ 0.00,	              0.05,	              0.00,	  0.10,	  0.00,	  0.00,	              0.114285714285714 ],
                          [ 0.20,	              0.20,	              0.20,	  0.20,	  0.20,	  0.20,	              0.20              ] 
                        ]
        }
    },
    datosPonderacionesImpacto: {
      residencial: {
        northEurope:        [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        westEurope:         [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        southEurope:        [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        northEastEurope:    [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        southEastEurope:    [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333]
      },
      noResidencial: {
        northEurope:        [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        westEurope:         [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        southEurope:        [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        northEastEurope:    [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333],
        southEastEurope:    [0.16666666667, 0.33333333333, 0.083333333333, 0.083333333333, 0.0833333333333, 0.16666666667, 0.083333333333]
      }
    },
    datosMetodologiaSimple: {
      heating:      [true,  false,  true,   false,  false,  true,   true,   false,  true, false],
      dhw:          [true,  true,   false,  false,  true],
      cooling:      [true,  false,  false,  false,  false,  false,  true,   false,  true, true],
      ventilation:  [true,  false,  false,  false,  false,  true],
      lighting:     [true,  false],
      dbe:          [true,  false,  true],
      electricity:  [true,  true,   false,  false,  false,  true,   true],
      ev:           [true,  true,   true],
      monitoring:   [false, false,  false,  true,   true,   false,  false,  true]
    },
    datosEdificio: {
      organizacion: '',
      correo: '',
      telefono: '',
      tipo: '',
      uso: '',
      ubicacion: '',
      region: '',
      area: '',
      anho: '',
      estado: '',
      descripcion: '',
      direccion: '',
      ponderaciones: '',
      catalogo: '',
      dominios: [],
      tablaCoeficientesDominio: [],
      tablaCoeficientesImpacto: []
    },
    datosResultados: {
      matrizReal: [],
      matrizPerfecta: [],
      matrizPorcentajes: [],
      tuplaPuntuacionesCriteriosImpacto: [],
      tuplaFuncionalidadesClave: [],
      tuplaDominios: [],
      sri: 0,
      clase: ''
    }
  },
  getters: {
    // GETTERS SELECT
    getTipos (state)                { return state.opcionesSelect.tipo; },
    getUsos (state)                 { return state.opcionesSelect.uso; },
    getPaises (state)               { return state.opcionesSelect.paisesUE; },
    getAreas (state)                { return state.opcionesSelect.area; },
    getAnhos (state)                { return state.opcionesSelect.anho; },
    getEstados (state)              { return state.opcionesSelect.estado; },
    getPonderaciones (state)        { return state.opcionesSelect.ponderaciones; },
    getCatalogos (state)            { return state.opcionesSelect.catalogo; },
    getDominios (state)             { return state.opcionesSelect.dominios; },

    getEdificio (state)             { return state.datosEdificio; },

    getServiciosCalefaccion(state)      { return state.datosServicios.heating; },
    getServiciosACS(state)              { return state.datosServicios.dhw; },
    getServiciosRefrigeracion(state)    { return state.datosServicios.cooling; },
    getServiciosVentilacion(state)      { return state.datosServicios.ventilation; },
    getServiciosIluminacion(state)      { return state.datosServicios.lighting; },
    getServiciosED(state)               { return state.datosServicios.dbe; },
    getServiciosElectricidad(state)     { return state.datosServicios.electricity; },
    getServiciosEV(state)               { return state.datosServicios.ev; },
    getServiciosMonitorizacion(state)   { return state.datosServicios.monitoring; },
    

    getCalefaccionCatalogoA(state)      { return state.datosMetodologiaSimple.heating; },
    getACSCatalogoA(state)              { return state.datosMetodologiaSimple.dhw; },
    getRefrigeracionCatalogoA(state)    { return state.datosMetodologiaSimple.cooling; },
    getVentilacionCatalogoA(state)      { return state.datosMetodologiaSimple.ventilation; },
    getIluminacionCatalogoA(state)      { return state.datosMetodologiaSimple.lighting; },
    getEDCatalogoA(state)               { return state.datosMetodologiaSimple.dbe; },
    getElectricidadCatalogoA(state)     { return state.datosMetodologiaSimple.electricity; },
    getEVCatalogoA(state)               { return state.datosMetodologiaSimple.ev; },
    getMonitorizacionCatalogoA(state)   { return state.datosMetodologiaSimple.monitoring; },

    getMatrizReal(state)                { return state.datosResultados.matrizReal; },
    getMatrizPerfecta(state)            { return state.datosResultados.matrizPerfecta; },
    getMatrizPorcentajes(state)         { return state.datosResultados.matrizPorcentajes; },
    getTuplaCriteriosImpacto(state)     { return state.datosResultados.tuplaPuntuacionesCriteriosImpacto; },
    getSRI(state)                       { return state.datosResultados.sri; },
    getClase(state)                     { return state.datosResultados.clase },
    getTuplaFuncionalidadesClave(state) { return state.datosResultados.tuplaFuncionalidadesClave },
    getTuplaDominios(state)             { return state.datosResultados.tuplaDominios },
    getData(state)             { return state.datosResultados.data },

    obtenerMatrizPorTipoYRegion: (state) => (tipo, region) => {
      if (tipo === 'no residencial') tipo = 'noResidencial';
      if (state.datosPonderaciones[tipo] && state.datosPonderaciones[tipo][region]) {
        return state.datosPonderaciones[tipo][region];
      } else {
        return null;
      }
    },

    obtenerVectorPorTipoYRegion: (state) => (tipo, region) => {
      if (tipo === 'no residencial') tipo = 'noResidencial';
      if (state.datosPonderacionesImpacto[tipo] && state.datosPonderacionesImpacto[tipo][region]) {
        return state.datosPonderacionesImpacto[tipo][region];
      } else {
        return null;
      }
    }

  },
  mutations: {

    updateEdificio (state, edificio) {
      switch (edificio.ubicacion) {
        case "-": case "no UE":
          edificio.region = "userDefined"; break;
        case "Austria": case "Bélgica": case "Francia": case "Alemania": case "Irlanda": case "Luxemburgo": case "Suiza": case "Países Bajos":
          edificio.region = "westEurope"; break;
        case "Chipre": case "Grecia": case "Italia": case "España": case "Portugal": case "Malta":
          edificio.region = "southEurope"; break;
        case "Dinamarca": case "Suecia": case "Finlandia":
          edificio.region = "northEurope"; break;
        case "República Checa": case "Estonia": case "Lituania": case "Letonia": case "Eslovaquia": case "Polonia":
          edificio.region = "northEastEurope"; break;
        case "Hungría": case "Eslovenia": case "Rumanía": case "Bulgaria": case "Croatia":
          edificio.region = "southEastEurope"; break;
        default:
            break;
      }

      state.datosEdificio = edificio;
    },

    updateMatrizReal(state, matriz) {
      state.datosResultados.matrizReal = matriz;
    },

    updateMatrizPerfecta(state, matriz) {
      state.datosResultados.matrizPerfecta = matriz;
    },

    updateMatrizPorcentajes(state, matriz) {
      state.datosResultados.matrizPorcentajes = matriz;
    },

    updateTuplaPuntuacionesCriteriosImpacto(state, tupla) {
      state.datosResultados.tuplaPuntuacionesCriteriosImpacto = tupla;
    },

    updateTuplaFuncionalidadesClave(state, tupla) {
      state.datosResultados.tuplaFuncionalidadesClave = tupla;
    },

    updateTuplaDominios(state, tupla) {
      state.datosResultados.tuplaDominios = tupla;
    },


    updateSRI(state, sri) {
      state.datosResultados.sri = sri;

      if      (sri >= 0 && sri < 20 ) state.datosResultados.clase = 'G';
      else if (sri >= 20 && sri < 35) state.datosResultados.clase = 'F';
      else if (sri >= 35 && sri < 50) state.datosResultados.clase = 'E';
      else if (sri >= 50 && sri < 65) state.datosResultados.clase = 'D';
      else if (sri >= 65 && sri < 80) state.datosResultados.clase = 'C';
      else if (sri >= 80 && sri < 90) state.datosResultados.clase = 'B';
      else if (sri >= 90 && sri <= 100) state.datosResultados.clase = 'A';
    }
  }
});
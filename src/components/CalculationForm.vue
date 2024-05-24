<template>
    <div id="page">
        <button id="back" @click="goBack">
            Retroceder
        </button>

        <form @submit.prevent="submit">
        <h2>Evaluación de servicios</h2>

        <div class="tab">
        <button v-if="edificio.dominios[0]" type="button" class="tablinks" @click="openVentana($event, 'Calefaccion')">Calefacción</button>
        <button v-if="edificio.dominios[1]" type="button" class="tablinks" @click="openVentana($event, 'ACS')">ACS</button>
        <button v-if="edificio.dominios[2]" type="button" class="tablinks" @click="openVentana($event, 'Refrigeracion')">Refrigeración</button>
        <button v-if="edificio.dominios[3]" type="button" class="tablinks" @click="openVentana($event, 'Ventilacion')">Ventilación</button>
        <button v-if="edificio.dominios[4]" type="button" class="tablinks" @click="openVentana($event, 'Iluminacion')">Iluminación</button>
        <button v-if="edificio.dominios[5]" type="button" class="tablinks" @click="openVentana($event, 'Envolvente dinamica')">Envolvente dinámica</button>
        <button v-if="edificio.dominios[6]" type="button" class="tablinks" @click="openVentana($event, 'Electricidad')">Electricidad</button>
        <button v-if="edificio.dominios[7]" type="button" class="tablinks" @click="openVentana($event, 'Carga EV')">Carga EV</button>
        <button v-if="edificio.dominios[8]" type="button" class="tablinks" @click="openVentana($event, 'Monitorizacion y control')">Monitorización y control</button>
        </div>

        
        <div id="Calefaccion" class="tabcontent"  v-if="edificio.dominios[0]">
            <h3>Calefacción</h3>
            <div v-for="(servicio, index) in calefaccion" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresCalefaccion[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="ACS" class="tabcontent"  v-if="edificio.dominios[1]">
            <h3>Agua caliente doméstica</h3>
            <div v-for="(servicio, index) in acs" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresACS[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Refrigeracion" class="tabcontent"  v-if="edificio.dominios[2]">
            <h3>Refrigeración</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in refrigeracion" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresRefrigeracion[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Ventilacion" class="tabcontent" v-if="edificio.dominios[3]">
            <h3>Ventilación</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in ventilacion" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresVentilacion[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Iluminacion" class="tabcontent" v-if="edificio.dominios[4]">
            <h3>Iluminación</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in iluminacion" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresIluminacion[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Envolvente dinamica" class="tabcontent" v-if="edificio.dominios[5]">
            <h3>Envolvente dinámica del edificio</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in ed" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresED[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Electricidad" class="tabcontent" v-if="edificio.dominios[6]">
            <h3>Electricidad</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in electricidad" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresElectricidad[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Carga EV" class="tabcontent" v-if="edificio.dominios[7]">
            <h3>Carga de vehículos eléctricos</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in ev" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresEV[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <div id="Monitorizacion y control" class="tabcontent" v-if="edificio.dominios[8]">
            <h3>Monitorización y control</h3>
            <!-- Incluir bucle con v-for directive para este dominio -->
            <div v-for="(servicio, index) in monitorizacion" :key="index" class="servicio">
                <div class="elementoServicio">
                    <label> {{ servicio.servicio }} </label>
                    <select v-model="valoresMonitorizacion[index]">
                        <option v-for="(nivel, nivelIndex) in servicio.niveles" :key="nivelIndex">{{ nivel.descripcion }}</option>
                    </select>
                </div>
                <div class="elementoServicio">
                    <label>Porcentaje</label>
                    <input type="text" value="100.0">
                </div>
            </div>
        </div>

        <button id="guardar" action="/post/resultados">Guardar</button>
        <div id="errorMessage" style="color: red; font-weight: bold ; display: none;">Queda algún servicio sin evaluar</div>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                edificio: this.$store.state.datosEdificio,
                valoresCalefaccion: [], // Un array para almacenar los valores de los select
                valoresACS: [],
                valoresRefrigeracion: [],
                valoresVentilacion: [],
                valoresIluminacion: [],
                valoresED: [],
                valoresElectricidad: [],
                valoresEV: [],
                valoresMonitorizacion: []
            }
        },
        computed: {
            calefaccion() { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosCalefaccion.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosCalefaccion; 
            },
            acs()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosACS.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosACS; 
            },
            refrigeracion()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosRefrigeracion.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosRefrigeracion; 
            },
            ventilacion()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosVentilacion.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosVentilacion; 
            },
            iluminacion()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosIluminacion.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosIluminacion; 
            },
            ed()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosED.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosED; 
            },
            electricidad()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosElectricidad.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosElectricidad; 
            },
            ev()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosEV.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosEV; 
            },
            monitorizacion()           { 
                if (this.edificio.catalogo[0] === 'A') return this.$store.getters.getServiciosMonitorizacion.filter(servicio => servicio.metodologia === 'A');
                else return this.$store.getters.getServiciosMonitorizacion; 
            },

        },
        methods: {
            openVentana: function openVentana(evt, cityName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
                }
                document.getElementById(cityName).style.display = "block";
                evt.currentTarget.className += " active";
                
            },

            goBack() {
                this.$router.go(-1);
            },

            submit() {
                var serviciosDominios = [this.calefaccion, this.acs, this.refrigeracion, this.ventilacion, this.iluminacion, this.ed, this.electricidad, this.ev, this.monitorizacion];
                var nivelesServicios = [this.valoresCalefaccion, this.valoresACS, this.valoresRefrigeracion, this.valoresVentilacion, this.valoresIluminacion, this.valoresED, this.valoresElectricidad, this.valoresEV, this.valoresMonitorizacion];

                let filas = 0;
                let longitudes = [ this.calefaccion.length, this.acs.length, this.refrigeracion.length, this.ventilacion.length, this.iluminacion.length, this.ed.length, 
                                   this.electricidad.length, this.ev.length, this.monitorizacion.length ];

                for (let i = 0; i < this.edificio.dominios.length; i++) if (this.edificio.dominios[i]) filas += longitudes[i];
                
                for (let i = 0; i < this.edificio.dominios.length; i++) {
                    if (this.edificio.dominios[i]) {
                        if (nivelesServicios[i].length != serviciosDominios[i].length) {
                            document.getElementById("errorMessage").style.display = 'block';
                            return;
                        }
                    }
                } 

                var sumResultados = 0;
                var sumPerfecta = 0;

                var matrizCoeficientes;
                var vectorImpacto;

                if (this.edificio.ponderaciones === 'Por defecto') {
                    matrizCoeficientes = this.$store.getters.obtenerMatrizPorTipoYRegion(this.edificio.tipo.toLowerCase(), this.edificio.region);
                    vectorImpacto = this.$store.getters.obtenerVectorPorTipoYRegion(this.edificio.tipo.toLowerCase(), this.edificio.region);
                } else if (this.edificio.ponderaciones === 'Personalizada por el usuario') {
                    matrizCoeficientes = this.edificio.tablaCoeficientesDominio;
                    vectorImpacto = this.edificio.tablaCoeficientesImpacto;
                }

                var matrizResultados = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var matrizPorcentajes = new Array(9).fill().map(() => new Array(7).fill(-1));
                var matrizValidez = new Array(9).fill().map(() => new Array(7).fill(-1));
                var matrizResultadosDomain = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var matrizResultadosImpact = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var totalesResultados = new Array(7).fill(-1);
                
                var matrizPerfecta = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var matrizPerfectaDomain = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var matrizPerfectaImpact = new Array(filas).fill().map(() => new Array(7).fill(-1));
                var totalesPerfecta = new Array(7).fill(-1);

                var tuplaPuntuacionesCriteriosImpacto = new Array(7).fill(-1);
                var tuplaFuncionalidadesClave = new Array(3).fill(-1);
                var tuplaDominios = new Array(9).fill(-1);

                console.log(`Número de filas en las matrices: ${filas}`);

                var indice = 0;
                var checkpoint = 0;
                var numerador = 0;
                var denominador = 0;

                /* Bucle en el que se generan:
                    * Tabla de Ordinal Impact Scores:
                        - matrizResultados
                        - matrizPerfecta
                    * Puntuaciones de impacto SRI por dominio:
                        - matrizResultadosDomain
                        - matrizPerfectaDomain
                    * Puntuaciones de impacto SRI por dominio tras aplicar también ponderaciones de impacto:
                        - matrizResultadosImpact
                        - matrizPerfectaImpact
                    * Porcentajes por dominio y criterio de impacto:
                        - matrizPorcentajes
                    * */
                for (let i = 0; i < serviciosDominios.length; i++) {
                    if (this.edificio.dominios[i]) {
                        serviciosDominios[i].forEach((servicio, index) => {

                            const match = nivelesServicios[i][index].match(/^\d+/);
                            
                            if (match) {
                                let nivelReal = parseInt(match[0]);
                                let nivelPerfecto = servicio.max_nivel;
                                if (i === 0) {
                                    matrizResultados[index] = servicio.niveles[nivelReal].impactos;
                                    matrizPerfecta[index] = servicio.niveles[nivelPerfecto].impactos;
                                } else {
                                    matrizResultados[indice] = servicio.niveles[nivelReal].impactos;
                                    matrizPerfecta[indice] = servicio.niveles[nivelPerfecto].impactos;
                                }
                                
                                for (let j = 0; j < 7; j++) {
                                    if (i === 0) {
                                        matrizResultadosDomain[index][j] = matrizResultados[index][j] * matrizCoeficientes[i][j];
                                        matrizResultadosImpact[index][j] = matrizResultadosDomain[index][j] * vectorImpacto[j];
                                        matrizPerfectaDomain[index][j] = matrizPerfecta[index][j] * matrizCoeficientes[i][j];
                                        matrizPerfectaImpact[index][j] = matrizPerfectaDomain[index][j] * vectorImpacto[j];
                                    } else {
                                        matrizResultadosDomain[indice][j] = matrizResultados[indice][j] * matrizCoeficientes[i][j];
                                        matrizResultadosImpact[indice][j] = matrizResultadosDomain[indice][j] * vectorImpacto[j];
                                        matrizPerfectaDomain[indice][j] = matrizPerfecta[indice][j] * matrizCoeficientes[i][j];
                                        matrizPerfectaImpact[indice][j] = matrizPerfectaDomain[indice][j] * vectorImpacto[j];
                                    }
                                }
                            }
                            
                            if (i===0) indice = index;
                            else indice++;
                        });

                        for (let j = 0; j < 7; j++) {
                            numerador = 0;
                            denominador = 0;
                            for (let k = 0; k < serviciosDominios[i].length; k++) {
                                numerador += matrizResultados[k+checkpoint][j];
                                denominador += matrizPerfecta[k+checkpoint][j];
                            }
                            if (denominador !== 0) {
                                matrizPorcentajes[i][j] = (numerador * 100) / denominador;
                                matrizValidez[i][j] = 1;
                            } else {
                                matrizPorcentajes[i][j] = 0;
                                matrizValidez[i][j] = 0;
                            }
                        }

                        if (i===0) indice++;
                        checkpoint=indice;
                    }
                }
                
                // Se calculan las tuplas finales de puntuaciones por impacto para todos los criterios (sumatorio de las columnas de la última tabla)
                for (let i = 0; i < 7; i++) {
                    sumResultados = 0;
                    sumPerfecta = 0;

                    for (let j = 0; j < filas; j++) {
                        if (matrizResultadosImpact[j][i] != -1 && matrizPerfectaImpact[j][i] != -1) {
                            sumResultados += matrizResultadosImpact[j][i];
                            sumPerfecta += matrizPerfectaImpact[j][i];
                        }
                    }
                    totalesResultados[i] = sumResultados;
                    totalesPerfecta[i] = sumPerfecta;
                }


                console.log(matrizResultados);
                console.log(matrizPerfecta);
                console.log('');
                console.log(matrizResultadosDomain);
                console.log(matrizResultadosImpact);
                console.log('')
                console.log(matrizPerfectaDomain);
                console.log(matrizPerfectaImpact);
                console.log('')
                console.log(totalesResultados);
                console.log(totalesPerfecta);
                console.log('');
                console.log(matrizCoeficientes);
                console.log(vectorImpacto);
                console.log('')

                // Cálculo SRI
                var actual = 0; var perfecto = 0;
                for (let i = 0; i < 7; i++) { actual += totalesResultados[i]; perfecto += totalesPerfecta[i]; }
 
                console.log('')
                console.log(actual);
                console.log(perfecto);

                var sri = actual*100/perfecto;
                console.log('SRI: ', sri);

                // Tupla de porcentajes de puntuación de criterios
                for (let i = 0; i < 7; i++) {
                    tuplaPuntuacionesCriteriosImpacto[i] = totalesResultados[i]*100/totalesPerfecta[i];
                }

                // Tupla puntuaciones dominios
                var suma_producto = 0;
                var suma = 0;
                var coeficiente = 0;
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 7; j++) {
                        if (matrizValidez[i][j] === 1) coeficiente = vectorImpacto[j];
                        else if (matrizValidez[i][j] === 0) coeficiente = 0;

                        suma_producto += matrizPorcentajes[i][j]*coeficiente;
                        suma += coeficiente;
                    }
                    if (suma !== 0) tuplaDominios[i] = suma_producto/suma;
                    else tuplaDominios[i] = 0;

                    suma = 0;
                    suma_producto = 0;
                }

                // Tupla funcionalidades clave
                var denominador1 = vectorImpacto[0] + vectorImpacto[5];
                var denominador2 = vectorImpacto[2] + vectorImpacto[3] + vectorImpacto[4] + vectorImpacto[6];
                tuplaFuncionalidadesClave[0] = tuplaPuntuacionesCriteriosImpacto[0]*vectorImpacto[0]/denominador1 + tuplaPuntuacionesCriteriosImpacto[5]*vectorImpacto[5]/denominador1;
                tuplaFuncionalidadesClave[1] = tuplaPuntuacionesCriteriosImpacto[2]*vectorImpacto[2]/denominador2 + tuplaPuntuacionesCriteriosImpacto[3]*vectorImpacto[3]/denominador2 
                                            + tuplaPuntuacionesCriteriosImpacto[4]*vectorImpacto[4]/denominador2 + tuplaPuntuacionesCriteriosImpacto[6]*vectorImpacto[6]/denominador2;
                tuplaFuncionalidadesClave[2] = tuplaPuntuacionesCriteriosImpacto[1];

                console.log(tuplaPuntuacionesCriteriosImpacto);

                console.log('');
                console.log(tuplaFuncionalidadesClave);
                console.log(matrizPorcentajes);
                console.log(tuplaDominios);
                console.log(matrizValidez);

                
                this.$store.commit('updateMatrizReal', matrizResultados);
                this.$store.commit('updateMatrizPerfecta', matrizPerfecta);
                this.$store.commit('updateTuplaPuntuacionesCriteriosImpacto', tuplaPuntuacionesCriteriosImpacto);
                this.$store.commit('updateSRI', sri);
                this.$store.commit('updateTuplaFuncionalidadesClave', tuplaFuncionalidadesClave);
                this.$store.commit('updateMatrizPorcentajes', matrizPorcentajes);
                this.$store.commit('updateTuplaDominios', tuplaDominios);
                this.$router.push('/post/resultados');
            }
        }
    }
    
</script>

<style>

#page {
    font-family: Arial;
    box-shadow: 1px 1px 2px 1px #ebebeb;
    margin: 20px;
    padding: 20px;
    display: inline-block;
    width: 80%;
    vertical-align: top;
}


/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.servicio {
    padding: 4%;
    /*background-color:#9bd2ff;*/
    column-count: 2;
    column-gap: 20px; /* Espacio entre columnas */
}

.servicio:nth-child(odd) {
    background-color: #9bd2ff; /* Color de fondo para las filas impares */
}

.servicio:nth-child(even) {
    background-color: #65baff; /* Color de fondo para las filas pares */
}

.elementoServicio {
    break-inside: avoid; /* Evita que los elementos se dividan en columnas */
    margin-bottom: 10px; /* Espacio entre elementos */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.elementoServicio select {
    width: 100%;
}

.elementoServicio label {
    margin-bottom: 5px;
}

input[type=text], input[type=textarea], select {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

#guardar {
    width: 20%;
    background-color: #1d77ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#guardar:hover {
    background-color: #0066ff;
}

#back {
    width: 10%;
    background-color: #c0c0c0;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

</style>
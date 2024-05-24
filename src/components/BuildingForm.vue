<template>
    <div id="page">
        
        <form @submit.prevent="submit">
            <div class="InfoEvaluador">
                <h2>Datos del evaluador</h2>
                <div class="formElement">
                    <label for="organizacion">Organización</label>
                    <input type="text" name="organizacion" v-model="edificio.organizacion">
                </div>
                <div class="formElement">
                    <label>Correo electrónico</label>
                    <input type="text" name="correo" v-model="edificio.correo">
                </div>
                
                <div class="formElement"> 
                    <label>Número de teléfono</label>
                    <input type="text" name="telefono" v-model="edificio.telefono">
                </div>
            </div>

            <div class="InfoEdificio">
                <h2>Información general del edificio</h2>

                <div class="formElement">
                    <label>Tipo de edificio</label>
                    <select name="tipo" v-model="edificio.tipo">
                        <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.label">{{ tipo.label }}</option>
                    </select>
                </div>
                
                <div class="formElement">
                    <label>Uso del edificio</label>
                    <select name="uso" v-model="edificio.uso">
                        <option v-for="uso in usos" :key="uso.id" :value="uso.label">{{ uso.label }}</option>
                    </select>
                </div>

                <div class="formElement">
                    <label>Ubicación del edificio</label>
                    <select name="ubicacion" v-model="edificio.ubicacion">
                        <option v-for="pais in paises" :key="pais.id" :value="pais.label">{{ pais.label }}</option>
                    </select>
                </div>

                <div class="formElement">
                    <label>Área usable (m²)</label>
                    <input type="text" name="area" v-model="edificio.area">
                </div>

                <div class="formElement">
                    <label>Año de construcción</label>
                    <input type="text" name="anho" v-model="edificio.anho">
                </div>

                <div class="formElement">
                    <label>Estado actual</label>
                    <select name="estado" v-model="edificio.estado">
                        <option v-for="estado in estados" :key="estado.id" :value="estado.label">{{ estado.label }}</option>
                    </select>
                </div>

                <div class="formElement">
                    <label>Descripción del edificio</label>
                    <input type="textarea" name="descripcion" v-model="edificio.descripcion">
                </div>

                <div class="formElement">
                    <label>Dirección</label>
                    <input type="text" name="direccion" v-model="edificio.direccion">
                </div>
            </div>

            <div class="InfoMetodologia">
                <h2>Información de la metodología</h2>
                <div class="formElement">
                    <label>Ponderaciones</label>
                    <select name="ponderaciones" v-model="edificio.ponderaciones">
                        <option v-for="ponderacion in ponderaciones" :key="ponderacion.id" :value="ponderacion.label">{{ ponderacion.label }}</option>
                    </select>
                </div>

                <div class="formElement" v-if="edificio.ponderaciones === 'Personalizada por el usuario'">
                    <label>Ponderaciones personalizadas por el usuario: coeficientes de dominios</label>
                    <table style="margin-bottom: 3vw;">
                        <thead>
                            <tr>
                            <th></th>
                            <th>Eficiencia energética</th>
                            <th>Flexibilidad energética</th>
                            <th>Confort</th>
                            <th>Conveniencia</th>
                            <th>Salud y bienestar</th>
                            <th>Mantenibilidad</th>
                            <th>Información a ocupantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Calefacción</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[0][6]"/></td>
                            </tr>
                            <tr>
                                <td>ACS</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[1][6]"/></td>
                            </tr>
                            <tr>
                                <td>Refrigeración</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[2][6]"/></td>
                            </tr>
                            <tr>
                                <td>Ventilación</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[3][6]"/></td>
                            </tr>
                            <tr>
                                <td>Iluminación</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[4][6]"/></td>
                            </tr>
                            <tr>
                                <td>Envolvente dinámica</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[5][6]"/></td>
                            </tr>
                            <tr>
                                <td>Electricidad</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[6][6]"/></td>
                            </tr>
                            <tr>
                                <td>Carga EV</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[7][6]"/></td>
                            </tr>
                            <tr>
                                <td>Monitorización y control</td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesDominio[8][6]"/></td>
                            </tr>
                            <tr>
                                <td>Totales</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                                <td style="font-style: italic;">100%</td>
                            </tr>
                        </tbody>
                    </table>
                    <label style="font-weight: bold;">Ponderaciones personalizadas por el usuario: coeficientes de impacto</label>
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Eficiencia energética</th>
                            <th>Flexibilidad energética</th>
                            <th>Confort</th>
                            <th>Conveniencia</th>
                            <th>Salud y bienestar</th>
                            <th>Mantenibilidad</th>
                            <th>Información a ocupantes</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[0]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[1]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[2]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[3]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[4]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[5]"/></td>
                                <td><input type="text" v-model="edificio.tablaCoeficientesImpacto[6]"/></td>
                                <td style="font-style: italic;">100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="formElement">
                    <label>Seleccione un catálogo de servicios a evaluar</label>
                    <select name="catalogo" v-model="edificio.catalogo">
                        <option v-for="catalogo in catalogos" :key="catalogo.id" :value="catalogo.label">{{ catalogo.label }}</option>
                    </select>
                </div>

                <h3>Selección de la metodología</h3>
                <div class="check">
                    <div class="checkElement">
                    <h3>Calefacción</h3>
                    <input type="checkbox" id="calefaccion" name="calefaccion" v-model="edificio.dominios[0]">
                    <label for="calefaccion">¿Es evaluable el ámbito de calefacción?</label>
                    </div>

                    <div class="checkElement">
                    <h3>ACS</h3>
                    <input type="checkbox" id="acs" name="acs" v-model="edificio.dominios[1]">
                    <label for="calefaccion">¿Es evaluable el ámbito de ACS?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Refrigeración</h3>
                    <input type="checkbox" id="refrigeracion" name="refrigeracion" v-model="edificio.dominios[2]">
                    <label for="calefaccion">¿Es evaluable el ámbito de refrigeración?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Ventilación</h3>
                    <input type="checkbox" id="ventilacion" name="ventilacion" v-model="edificio.dominios[3]">
                    <label for="calefaccion">¿Es evaluable el ámbito de ventilación?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Iluminación</h3>
                    <input type="checkbox" id="iluminacion" name="iluminacion" v-model="edificio.dominios[4]">
                    <label for="calefaccion">¿Es evaluable el ámbito de iluminación?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Envolvente dinámica del edificio</h3>
                    <input type="checkbox" id="envolvente" name="envolvente" v-model="edificio.dominios[5]">
                    <label for="calefaccion">¿Es evaluable el ámbito de envolvente dinámica?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Electricidad</h3>
                    <input type="checkbox" id="electricidad" name="electricidad" v-model="edificio.dominios[6]">
                    <label for="calefaccion">¿Es evaluable el ámbito de electricidad?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Carga de vehículos eléctricos</h3>
                    <input type="checkbox" id="carga" name="carga" v-model="edificio.dominios[7]">
                    <label for="calefaccion">¿Es evaluable el ámbito de carga de vehículos eléctricos?</label>
                    </div>

                    <div class="checkElement">
                    <h3>Monitorización y control</h3>
                    <input type="checkbox" id="monitorizacion" name="monitorizacion" v-model="edificio.dominios[8]">
                    <label for="calefaccion">¿Es evaluable el ámbito de monitorización?</label>
                    </div>
                </div>
                
            </div>

            <div id="errorMessage" style="color: red; font-weight: bold ; display: none;">Queda algún coeficiente sin definir</div>
            <button id="guardar" action="/post/datos">Guardar</button>
        </form>
        {{ edificio }}
    </div>
</template>

<script>

    export default {
        data() {
            return {
                edificio: {
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
                    tablaCoeficientesDominio: [[], [], [], [], [], [], [], [], []],
                    tablaCoeficientesImpacto: []
                }
            };
        },
        computed: {
            tipos()                 { return this.$store.getters.getTipos; },
            usos()                  { return this.$store.getters.getUsos },
            paises()                { return this.$store.getters.getPaises },
            areas()                 { return this.$store.getters.getAreas },
            anhos()                 { return this.$store.getters.getAnhos },
            estados()               { return this.$store.getters.getEstados },
            ponderaciones()         { return this.$store.getters.getPonderaciones },
            catalogos()             { return this.$store.getters.getCatalogos },
            dominios()              { return this.$store.getters.getDominios }
        },
        
        methods: {
            submit() {
                if (this.edificio.ponderaciones === 'Personalizada por el usuario') {
                    for (let i = 0; i < 9; i++) {
                        if (this.edificio.tablaCoeficientesDominio[i].length != 7) {
                            document.getElementById("errorMessage").style.display = 'block';
                            return;
                        }
                    }

                    if (this.edificio.tablaCoeficientesImpacto.length != 7) {
                        document.getElementById("errorMessage").style.display = 'block';
                        return;
                    }
                }

                this.edificio.tablaCoeficientesDominio = this.edificio.tablaCoeficientesDominio.map(item => ({
                    ...item,
                    coeficiente: parseFloat(item.coeficiente)
                }));
                this.edificio.tablaCoeficientesImpacto = this.edificio.tablaCoeficientesImpacto.map(coeficiente => parseFloat(coeficiente));

                console.log(this.edificio);
                this.$store.commit('updateEdificio', this.edificio);
                this.$router.push('/post/datos');
            }
        }
    }
</script>

<style scoped>
    #page {
        box-shadow: 1px 1px 2px 1px #ebebeb;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 80%;
        vertical-align: top;
    }

    input[type=text] {
        width: 60%;
        padding: 12px;
    }

    input[type=text]:focus, input[type=textarea]:focus {
        border: 1px solid #555;
    }

    input[type=text], input[type=textarea], select {
        width: 100%;
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

    .check {
        column-count: 2; /* Divide en dos columnas */
        column-gap: 20px; /* Espacio entre columnas */
    }

    .checkElement {
        break-inside: avoid; /* Evita que los elementos se dividan en columnas */
        margin-bottom: 10px; /* Espacio entre elementos */
    }

    .checkElement label {
        display: inline-block;
        text-align: left;
    }

    .formElement {
        padding-bottom: 10px;
    }

</style>
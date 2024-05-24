<template>
    <div id="page">
        <button id="back" @click="goBack">
            Retroceder
        </button>


        <h1>Informe de evaluación</h1>
        
        <div class="container">
            <div class="cabecera">
                <div class="cabecera-contenido">
                    <h1 style="background-color:darkcyan; color:whitesmoke; border-radius: 20px; padding: 2vw; font-size: 2.5vw;">SMART READINESS INDICATOR</h1>
                    <div v-if="this.edificio.tipo === 'Residencial'" style="display: flex; align-items: center; margin-top: -2vw;">
                        <img src="../assets/img/residencial.png" style="background-color:#0084ff; width: 2.5vw; height: auto; border-radius: 20px; padding: 2vw; ">
                        <h1 style="background-color:#0084ff;width: 100%; color:whitesmoke; border-radius: 20px; padding: 2vw; padding-right: 5.6vw;">CERTIFICADO RESIDENCIAL</h1>
                    </div>
                    <div v-if="this.edificio.tipo === 'No Residencial'" style="display: flex; align-items: center; margin-top: -2vw">
                        <img src="../assets/img/edificio.png" style="background-color:#0084ff; width: 3.5vw; height: auto; border-radius: 20px; padding: 1.5vw; ">
                        <h1 style="background-color:#0084ff; width: 100%;color:whitesmoke; border-radius: 20px; padding: 2.1vw; text-align: left;padding-right: 5.6vw;">CERTIFICADO NO RESIDENCIAL</h1>
                    </div>

                    <p style="font-weight: bold;">ID del certificado: X</p>
                    <p>Fecha de expedición: {{ getCurrentDate() }}</p>
                    <p>Fecha de expiración: {{ getCurrentDateInThreeYears() }}</p>

                    <p style="font-weight: bold; padding-top: 2vw;">Dirección: {{ this.edificio.direccion }}</p>
                    <p>Metodología usada: {{ this.edificio.catalogo[0] }}</p>
                    <p>Área total: {{ this.edificio.area }} m²</p>
                    <p>Año de construcción: {{ this.edificio.anho }}</p>
                </div>
            </div>

            <div class="content">
                <p class="finalScore">{{ sriTruncado }}<span class="finalScoreDecimales">,{{ sriDecimalesRedondeados }}</span>%</p>
                <progress-bar :value=sriRedondeado />
                <p class="sriClass">Clase {{ clase }}</p>
                <div class="flex-container">
                    <div class="flex-item">
                        <img src="../assets/img/fc1.png" alt="Funcionalidad Clave 1">
                    </div>
                    <div class="flex-item">
                        Optimizar la eficiencia energética y el rendimiento general en uso
                    </div>
                    <div class="flex-item">
                        <p>{{ funcionalidadesClaveRedondeadas[0] }}%</p>
                    </div>
                    <div class="flex-item">
                        <img src="../assets/img/fc2.png" alt="Funcionalidad Clave 2">
                    </div>
                    <div class="flex-item">
                        Adaptar su funcionamiento a las necesidades del ocupante
                    </div>
                    <div class="flex-item">
                        <p>{{ funcionalidadesClaveRedondeadas[1] }}%</p>
                    </div>
                    <div class="flex-item">
                        <img src="../assets/img/fc3.png" alt="Funcionalidad Clave 3">
                    </div>
                    <div class="flex-item">
                        Adaptarse a las señales de la red (flexibilidad energética)
                    </div>
                    <div class="flex-item">
                        <p>{{ funcionalidadesClaveRedondeadas[2] }}%</p>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <h2 style="text-align: left;">Puntuaciones detalladas</h2>
        <table>
            <tr>
                <td></td>
                <td class="header-cell"><img class="header-img" src="../assets/img/eficiencia.png" style="">Eficiencia energética</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/flexibilidad.png">Flexibilidad energética</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/confort.png">Confort</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/conveniencia.png">Conveniencia</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/salud.png">Salud y bienestar</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/mantenibilidad.png">Mantenibilidad</td>
                <td class="header-cell"><img class="header-img" src="../assets/img/informacion.png">Información a ocupantes</td>
                <td class="header-cell">Total Dominios</td>
            </tr>
            <tr v-if="this.edificio.dominios[0]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/calefaccion.png">
                        <span class="cell-text">Calefacción</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[0]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[0] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[1]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/acs.png">
                        <span class="cell-text">ACS</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[1]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[1] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[2]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/refrigeracion.png">
                        <span class="cell-text">Refrigeración</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[2]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[2] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[3]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/ventilacion.png">
                        <span class="cell-text">Ventilación</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[3]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[3] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[4]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/iluminacion.png">
                        <span class="cell-text">Iluminación</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[4]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[4] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[5]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/envolvente.png">
                        <span class="cell-text">Envolvente dinámica</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[5]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[5] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[6]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/electricidad.png">
                        <span class="cell-text">Electricidad</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[6]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[6] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[7]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/cargaEV.png">
                        <span class="cell-text">Carga de EV</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[7]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[7] }}%</td>
            </tr>
            <tr v-if="this.edificio.dominios[8]">
                <td>
                    <div class="cell-content">
                        <img src="../assets/img/monitorizacion.png">
                        <span class="cell-text">Monitorización y control</span>
                    </div>
                </td>
                <td v-for="(porcentaje, index) in porcentajesRedondeados[8]" :key="index">{{ porcentaje }}%</td>
                <td>{{ dominiosRedondeados[8] }}%</td>
            </tr>
            <tr class="total-row" style="background-color: #666; color: white">
                <td>Total Criterios</td>
                <td>{{ tuplaRedondeada[0] }}%</td>
                <td>{{ tuplaRedondeada[1] }}%</td>
                <td>{{ tuplaRedondeada[2] }}%</td>
                <td>{{ tuplaRedondeada[3] }}%</td>
                <td>{{ tuplaRedondeada[4] }}%</td>
                <td>{{ tuplaRedondeada[5] }}%</td>
                <td>{{ tuplaRedondeada[6] }}%</td>
                <td>SRI: {{ sriRedondeado }}%</td>
            </tr>
        </table>

        <div class="charts-container">
            <BarChartImpact />
            <BarChartDominio />
        </div>
    </div>
</template>

<script>
import BarChartImpact from '@/components/BarChartImpact.vue'
import BarChartDominio from '@/components/BarChartDominio.vue'
import ProgressBar from '@/components/ProgressBar.vue'

export default ({
    components: { BarChartImpact, BarChartDominio, ProgressBar },
    data() {
        return {
            edificio: this.$store.state.datosEdificio,
        }
    },
    computed: {
        tuplaPuntuaciones() { return this.$store.getters.getTuplaCriteriosImpacto},
        tuplaDominios()     { return this.$store.getters.getTuplaDominios },
        matrizReal()        { return this.$store.getters.getMatrizReal },
        matrizPerfecta()    { return this.$store.getters.getMatrizPerfecta },
        matrizPorcentajes() { return this.$store.getters.getMatrizPorcentajes },
        sri()               { return this.$store.getters.getSRI },
        clase()             { return this.$store.getters.getClase },
        tuplaRedondeada()   { return this.tuplaPuntuaciones.map(numero => Math.round(numero)) },
        dominiosRedondeados()   { return this.tuplaDominios.map(numero => Math.round(numero)) },
        sriRedondeado()     { return Math.round(this.sri) },
        sriTruncado()     { return Math.floor(this.sri) },
        sriDecimalesRedondeados() {
            let valorRedondeado = (parseFloat(this.sri.toFixed(2)) - Math.floor(this.sri)).toFixed(2);
            // Convertir a string y obtener el tercer y cuarto carácter
            return valorRedondeado.toString().substring(2, 3);
        },
        funcionalidadesClave() { return this.$store.getters.getTuplaFuncionalidadesClave },
        funcionalidadesClaveRedondeadas() { return this.funcionalidadesClave.map(numero => Math.round(numero)) },
        porcentajesRedondeados()            { return this.matrizPorcentajes.map(row => row.map(value => Math.round(value))); }
    },
    methods: {
        getCurrentDate() {
            const currentDate = new Date();
            // Formatear la fecha en el formato deseado (por ejemplo, "DD/MM/YYYY")
            const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
            return formattedDate;
        },
        getCurrentDateInThreeYears() {
            const currentDate = new Date();
            const threeYearsLater = new Date(currentDate.getFullYear() + 3, currentDate.getMonth(), currentDate.getDate());
            const formattedDate = `${threeYearsLater.getDate()}/${threeYearsLater.getMonth() + 1}/${threeYearsLater.getFullYear()}`;
            return formattedDate;
        },
        goBack() {
            this.$router.go(-1);
        }
    }
})

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

#show {
    width: 10%;
    background-color: #c0c0c0;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 1vw;
        margin-bottom: 1vw;
    }

    th, td {
        border: none;
        padding: 8px;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    th {
        background-color: #333;
        color: white;
    }

    .total-row {
        background-color: #666;
        color: white;
    }

    .total-row td {
        border-top: 2px solid #333;
        font-weight: bold;
    }

    img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        
    }

    .header-img {
        display: block; margin: auto;
    }

    .cell-content {
        display: flex;
        align-items: left;
        text-align: left;
    }

    .cell-text {
        margin-left: 5px;
    }

    .header-cell {
        align-items: center;
        text-align: center;
    }


    #tablaFC {
        width: 50%;
        align-content: center;
        
    }

    #tablaFC img {
        width: 4vw;
        height: auto;
        
    }

    .charts-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-top: 1vw;
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        max-width: 40vw; /* Estrechar el contenedor */
        margin: 0 auto; /* Centrar el contenedor */
    }

    .flex-item {
        flex: 0 0 33.33%;
        padding-bottom: 0.5vw;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        flex-direction: column; /* Alinear verticalmente los textos */
        justify-content: center; /* Alinear verticalmente los textos */
        text-align: left;
    }

    .flex-item p {
        padding-left: 3vw;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 2vw;
        font-weight: bold;
    }

    .flex-item img {
        width: 5vw; /* Hacer más grandes las imágenes */
        height: auto;
        align-self: flex-end;
        padding-right: 2vw;
    }

    .flex-item.percentage {
        font-size: 1.5em; /* Aumentar el tamaño de los porcentajes */
    }

    .finalScore {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 6.5vw;
        font-weight: bold;
        margin-bottom: -2vw;
    }

    .finalScoreDecimales {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 3vw;
        font-weight: bold;
        margin-bottom: -2vw;
    }

    .sriClass {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 3vw;
        font-weight: bold;
    }

    .container {
            display: grid;
            grid-template-columns: 65% 35%;
            gap: 10px; /* Espacio entre las columnas */
            margin: 0 auto; /* Centrar el contenedor */
            max-width: 100%; /* Ancho máximo del contenedor */
            
        }

    .cabecera {
        border-radius: 20px;
        padding: 2vw;
        background-color: rgb(255, 252, 247);
    }

    .cabecera-contenido {
        margin-left: auto;
        
    }

    .cabecera-contenido p {
        text-align: left;
        padding-left: 3vw;
        font-size: 1.15vw;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .content {
        background-color: whitesmoke;
            
            border-radius: 20px;
    }


</style>

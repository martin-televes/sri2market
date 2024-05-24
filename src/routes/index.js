import BuildingForm from '@/components/BuildingForm.vue'
import CalculationForm from '@/components/CalculationForm.vue'
import ResultsPage from '@/components/ResultsPage.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: "history",
    routes:[
        {
            path: "*",
            redirect: "/"
        },
        {
            path: "/",
            name: "BuildingForm",
            component: BuildingForm
        },
        {
            path: "/post/datos",
            name: "CalculationForm",
            component: CalculationForm
        },
        {
            path: "/post/resultados",
            name: "ResultsPage",
            component: ResultsPage
        }
    ]
})

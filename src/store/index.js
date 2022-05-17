import Vue from 'vue'
import Vuex from 'vuex'
import Travel from './travel'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Travel: Travel,
    }
})

export default store
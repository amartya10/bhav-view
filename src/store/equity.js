	import Vue from 'vue';
import Vuex from 'vuex';

import equitiy from "./equitiy.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        equitiy,
    }
})
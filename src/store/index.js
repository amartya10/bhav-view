import  {createStore}  from "vuex"

import equitiy from "./equitiy.module";


const store = createStore({
    modules: {
        equitiy,
    }
})
export default store
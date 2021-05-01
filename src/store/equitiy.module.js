import {getEquties,exportEquities}  from "@/common/api.service";

const state = {
	date:undefined,
	count:0,
	equities:[],
	nextPage:false,
	prevPage:false,
	isLoading:false,
	selected:new Set()
};

const getters = {

	date(state){
		return state.date
	},
	equities(state){
		return state.equities
	},
	selected(state){
		return state.selected
	},
	nextPage(state){
		return state.nextPage
	},
	prevPage(state){
		return state.prevPage
	},
	count(state){
		return state.count
	},
	isLoading(state){
		return state.isLoading;
	}
};

const actions = {

	fetch({commit},data){
		commit('startFetch');
		return getEquties(data)
			.then((data) => {
				commit('endFetch',data);
			})
			.catch(error=>{
				console.log(error);
			})
	},
	exporte({state},date){

		return exportEquities(date,Array.from(state.selected))	
	}
 }

const mutations={
	startFetch(state){
		state.isLoading = true;
	},
	endFetch(state,result){
		state.count = result['count']
		state.equities = result['equities']
		state.nextPage = result['next_page']
		state.date = result['date']
		state.isLoading = false		
	},
	selectEquity(state,equity){
		state.selected.add(equity)
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
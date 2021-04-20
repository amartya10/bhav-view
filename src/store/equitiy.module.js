const state = {
	page:0,
	limit:100,
	isLoading:true,
	equitiesCount:0,
	equitits:[],
	nextPage:false,
	prevPage:false
};

const getters = {
	equitiesCount(state){
		return state.equitiesCount;
	}
	equitits(state){
		return state.equitits;
	}
	isLoading(state){
		return state.isLoading;
	}
	isNextPage(state){
		return state.nextPage
	}
	isPrevPage(state){
		return state.prevPage
	}
};

const actions = {
	fetchEquities()


}




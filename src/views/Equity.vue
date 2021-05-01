<template>
	<input v-model="query" placeholder="search script code,name">
	<input v-model="date" type="date" name="EquityDate" :max="maxDate()">
	<button @click="exportE">export</button>
	<VPagination :page="page" :limit="limit" :count="count" style="width: auto">
	</VPagination>
	<VTable :headers="headers" :items="equities" @select="select"></VTable>

</template>

<script>
import VTable from '@/components/VTable'
import VPagination from '@/components/VPagination'
import { mapGetters } from "vuex";

export default {
	name:"Equity",
	components:{
		VTable,
		VPagination,

	},
	data() {
		return {
			query:'',
			limit:100,
			page:1,
			date:undefined,
			headers : [
				{
					name:'Code',
					value:"SC_CODE"
				},
				{
					name:'Name',
					value:"SC_NAME"
				},
				{
					name:'Group',
					value:"SC_GROUP"
				},
				{
					name:'Prev',
					value:"PREVCLOSE"
				},
				{
					name:'Open',
					value:"OPEN"
				},
				{
					name:'High',
					value:"HIGH"
				},
				{
					name:'Low',
					value:"LOW"
				},
				{
					name:'Close',
					value:"CLOSE"
				},
				{
					name:'Last',
					value:"LAST"
				},
				{
					name:'Shares',
					value:"NO_OF_SHRS"
				},
				{
					name:'Turnover',
					value:"NET_TURNOV"
				},
				{
					name:'Trades',
					value:"NO_TRADES"
				},
			],
		}
	},
	watch:{
		query(){
			if (this.query.length >= 3) {
				this.getEquities()
			}
		},
		limit(){

			if (this.page ===  1){
				console.log("limit")

				this.getEquities()
			}else{
			this.page = 1
			}		
		},
		page(){
			console.log("page")
			this.getEquities()
		},
		date(){
			this.getEquities()
		},
	},
	computed:{
		...mapGetters(['equities','count','nextPage','prevPage','selected'])
	},
	methods: {
		getEquities(){
			let param = {
				'query':this.query,
				'limit':this.limit - 1,
				'page':this.page,
				'date':this.date
			}
			this.$store.dispatch('fetch',param);
		},
		maxDate(){
			return new Date().toISOString().slice(0,10)
		},
		select(data){

			this.$store.commit('selectEquity',data)
		},
		exportE(){
			
			this.$store.dispatch('exporte',this.date);
		}
	},
	mounted(){
		this.getEquities()
	}
}	
	
</script>
<!-- 

TODO
	TABLE
	PAGINATION
	SELECT EQUITY
	FILTER SELECTED EQUITY1

 -->
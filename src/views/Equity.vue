<template>
	<div ckass ="main">
		<div class ="market-date">
			<h1>Market Today </h1>
		</div>
		<input v-model="query" placeholder="search script code,name">
		<input v-model="date" type="date" name="EquityDate" :max="maxDate()">
		<button @click="exportE">export</button>
		<VPagination v-model:page="page"  v-model:limit="limit" v-model:count="count" style="width: auto">
		</VPagination>
		<VTable :headers="headers" :items="equities" @select="select"></VTable>
	</div>
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

<style scoped>
.market-date{
	border: 1px solid rgb(236, 239, 241);
	box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
	width: auto;
	border-radius: 0px;
	overflow-x: auto;
}
.main {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
    max-width: 1180px;
    padding: 24px 20px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
}
</style>
<!-- 

TODO
	TABLE
	PAGINATION
	SELECT EQUITY
	FILTER SELECTED EQUITY1

 -->
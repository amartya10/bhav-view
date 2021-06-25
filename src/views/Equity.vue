<template>
	<div class="container">
		<main class ="main">
			<section>
				<div class= "marketSearch">
					<div class ="market-date">
						<h1>Market Today </h1>
					</div>
					<div class="market-search">
						<input class = "market-search-input" v-model="query" placeholder="search ">
					</div>
				</div>
				<input v-model="date" type="date" name="EquityDate" :max="maxDate()">
				<div class = "flex ">
					<div class="item" >
						<button class="button" @click="exportE">Export</button>
					</div>
					<VPagination v-model:page="page"  v-model:limit="limit" v-model:count="count" style="width: auto"></VPagination>
				</div>

				<VTable :headers="headers" :items="equities" @select="select"></VTable>
			</section>
		</main>
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
					name:'Prev',
					value:"PREVCLOSE",
					type :"price",
				},
				{
					name:'Open',
					value:"OPEN",
					type :"price",

				},
				{
					name:'High',
					value:"HIGH",
					type :"price",
				},
				{
					name:'Low',
					value:"LOW",
					type :"price",					
				},
				{
					name:'Close',
					value:"CLOSE",
					type :"price",
				},
				{
					name:'Last',
					value:"LAST",
					type :"price",
				},
				{
					name:'Shares',
					value:"NO_OF_SHRS",
					type: "number",
				},
				{
					name:'Turnover',
					value:"NET_TURNOV",
					type: "number",
				},
				{
					name:'Trades',
					value:"NO_TRADES",
					type: "number",
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

.container {
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	max-width: 100%;
	height: 100%;
	background-color: transparent;
}
.main {
	align-self: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
    max-width: 1180px;
    padding: 24px 20px;
    background: rgb(255, 255, 255) none repeat scroll 0% 0%;
}
.marketSearch{
	display: flex;
    align-items: center;
    justify-content: space-between;
	height:50px;

}
.market-date{
	/* border: 1px solid rgb(236, 239, 241); */
	box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
	border-radius: 0px;
	overflow-x: auto;
	font-size: 24px;
	font-weight: 500;
}
.market-search{
	border: 1px solid rgb(236, 239, 241);
	font-size: 24px;
	height: 100%;
}
.market-search-input {
	text-align: left;
	height: 100%;
	font-size: 24px;
	text-indent: 4%;
	border:none
}
.market-search-input:focus{
    outline: none;
}
.flex {
	display: flex;
	justify-content: space-between;
	padding: 10px 0px;
    margin: 10px 0px;
}
.flex .item {
	margin: 0 5px;
	height: 30px;
	align-self: center;
	width: 100px;
}
button {
	appearance: none;
	border: 0;
	width: 100%;
	border-radius: 2px;
	background: #4676D7;
	color: #fff;
	padding: 5px 20px;
	height: 100%;
}

</style>
<!-- 

TODO
	TABLE
	PAGINATION
	SELECT EQUITY
	FILTER SELECTED EQUITY1

 -->
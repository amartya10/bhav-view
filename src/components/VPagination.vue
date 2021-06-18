<template>	
	<div class="table-operations">
		<div class="table-operation change-page">
			<div class="item">
				<button v-bind:class= "page <= 1 ? 'hide' : 'show'" @click= "page -1 > 0 ? changePage(page - 1): pass"> Previous </button>

			</div>
			<div class="item">
				<input  type="number" :value="page"  class="page" id="page" :min="1" :max="maxPage()"/>
			</div>
			<div class="item">
				<button v-bind:class= "page > maxPage() ?'hide' : 'show'" @click= "page > maxPage() 
					?pass :changePage(page + 1)"> Next </button>

			</div>
				

			
		</div>
		
		<div class="table-operation limit">	
				<label for="limt">Show</label>
				<select :value="limit" @change="changeLimit">
					<option value=25>25</option>
					<option value=50>50</option>
					<option value=75>75</option>
					<option value=100>100</option>
				</select>
		</div>
	</div>

</template>

<script >
export default {
	props:{
		page:{
			type:Number,
			required:false,
			default:1,
		},
		limit:{
			type:Number,
			required:false,
			default:100
		},
		count : {
			type:Number,
			required:false,
			default:0
		}
	},
	methods:{
		maxPage(){
			return this.count / this.limit
		},
		changePage(page){
			this.$emit("update:page", page);
		},
		changeLimit(event){
			this.$emit("update:limit", event.target.value);

		}
	},
	emits:["update:page","update:limit"]
}
</script>
<style scoped>
.table-operations {
	box-sizing: border-box;
	margin: 0px;
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	-moz-box-pack: justify;
	justify-content: flex-end;
	height: 50px;
	position: relative;
	padding: 10px 0px;
	margin: 10px 0px;
}
.change-page{
	display: flex;
	flex-direction: row;
	flex: 0 0 20vw;
	
}
.change-page .item {
	margin: 0 5px;
}
.change-page button{
	appearance: none;
	border: 0;
	border-radius: 0px;
	background: #4676D7;
	color: #fff;
	padding: 5px 20px;
	height: 100%;

}

.change-page .hide   {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  pointer-events: none;

}
.change-page button:hover {
  background: #1d49aa;
}
.change-page button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}
.change-page .page {
font-size: 20px;
  padding: 0px 10px;
  border-radius: 4px;
  outline: none;
  text-align: center;
  width:70%;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin: 0;
}
input[type="number"] {
	-moz-appearance: textfield;
}
.limit {
	display: flex;
	align-items: center;


}
.limit * {
	margin: 0px 5px;
}

select {
	border-radius: 0px;
	height: 100%;
	width: 100%;
	background: #c5d0e7;

}
select option {
	background: #c5d0e7;
}
</style>
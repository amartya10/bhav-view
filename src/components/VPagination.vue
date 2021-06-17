<template>	
	<div class="table-operations">
		<div class="table-operation change-page">
			
				<button v-bind:class= "page <= 1 ? 'hide' : 'show'" @click= "page -1 > 0 ? changePage(page - 1): pass"> Previous </button>
				<label for="page"> Page</label>
				<input disabled type="Number" :value="page"  class="page" id="page" min="1" :max="maxPage()"/>

				<button v-bind:class= "page > maxPage() ?'hide' : 'show'" @click= "page > maxPage() 
					?pass :changePage(page + 1)"> Next </button>
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
	justify-content: space-between;
	height: 50px;
	position: relative;


	/* -moz-box-align: center;
	align-items: center;
	overflow: visible;
	overflow-x: visible;
	white-space: nowrap;  */
}
.change-page button{
	appearance: none;
	border: 0;
	border-radius: 5px;
	background: #4676D7;
	color: #fff;
	padding: 5px 20px;
}

.change-page .hide   {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  disabled:true;
}
.change-page button:hover {
  background: #1d49aa;
}
.change-page button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}

</style>
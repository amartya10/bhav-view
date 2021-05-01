<template>
	<label for="page"> Page</label>

	<button v-if = "page > 1" @click= "changePage(page - 1)">prev</button>

	<input disabled type="Number" :value="page"  class="page" id="page" min="1" :max="maxPage()"/>

	<button v-if = "page < maxPage()" @click= "changePage(page + 1)">next</button>

	<label for="limt">Limit</label>

	<select :value="limit" @change="changeLimit">
		<option value=25>25</option>
		<option value=50>50</option>
		<option value=75>75</option>
		<option value=100>100</option>
	</select>

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
}
</script>

	
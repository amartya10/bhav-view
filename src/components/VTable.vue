<template>
	<div>
		<div v-if="items" class="table">
			<table class="table">
				<thead>
					<tr>
						<th>#<span class="resize-handle"></span></th>
						<th v-for="(header,index) in headers" :key="index"> {{header.name }}
							<span class="resize-handle"></span>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for = "item in items" :key="item.SC_CODE">
						<td> <input type="checkbox" :key ="'select'" :value="item.SC_CODE" @change="$emit('select',$event.target.value)"> </td>
						<td :data-label="header.name" v-for = "header in headers" :key="header" > {{ item[header.value] }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
</template>
<script>

export default {
	name:"VTable",
	props:{
		items :{
			type:Array,
			required:false
		},
		headers : {
			type:Object,
			required:false,
		}
	},
	method:{
		
	}
}

	
</script>

<style>
.table {
	width: 100%;
	padding: 0px;
	background: rgb(255, 255, 255) none repeat scroll 0% 0%;
	border-spacing: 0px;
	border-collapse: separate;
	caption-side: top;
}
tr {
	text-align: right;
}
</style>
<!-- 
RENDERE DATA 
SHOW PAGINATED  
-->
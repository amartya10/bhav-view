<template>
	<div>
		<div v-if="items" class="containerTable">
			<table class="table">
				<thead>
					<tr>
						<th>#<span class="resize-handle"></span></th>
						<th v-bind:style = "header.testAlign == 'left' ?  'text-align=left' : 'text-align=right'" v-for="(header,index) in headers" :key="index"> {{header.name }}
							<!-- <span class="resize-handle"></span> -->
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for = "item in items" :key="item.SC_CODE">
						<td> <input type="checkbox" :key ="'select'" :value="item.SC_CODE" @change="$emit('select',$event.target.value)"> </td>
						<td :class="header.type ?? header.type" :data-label="header.name" v-for = "header in headers" :key="header">
							<!-- <img
							v-if="header.name == 'Name'"
							:src="`https://companiesmarketcap.com//img/company-logos/80/${item[header.value].toUpperCase()}.png`"
							/> -->
							<span>{{ $filters.formatValue(item[header.value],header.type ? header.type :undefined) }}</span>
						</td>
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

.containerTable {
    border: 1px solid rgb(236, 239, 241);
    box-shadow: rgb(17 51 83 / 2%) 0px 4px 12px 0px;
    width: auto;
    border-radius: 0px;
    overflow-x: auto;
}

.table {
	width: 100%;
	padding: 0px;
	background: rgb(255, 255, 255) none repeat scroll 0% 0%;
	border-spacing: 0px;
	border-collapse: separate;
	caption-side: top;
	margin: auto;
    font-size: 14px;
    width: 100%;
}
thead {
	position: relative;
    z-index: 120;
	display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}

th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
	}
tr {
	text-align: right;
}

.table th:nth-child(1),
.table th:nth-child(2),
.table th:nth-child(3), 
.table td:nth-child(1), 
.table td:nth-child(2), 
.table td:nth-child(3)
{
    text-align: left;

}
th tr {
	text-align: right;
}

td,th {
	border-bottom: 1px solid rgb(168, 168, 168);
	color: #333333;
	font: 400 15px 'Ubuntu', sans-serif;
    padding: 10px;
    /* border: 1px solid transparent; */
	line-height: 1.3;
}


</style>
<!-- 
RENDERE DATA 
SHOW PAGINATED  
-->
<template>
	<header>
		<div class="head-items">
			<div class="head-item">
				<router-link class="navbar-brand" :to="{ name: 'home' }">
					bhavcopy
				</router-link>
			</div>
			<!-- <div class="head-item">
				<span>g </span>

			</div>
			<div class="head-item">
				<span>k</span>
			</div> -->
		</div>
	</header>
</template>

<script>
export default {
	name:'AppHeader'
};
</script>

<style scoped>

header { 
	display: flex;
	flex-shrink: 0;	
	padding: 20px;
	background: #f8f8f87b;
	color: black;
	font-size: 24px;
	width: 100%;
}
.head-items {
	max-width: 1180px;
    display: flex;
    padding: 0px 20px;
	align-items:center;
    box-sizing: content-box;
}
.head-item {
	display: flex;
	align-items: center;
	padding-bottom: 3px;
}
</style>>
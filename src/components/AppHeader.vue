<template>
	<header>
		<nav>
			<div>
				<router-link class="navbar-brand" :to="{ name: 'home' }">
					bhav
				</router-link>
			</div>
		</nav>	
	</header>
</template>

<script>
export default {
	name:'AppHeader'
};
</script>

<style scoped>

header { 
	padding: 20px;
	background: #1881d17b;
	color: white;
	font-size: 28px;
	width: 100%;
}
</style>>
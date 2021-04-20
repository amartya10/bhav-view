<template>
	<nav>
		<div class="container">
			<router-link class="navbar-brand" :to="{ name: 'home' }">
				bhav
      </router-link>
			
		</div>
	</nav>	

</template>

<script>
export default {
	name:'AppHeader'
};
</script>
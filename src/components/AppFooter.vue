<template>
  <footer>
    <div >
      <router-link :to="{ name: 'home', params: {} }">
          bhav
      </router-link>	
      </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
// TODO: SHOW PROJECT REPO LINK
</script>
<style scoped>
footer { 
	padding: 20px;
	background: #1881d17b;
	color: white;
	font-size: 28px;
	width: 100%;
}
</style>

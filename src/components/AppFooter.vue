<template>
  <footer>
    <div >
      <router-link :to="{ name: 'home', params: {} }">
          bhavcopy
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
	padding: 50px   20px;
	background: #f8f8f87b;
	color: white;
	font-size: 24px;
	width: 100%;
  display: flex;
  flex-shrink: 0;
  max-width: 1180px;
  margin: 0px auto;
  color: rgb(255, 255, 255);
}
</style>

<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 12vh); */
  position: relative;
  overflow: hidden;
}
@media screen and (min-height:1070px) {
	.app-main{
		min-height:calc(92vh);
		box-sizing: border-box;
		padding: 2vh 0 2vh 0;
	}
}
</style>

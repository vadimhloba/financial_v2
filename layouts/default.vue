<template>
  <main>
    <Header/>
    <Nuxt/>
    <Footer/>
		<Quiz v-if="quiz"/>
		<Thanks v-if="thanks"/>
		<Navigation v-if="navigation"/>
  </main>
</template>

<script>
export default{
  mounted(){
    this.$mgAnimation()
    window.addEventListener('scroll', e => this.$mgAnimation())
  },
  watch: {
    $route(to, from) {
      this.$mgAnimation()
    }
  },
	computed: {
		quiz(){ return this.$store.getters.getQuiz },
		thanks(){ return this.$store.getters.getThanks },
		navigation(){ return this.$store.getters.getNavigation }
	}
}
</script>
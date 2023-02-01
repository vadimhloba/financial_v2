<template>

	<div>
		<button @click="showQuiz = true">Check eligibility</button>
		<Quiz v-if="showQuiz" @close="showQuiz = false"/>
	</div>

</template>

<script scoped>
export default {
	name: 'BtnEligibility',
	data() {
		return {
			showQuiz: false
		}
	}
}
</script>
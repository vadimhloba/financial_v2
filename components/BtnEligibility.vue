<template>

	<div>
		<button @click="$store.commit('setQuiz', true)">Check eligibility</button>
	</div>

</template>

<script scoped>
export default {
	name: 'BtnEligibility'
}
</script>
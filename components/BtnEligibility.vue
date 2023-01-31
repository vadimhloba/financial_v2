<template>

	<router-link :to="{ name: 'quiz' }">
		<button>Check eligibility</button>
	</router-link>

</template>

<script scoped>
	export default {
		name: 'BtnEligibility'
	}
</script>
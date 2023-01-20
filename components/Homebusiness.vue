<template>

	<section class="business-impacted">
		<div class="container">
			<div class="bg-img">
				<h1>Has your business been impacted by the restrictions and impacts of COVID-19?</h1>
				<div class="column">
					<p>Our professionals do all the hard work so you can sleep at night knowing it was done right</p>
					<button class="custom">Check eligibility</button>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'Homebusiness'
}
</script>

<style lang="scss" scoped>
.business-impacted {
	padding: 32px 0 160px;
	.container {
		display: block;
	}
	.bg-img {
		padding: 32px;
		background: no-repeat url(/img/background/bg_bus-imp.png);
		max-width: 1376px;
		width: 100%;
	}
	.column {
		display: flex;
		align-items: flex-end;
	}
	h1, p {
		color: var(--white);
	}
	h1 {
		max-width: 792px;
		width: 100%;
	}
	p {
		padding: clamp(32px, 10cqi, 175px) clamp(141px, 10cqi, 158px) 0 0;
		max-width: 312px;
		width: 100%;
	}
}
</style>
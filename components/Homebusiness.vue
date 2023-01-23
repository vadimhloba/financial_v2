<template>

	<section class="business-impacted">
		<div class="container">
			<div class="bg-img">
				<img src="/img/background/bg_bus-imp.png">
			</div>
			<div class="desc">
				<h1>Has your business been <br> impacted by the restrictions <br> and impacts of COVID-19?</h1>
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
	name: 'HomeBusiness'
}
</script>

<style lang="scss" scoped>
.business-impacted {
	padding: 32px 0 160px;
	.container {
		position: relative;
		display: block;
	}
	.bg-img {
		position: absolute;
		left: 0;
		padding: 0 15px;
	}
	.desc {
		position: relative;
		padding: 16px;
		max-width: 100%;
		@media(min-width:992px) {
  	  padding: 32px;
  	}
	}
	.column {
		display: block;
		align-items: flex-end;
		@media(min-width:1200px) {
  	  display: flex;
  	}
	}
	
	h1, p {
		color: var(--white);
	}
	h1 {
		display: none;
		width: 56cqw;
		@media(min-width:992px) {
  	  display: block;
  	}
	}
	p {
		padding: 0;
		margin-bottom: clamp(0px, 3cqi, 40px);
		max-width: 312px;
		width: 52cqw;
		@media(min-width:576px) {
			margin-bottom: 60px;
			width: 100%;
  	}
		@media(min-width:768px) {
			margin-bottom: 110px;
  	}
		@media(min-width:992px) {
  	  padding: 32px 0 26px;
			margin-bottom: 0;
  	}
		@media(min-width:1200px) {
  	  padding: 175px 28px 0 0;
  	}
		@media(min-width:1440px) {
  	  padding: 175px 145px 0 0;
  	}
	}
}
</style>
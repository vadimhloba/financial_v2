<template>

	<section class="business-impacted">
		<div class="container">
			<div class="bg-img">
				<img class="pic-desktop" src="/img/background/bg_bus-imp.png">
				<img class="pic-mobile" src="/img/background/bg_bus-imp_mobile.png">
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
		position: relative;
		.pic-desktop {
			position: absolute;
			display: none;
			@media(min-width:992px) {
				display: block;
  		}
		}
		.pic-mobile {
			position: absolute;
			display: block;
			left: 50%;
			transform: translateX(-50%);
			@media(min-width:992px) {
				display: none;
  		}
		}
	}
	.desc {
		position: relative;
		padding: 16px 0;
		max-width: 100%;
		@media(min-width:992px) {
  	  padding: 32px;
  	}
	}
	.column2 {
		display: block;
		align-items: flex-end;
		@media(min-width:1200px) {
  	  display: flex;
  	}
	}
	.column {
		position: relative;
		display: grid;
		
		max-width: 300px;
		width: 100%;
		margin: 0 auto;
		@media(min-width:992px) {
			margin: 0;
  	}
		@media(min-width:1200px) {
			max-width: 100%;
			align-items: flex-end;
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
		max-width: 189px;
		margin-bottom: 32px;
		@media(min-width:576px) {
			max-width: 189px;
  	}
		@media(min-width:992px) {
			width: 100%;
			max-width: 312px;
  	  padding: 17px 0;
			margin-bottom: 0;
  	}
		@media(min-width:1200px) {
  	  padding: 160px 28px 0 0;
  	}
		@media(min-width:1440px) {
  	  padding: 174px 145px 0 0;
  	}
	}
}
</style>
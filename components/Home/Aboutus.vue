<template>

	<section class="say-about-us">
		<div class="container">
			<h1>Saying about us</h1>
			<div class="wrapper">
				<div><img src="/img/company_logos/bloomberg_comp.png"></div>
				<div><img src="/img/company_logos/yahoo_comp.png"></div>
				<div class="item-a"><img src="/img/company_logos/usa-today_comp.png"></div>
				<div class="item-b"><img src="/img/company_logos/chicago-tribune_comp.png"></div>
				<div><img src="/img/company_logos/la-tribune_comp.png"></div>
				<div><img src="/img/company_logos/yahoo-finance_comp.png"></div>
				<div><img src="/img/company_logos/ceo-weekly_comp.png"></div>
				<div class="item-c"><img src="/img/company_logos/business-first_comp.png"></div>
				<div><img src="/img/company_logos/disrupt_comp.png"></div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeAboutus'
}
</script>

<style lang="scss" scoped>
.say-about-us{
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	.container {
		display: block;
	}
	h1 {
		margin-bottom: 32px;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media(min-width:768px) {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  	}
		div {
			padding: 5px;
			display: grid;
			border: 2px solid var(--grayish);
			max-width: 100%;
			min-height: 238px;
			margin: -1px;
			align-items: center;
			img {
				display: block;
				margin: 0 auto;
			}
		}
		.item-a {
			@media(min-width:1200px) {
				grid-column: 4;
  		}
		}
		.item-b {
			@media(min-width:1200px) {
				grid-column: 2;
  		}
		}
		.item-c {
			@media(min-width:1200px) {
				grid-column: 3;
  		}
		}
	}
}
</style>
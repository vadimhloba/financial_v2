<template>

	<section class="why-us">
		<div class="container">
			<h1>Why us?</h1>
			<div class="column">
				<div class="desc">
					<p>We do this by listening and understanding your businesses, identifying your needs, making a plan and holding your hand as we help you utilize government programs, get funding, and optimize your taxes.</p>
				</div>
				<div class="item item-a">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">01</h2>
							<p class="desc-title">State Licensed CPA's</p>
						</div>
						<p class="medium">A certified public accountant (CPA), however, is someone who has earned a professional designation through a combination of education</p>
					</div>
				</div>
				<div class="item item-b">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">02</h2>
							<p class="desc-title">Multiple Ways To Quality</p>
						</div>
						<p class="medium">The totality of features and characteristics of a product or service that bears on its ability to meet a stated or implied need</p>
					</div>
				</div>
				<div class="item item-c">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">03</h2>
							<p class="desc-title">Integrity Over Profit</p>
						</div>
						<p class="medium">Integrity in business enhances your reputation — which can help attract and retain customers</p>
					</div>
				</div>
				<div class="item item-d">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">04</h2>
							<p class="desc-title">No Upfront Fees</p>
						</div>
						<p class="medium">An amount of money paid before a particular piece of work or a particular service is done or received</p>
					</div>
				</div>
				<div class="item item-e">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">05</h2>
							<p class="desc-title">Honest & Accurat</p>
						</div>
						<p class="medium">A boss who admits to having acted in their own interest may show honesty by rectifying the situation</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeWhyus'
}
</script>

<style lang="scss" scoped>
.why-us {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	h1 {
		margin-bottom: 56px;
	}
	.column {
		display: grid;
		@media(min-width:768px) {
			grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  	}
		.item {
			padding: 24px;
			border: 2px solid var(--grayish);
			margin: -1px;
			.wrapper {
				display: flex;
				align-items: flex-end;
				margin-bottom: 40px;
				.desc-title {
					margin-bottom: 3px;
					margin-left: 24px;
				}
			}
		}
		.desc {
			max-width: 346px;
			min-height: 238px;
			padding: 24px;
			border: none;
			display: none;
			@media(min-width:992px) {
				display: grid;
  		}
			@media(min-width:1200px) {
				grid-column: 2;
  		}
		}
		.item-a {
			border-radius: 0px 10px 0px 0px;
			grid-column: 2;
			@media(min-width:1200px) {
				border-radius: 10px 0px 0px 10px;
				grid-column: 1;
				grid-row: 2;
  		}
		}
		.item-b {
			border-radius: 10px 0px 0px 0px;
			@media(min-width:1200px) {
				border-radius: 0;
				grid-row: 3;
				grid-column: 2;
  		}
		}
		.item-c {
			@media(min-width:1200px) {
				grid-row: 3;
				grid-column: 3;
  		}
		}
		.item-d {
			border-radius: 0px 0px 0px 10px;
			@media(min-width:1200px) {
				border-radius: 0;
				grid-row: 2;
				grid-column: 3;
  		}
		}
		.item-e {
			border-radius: 0px 0px 10px 0px;
			@media(min-width:1200px) {
				border-radius: 0px 10px 10px 0px;
				grid-column: 4;
  		}
		}
		h2, p.desc-title {
			color: var(--blue);
		}
		p.medium {
			max-width: 233px;
			width: 100%;
			margin-left: auto;
		}
	}
}
</style>
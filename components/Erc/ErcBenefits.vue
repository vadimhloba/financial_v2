<template>
	
	<section class="benefits">
		<div class="container">
			<h1>Our benefits</h1>
			<div class="column">
				<div class="item item-a">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">01</h2>
							<p class="desc-title">CPA's</p>
						</div>
						<p class="medium">Each account is overseen by a licensed CPA</p>
					</div>
				</div>
				<div class="item item-b">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">02</h2>
							<p class="desc-title">+$26,000</p>
						</div>
						<p class="medium">We make sure all numbers are accurate and fit within ERC regulations so you can “sleep well at night”</p>
					</div>
				</div>
				<div class="item item-c">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">03</h2>
							<p class="desc-title">$200k</p>
						</div>
						<p class="medium">Our ERC experts will take care of the paperwork so you can focus on running your business</p>
					</div>
				</div>
				<div class="item item-d">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">04</h2>
							<p class="desc-title">Up to $26,000 per w2 employee kept on payroll</p>
						</div>
						<p class="medium">Can qualify for multiple quarters in 2020 and 2021, up to $26,000 per W2 employee. Average credit is $200,000+</p>
					</div>
				</div>
				<div class="item item-e">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">05</h2>
							<p class="desc-title">Reasonable fee only after you receive credit</p>
						</div>
						<p class="medium">We only get paid after you do. Most businesses are getting sent checks by the IRS in 5-9 months</p>
					</div>
				</div>
				<div class="item item-f">
					<div
						class="box animate__animated"
						data-anim="findIn">
						<div class="wrapper">
							<h2 class="regular">06</h2>
							<p class="desc-title">Can qualify even if you got a PPP loan</p>
						</div>
						<p class="medium">There are many ways to qualify, even if your CPA didn't think you could qualify. We're conservative, but qualify you for as much as possible</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'ErcBenefits',
}
</script>

<style lang="scss" scoped>
.benefits {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	h1 {
		margin-bottom: 56px;
	}
	.column {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media(min-width:768px) {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
			border-radius: 10px 0 0 0;
			@media(min-width:1200px) {
				border-radius: 10px 0 0 10px;
  		}
		}
		.item-b {
			border-radius: 0 10px 0 0;
			@media(min-width:1200px) {
				border-radius: 0;
  		}
		}
		.item-c {
			@media(min-width:1200px) {
				grid-row: 2;
				grid-column: 2;
  		}
		}
		.item-d {
			@media(min-width:1200px) {
				grid-row: 2;
				grid-column: 3;
  		}
		}
		.item-e {
			border-radius: 0 0 0 10px;
			@media(min-width:1200px) {
				border-radius: 0 0 10px 0;
				grid-column: 4;
				grid-row: 2;
  		}
		}
		.item-f {
			border-radius: 0 0 10px 0;
			@media(min-width:1200px) {
				border-radius: 0 10px 0 0;
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
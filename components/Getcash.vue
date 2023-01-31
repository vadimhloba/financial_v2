<template>

	<section class="get-cash">
		<div class="container">
			<div class="col-one">
				<h3>Most business owners don't realize they can qualify to</h3>
				<h1>Get <span class="regular">$</span>26,000 cash <br> for each W2 employee</h1>
				<BtnEligibility class="green">Check eligibility</BtnEligibility>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular">Using the IRS' ERC Program</h2>
				</div>
				<div class="row-two">
					<div>
						<h2>No risk</h2>
						<ul>
							<li class="medium">No up front fees</li>
							<li class="medium">No credit Check</li>
							<li class="medium">Not a loan</li>
						</ul>
					</div>
					<div>
						<h2>Qualify 1 of 3 ways</h2>
						<ul>
							<li class="medium">Revenue Reduction</li>
							<li class="medium">Shutdowns</li>
							<li class="medium">Supply Chain Disruptions</li>
						</ul>
					</div>
					<div>
						<h2>Get money</h2>
						<p class="medium">from the IRS, even If you got PPP</p>
					</div>
					<div>
						<h2>Get $1.3 million</h2>
						<p class="medium">No cap on refund. Ie. a 50 employee business can get $1.3 Million</p>
					</div>
				</div>
			</div>
			<BtnEligibility class="green tab-appear">Check eligibility</BtnEligibility>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'Getcash'
}
</script>

<style lang="scss" scoped>
.get-cash {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	.col-one {
		border-bottom: 2px solid var(--grayish);
		.green {
			display: none;
			margin-bottom: 38px;
			@media(min-width:992px) {
				display: block;
  		}
		}
		h3 {
			color: var(--gray);
		}
		h1 {
			max-width: 594px;
			width: 100%;
			margin: 8px 0 32px;
		}
	}
	.col-two {
		display: grid;
		margin-top: 32px;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
			margin-top: 40px;
  	}
		.row-one {
			h2 {
				color: var(--gray);
				width: 100%;
				@media(min-width:992px) {
					max-width: 282px;
  			}
			}
		}
		.row-two {
			display: grid;
			grid-column-gap: 32px;
			grid-row-gap: 34px;
			margin-top: 32px;
			@media(min-width:768px) {
				grid-template-columns: repeat(2, 1fr);
  		}
			@media(min-width:992px) {
				grid-template-columns: repeat(2, 1fr);
				margin-top: 0;
  		}
			& div {
				padding-left: 102px;
				@media(min-width:992px) {
					padding-left: 0;
  			}
			}
			h2 {
				margin-bottom: 8px;
			}
			ul {
				padding-inline-start: 19px;
			}
		}
	}
	.tab-appear {
		display: block;
		width: 100%;
		margin: 0 auto;
		margin-top: 48px;
		@media(min-width:992px) {
			display: none;
  	}
	}
}
</style>
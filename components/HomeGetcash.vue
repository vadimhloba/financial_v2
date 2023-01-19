<template>

	<section class="get-cash">
		<div class="container">
			<div class="col-one">
				<h3>Most business owners don't realize they can qualify to</h3>
				<h1>Get <span class="regular">$</span>26,000 cash <br> for each W2 employee</h1>
				<button class="green">Check eligibility</button>
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
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeGetcash'
}
</script>

<style lang="scss" scoped>
.get-cash {
	padding: 160px 0;
	.col-one {
		border-bottom: 2px solid var(--grayish);
		h3 {
			color: var(--gray);
		}
		h1 {
			max-width: 594px;
			width: 100%;
			margin: 8px 0 32px;
		}
		button {
			margin-bottom: 38px;
		}
	}
	.col-two {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 40px;
		.row-one {
			h2 {
				color: var(--gray);
				max-width: 282px;
				width: 100%;
			}
		}
		.row-two {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 32px;
			grid-row-gap: 34px;
			h2 {
				margin-bottom: 8px;
			}
			ul {
				padding-inline-start: 19px;
			}
		}
	}
}
</style>
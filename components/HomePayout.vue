<template>

	<section class="erc-payout">
		<div class="container">
			<div class="wrapper">
				<div class="desc">
					<h1 class="title">Estimate your ERC Payout</h1>
					<button class="red">Check eligibility</button>
				</div>
				<div class="pay-cost">
					<div class="wrap">
						<div class="text-group">
							<p class="medium">Numbers of Employees:</p>
							<p>20</p>
						</div>
						<input type="range">
						<h1><span class="regular">$</span>312,000</h1>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomePayout'
}
</script>

<style lang="scss" scoped>
.erc-payout {
	margin-top: 160px;
	.wrapper {
		background: no-repeat url(/img/background/payout.png);
		padding: 32px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		max-width: 100%;
	}
	h1, p {
		color: var(--white);
	}
	.title {
		max-width: 371px;
		width: 100%;
		
		margin-bottom: 86px;
	}
	.pay-cost {
		display: grid;
		align-items: end;
		max-width: 344px;
		width: 100%;
		.wrap {
			height: auto;
			span {
				margin-right: 8px;
			}
			input {
				margin-bottom: 14px;
			}
			.text-group {
				display: flex;
				justify-content: space-between;
				align-items: center;
				& p:last-child {
					margin-bottom: 8px;
				}
			}
		}
	}
}
</style>
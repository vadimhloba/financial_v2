<template>

	<section class="erc-payout">
		<div class="container">
			<h1 class="tab-title">Estimate your ERC Payout</h1>
			<div class="bg-img">
				<img class="pic-desktop" src="/img/background/payout.png">
				<img class="pic-mobile" src="/img/background/payout_mobile.png">
			</div>
			<div class="wrapper">
				<div class="desc">
					<h1 class="title">Estimate your ERC Payout</h1>
					<button class="custom red">Check eligibility</button>
				</div>
				<div class="pay-cost">
					<div class="wrap">
						<div class="text-group">
							<p class="medium">Numbers of Employees:</p>
							<p>20</p>
						</div>
						<input type="range">
						<h1 class="title"><span class="regular">$</span>312,000</h1>
					</div>
				</div>
			</div>
			<button class="custom green tab-btn">Check eligibility</button>
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
	margin-top: 80px;
	@media(min-width:992px) {
		margin-top: 160px;
  }
	.container {
		position: relative;
	}
	.tab-title, .tab-btn {
		display: block;
		@media(min-width:992px) {
			display: none;
  	}
	}
	.tab-title {
		max-width: 343px;
		width: 100%;
		margin-bottom: 32px;
	}
	.tab-btn {
		margin-top: 24px;
		width: 100%;
	}
	.wrapper {
		position: relative;
		padding: 16px 0;
		display: grid;
		max-width: 300px;
		width: 100%;
		margin: 0 auto;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 36px;
			max-width: 100%;
			
  	}
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
	.title, p {
		color: var(--white);
	}
	.title {
		max-width: 371px;
		width: 100%;
		margin-bottom: 30px;
		@media(min-width:1200px) {
			margin-bottom: 74px;
  	}
		@media(min-width:1440px) {
			margin-bottom: 86px;
  	}
	}
	.desc {
		display: none;
		@media(min-width:992px) {
			display: grid;
  	}
	}
	.pay-cost {
		display: grid;
		align-items: end;
		max-width: 230px;
		width: 100%;
		@media(min-width:992px) {
			margin-left: -40px;
  	}
		@media(min-width:1200px) {
			max-width: 275px;
  	}
		@media(min-width:1440px) {
			max-width: 344px;
  	}
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
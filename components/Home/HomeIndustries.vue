<template>

	<section class="industries-helped">
		<div class="container">
			<div class="col-one">
				<h1>Industries we've helped</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular desc">We've helped clients of all sizes and across multiple different industries</h2>
					<button class="custom green">Check eligibility</button>
				</div>
				<div class="row-two">
					<div>
						<h2 class="regular">Construction</h2>
						<h2 class="regular number">1</h2>
					</div>
					<div>
						<h2 class="regular">Restaurants / QSR</h2>
						<h2 class="regular number">2</h2>
					</div>
					<div>
						<h2 class="regular">Warehouse / 3PL</h2>
						<h2 class="regular number">3</h2>
					</div>
					<div>
						<h2 class="regular">Business Services</h2>
						<h2 class="regular number">4</h2>
					</div>
					<div>
						<h2 class="regular">Retail</h2>
						<h2 class="regular number">5</h2>
					</div>
					<div>
						<h2 class="regular">Mechanical Supplies</h2>
						<h2 class="regular number">6</h2>
					</div>
				</div>
			</div>
			<button class="custom green tab-appear">Check eligibility</button>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomIndustries'
}
</script>

<style lang="scss" scoped>
.industries-helped {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	.col-one {
		border-bottom: 2px solid var(--grayish);
		h1 {
			max-width: 349px;
			width: 100%;
			margin-bottom: 32px;
		}
	}
	.col-two {
		margin-top: 22px;
		display: grid;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
  	}
		.row-one {
			button {
				display: none;
				@media(min-width:992px) {
					display: block;
  			}
			}
		}
		h2 {
			&.desc {
				margin-bottom: 32px;
				width: 100%;
				@media(min-width:992px) {
					max-width: 344px;
  			}
			}
			&.desc, &.number {
				color: var(--gray);
			}
			&.number {
				margin: 24px 0;
				&:first-child{
					margin-top: 0;
				}
			}
		}
		.row-two {
			div {
				display: flex;
				justify-content: space-between;
				border-bottom: 2px solid var(--grayish);
				align-items: center;
				&:first-child {
					border-top: 2px solid var(--grayish);
					@media(min-width:992px) {
						border-top: 0;
						margin-top: -24px;
  				}
				}
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
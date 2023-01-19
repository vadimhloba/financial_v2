<template>

	<section class="industries-helped">
		<div class="container">
			<div class="col-one">
				<h1>Industries we've helped</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular desc">We've helped clients of all sizes and across multiple different industries</h2>
					<button class="green">Check eligibility</button>
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
	padding: 160px 0 185px;
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
		grid-template-columns: repeat(2, 1fr);
		h2 {
			&.desc {
				margin-bottom: 32px;
				max-width: 344px;
				width: 100%;
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
			}
		}
	}
}
</style>
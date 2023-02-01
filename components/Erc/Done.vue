<template>
	
	<section class="done">
		<div class="container">
			<div class="title">
				<h1 class="huge">100% <br> Done-For-You ERC Service from Financial Match</h1>
			</div>
			<div class="column">
				<div
					data-anim="fadeInUp"
					class="animate__animated block">
					<h1>01</h1>
					<h2>“Sleep well at night” ERC audit <br> protection</h2>
					<p>Our team works with you during the entire ERC filing process. We make sure all numbers are accurate and fit within ERC regulations.</p>
				</div>
				<div
					data-anim="fadeInUp"
					class="animate__animated block">
					<h1>02</h1>
					<h2>Our licensed professionals do all the hard work</h2>
					<p>We have a dream team of ERC experts who take care of paperwork so you can focus on running your business.</p>
				</div>
				<div
					data-anim="fadeInUp"
					class="animate__animated block">
					<h1>03</h1>
					<h2>No collateral, personal guarantee or credit check</h2>
					<p>Because this is a tax credit from the IRS and not a loan, there is no collateral, personal guarantees or credit check required to receive the tax credit.</p>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'ErcDone',
}
</script>

<style lang="scss" scoped>
.done {
	margin-top: 80px;
	background: var(--green);
	@media (min-width: 992px) {
		margin-top: 160px 0;
	}
	.container {
		padding-top: 80px;
		padding-bottom: 80px;
		color: var(--white);
		@media (min-width: 992px) {
			padding-top: 160px;
			padding-bottom: 160px;
		}
	}
	.title {
		max-width: 737px;
		width: 100%;
		margin-bottom: 40px;
	}
	.column {
		display: flex;
		flex-direction: column;
		padding-top: 40px;
		border-top: 2px solid var(--lightgreen);
		@media (min-width: 992px) {
			display: grid;
			grid-gap: 32px;
			grid-template-columns: repeat(3, 1fr);
		}
		@media (min-width: 1440px) {
			grid-template-columns: repeat(4, 1fr);
		}
		.block {
			margin-bottom: 16px;
			@media (min-width: 992px) {
				margin-bottom: 0;
			}
			@media (min-width: 1440px) {
				&:first-child {
					grid-column: 2;
				}
			}
			&:last-child {
				margin-bottom: 0;
			}
			h1 {
				color: var(--lightgreen);
				margin-bottom: 8px;
				@media (min-width: 992px) {
					font-size: 56px;
					line-height: 130%;
				}
			}
			h2 {
				margin-bottom: 8px;
			}
		}
	}
}
</style>
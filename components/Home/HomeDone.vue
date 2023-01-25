<template>

	<section class="done-for-you">
		<div class="container">
			<div class="col-one">
				<h1>The Done-For-You ERC Service</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular">We make the complicated simple</h2>
				</div>
				<div class="row-two">
					<div>
						<h2 class="regular">ERC regulations</h2>
						<p class="medium">We make sure all numbers are accurate and fit within ERC regulations so you can “sleep well at night”</p>
					</div>
					<div>
						<h2 class="regular">Experts</h2>
						<p class="medium">Our ERC experts will take care of the paperwork so you can focus on running your business</p>
					</div>
					<div class="wrapper">
						<h2 class="regular">A licensed CPA</h2>
						<p class="medium">Each account is overseen by a licensed CPA</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeDone'
}
</script>

<style lang="scss" scoped>
.done-for-you {
	padding-bottom: 80px;
	@media(min-width:992px) {
		padding-bottom: 160px;
	}
	.col-one {
		border-bottom: 2px solid var(--grayish);
		h1 {
			max-width: 494px;
			width: 100%;
			margin-bottom: 32px;
			@media(min-width:992px) {
				margin-bottom: 40px;
			}
		}
	}
	.col-two {
		margin-top: 32px;
		display: grid;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
			margin-top: 40px;
  	}
		.row-one {
			h2 {
				color: var(--gray);
				width: 100%;
				margin-bottom: 32px;
				@media(min-width:992px) {
					margin-bottom: 0;
					max-width: 249px;
  			}
			}
		}
		.row-two {
			display: grid;
			grid-gap: 16px;
			padding-left: 102px;
			@media(min-width:992px) {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 32px;
				padding-left: 0;
  		}
			p {
				margin-top: 4px;
				@media(min-width:992px) {
					margin-top: 8px;
  			}
			}
		}
	}
}
</style>
<template>

	<section class="program">
		<div class="container">
			<div class="col-one">
				<h1>Program was not well understood</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular">(Even by many CPA's), so few took advantage</h2>
				</div>
				<div class="row-two">
					<p class="medium">The ERC Program has been amended which can help more businesses qualify. Unlike PPP, there is no limit on max amount you can receive</p>
					<p class="medium">ERC is getting more attention as business owners realize they can still take advantage</p>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'ErcProgram',
}
</script>

<style lang="scss" scoped>
.program {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
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
					max-width: 344px;
  			}
			}
		}
		.row-two {
			display: grid;
			grid-gap: 22px;
			padding-left: 102px;
			@media(min-width:992px) {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 45px;
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
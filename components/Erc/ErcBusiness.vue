<template>

	<section class="business">
		<div class="container">
			<div class="col-one">
				<h1>Many businesses don't realize they can qualify</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular">(for $200k on average), but the window is closing</h2>
				</div>
				<div class="row-two">
					<p class="medium">Most businesses don't realize they actually can qualify, or were told incorrectly by their CPAs that they wouldn't</p>
					<p class="medium">It's not really the CPA's fault, as the rules were confusing (and changed multiple times), and this is a very specialized one-time program</p>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'ErcBusiness',
}
</script>

<style lang="scss" scoped>
.business {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
	}
	.col-one {
		border-bottom: 2px solid var(--grayish);
		h1 {
			max-width: 688px;
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
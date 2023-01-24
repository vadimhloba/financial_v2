<template>

	<section class="our-philosophy">
		<div class="container">
			<div class="col-one">
				<div class="row-one">
					<h1>Our philosophy</h1>
					<h2 class="regular">Individual. Intellectual. Professional</h2>
				</div>
				<div class="row-two">
					<div class="wrapper">
						<p class="medium">Through our observations and learnings, we have created a logical
							and sequential Financial Match set of Values and Principles,
							across Emotional, Intellectual and Physical
							dimensions that human beings operate in <br><br>
							Our beliefs are grounded in latest and most advanced scientific
							research that explore the effects that emotions have on our
							entire being originating from cells in particular, on our
							chromosomes and mitochondrial DNA.</p>
						<div class="links">
							<a href="#" class="read-more">
								<p class="D">Read More</p>
								<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-three">
				<img src="/img/vector-img/office.png">
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomePhilosophy'
}
</script>

<style lang="scss" scoped>
.our-philosophy {
	padding-bottom: 80px;
	@media(min-width:992px) {
		padding-bottom: 160px;
	}
	.container {
		display: grid;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
  	}
	}
	.col-one {
		display: grid;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
  	}
		.row-two {
			display: grid;
			align-items: end;
			margin-right: 32px;
			.links {
				margin-top: 24px;
				margin-bottom: 40px;
				display: flex;
				align-items: center;
				@media(min-width:992px) {
					margin-top: 32px;
					margin-bottom: 0;
  			}
			}
		}
		h2 {
			color: var(--gray);
			margin-top: 8px;
			margin-bottom: 32px;
			@media(min-width:992px) {
				margin-top: 16px;
				margin-bottom: 0;
  		}
		}
		a {
			color: var(--lightgreen);
		}
	}
}
</style>
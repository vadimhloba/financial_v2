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
							<a href="/about-us" to="about-us" class="read-more">
								<p class="medium">Read More</p>
								<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-three">
				<svg width="688" height="612" viewBox="0 0 688 612" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<mask id="mask0_42_3324" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="688" height="612">
						<path d="M10 0H416.338C419.551 0 422.569 1.54428 424.449 4.15066L531.338 152.366L561.121 44.241H622.593V278.902L686.111 366.977C687.339 368.68 688 370.726 688 372.826V602C688 607.523 683.523 612 678 612H622.593V278.902L531.338 152.366L406.758 604.656C405.563 608.994 401.617 612 397.117 612H10C4.47716 612 0 607.523 0 602V10C0 4.47717 4.47715 0 10 0Z" fill="#D9D9D9"/>
					</mask>
					<g mask="url(#mask0_42_3324)">
						<rect x="-101" width="889" height="612" fill="url(#pattern0)"/>
					</g>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-duration="400"
						style="opacity: 1;"
						width="531.35"
						height="500"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-delay="390"
            data-duration="300"
						style="opacity: 1;"
						x="531"
						y="44.23"
						width="91.6"
						height="234.67"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-delay="680"
            data-duration="300"
						style="opacity: 1;"
						x="622.58"
						y="278.9"
						width="65.42"
						height="333.1"
						fill="#F4EFE5">
					</rect>
					<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image0_42_3324" transform="translate(-0.0158977) scale(0.000412718 0.00059952)"/>
						</pattern>
						<clipPath id="clip0_208_2507">
							<rect width="688" height="612" fill="white"></rect>
						</clipPath>
						<image id="image0_42_3324" width="2500" height="1668" xlink:href="~/static/img/vector-img/office.png"/>
					</defs>
				</svg>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
    name: "HomePhilosophy",
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
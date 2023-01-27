<template>

	<section class="business-impacted">
		<div class="container">
			<h1 class="tab-title">Has your business been impacted by the restrictions and impacts of COVID-19?</h1>
			<div class="bg-img">
				<svg
					class="pic-desktop" width="1376" height="542" viewBox="0 0 1376 542" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1376 100.357V267.346C1376 272.945 1373.15 277.848 1369.04 279.317L691.474 540.66C689.178 541.546 686.755 542 684.294 542C672.362 542 635.679 542 634.98 542H9.44429C4.23081 542 0 536.44 0 529.588V12.4122C0 5.56036 4.23081 0 9.44429 0H822L1032 542H1224V88L1366.55 87.945C1371.76 87.945 1375.99 93.5054 1375.99 100.357H1376Z" fill="#41A280"/>
					<rect
						class="animate__animated animate__heightOut"
						style="animation-duration: 400ms; opacity: 1"
						width="987.27"
						height="542"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated animate__heightOut"
						style="animation-duration: 300ms; animation-delay: 390ms; opacity: 1"
						x="987.275"
						y="335.25"
						width="236.73"
						height="206.75"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated animate__heightOut"
						style="animation-duration: 300ms; animation-delay: 680ms; opacity: 1"
						x="1224"
						y="88"
						width="152"
						height="247"
						fill="#F4EFE5">
					</rect>
				</svg>
				<svg class="pic-mobile" width="343" height="203" viewBox="0 0 343 203" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M343 37.5877V100.131C343 102.228 342.29 104.065 341.265 104.615L206.307 202.057C205.457 202.67 204.462 203 203.415 203C195.266 203 158.469 203 158.283 203H2.35421C1.05463 203 0 200.917 0 198.351V4.64886C0 2.08257 1.05463 0 2.35421 0H225.5L273.5 203H301V32.9388H340.644C341.944 32.9388 342.999 35.0214 342.999 37.5877H343Z" fill="#41A280"/>
				</svg>
			</div>
			<div class="desc">
				<h1
					class="animate__animated animate__fadeInUp"
					style="animation-delay: 1000ms">
					Has your business been <br> impacted by the restrictions <br> and impacts of COVID-19?
				</h1>
				<div 
					class="column animate__animated animate__fadeInUp"
					style="animation-delay: 1000ms">
					<p>Our professionals do all the hard work so you can sleep at night knowing it was done right</p>
					<button class="custom">Check eligibility</button>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeBusiness'
}
</script>

<style lang="scss" scoped>
.business-impacted {
	padding-top: 16px;
	@media(min-width:992px) {
		padding-top: 32px
  }
	.container {
		position: relative;
		display: block;
	}
	.tab-title {
		display: block;
		color: var(--black);
		margin-bottom: 24px;
		@media(min-width:992px) {
			display: none;
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
	.desc {
		position: relative;
		padding: 16px 0;
		max-width: 100%;
		@media(min-width:992px) {
  	  padding: 32px;
  	}
		h1, p {
			color: var(--white);
		}
		h1 {
			display: none;
			width: 56cqw;
			@media(min-width:992px) {
  		  display: block;
  		}
		}
		p {
			padding: 0;
			max-width: 189px;
			margin-bottom: 32px;
			@media(min-width:576px) {
				max-width: 189px;
  		}
			@media(min-width:992px) {
				width: 100%;
				max-width: 312px;
  		  padding: 17px 0;
				margin-bottom: 0;
  		}
			@media(min-width:1200px) {
  		  padding: 160px 28px 0 0;
  		}
			@media(min-width:1440px) {
  		  padding: 174px 145px 0 0;
  		}
		}
	}
	.column {
		position: relative;
		display: grid;
		max-width: 300px;
		width: 100%;
		margin: 0 auto;
		@media(min-width:992px) {
			margin: 0;
  	}
		@media(min-width:1200px) {
			max-width: 100%;
			align-items: flex-end;
			display: flex;
  	}
	}
}
</style>
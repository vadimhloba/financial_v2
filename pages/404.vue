<template>
  
	<section class="error">
		<div class="container">
			<svg width="1376" height="542" viewBox="0 0 1376 542" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1376 100.357V267.346C1376 272.945 1373.15 277.848 1369.04 279.317L691.474 540.66C689.178 541.546 686.755 542 684.294 542C672.362 542 635.679 542 634.98 542H9.44429C4.23081 542 0 536.44 0 529.588V12.4122C0 5.56036 4.23081 0 9.44429 0H822L1032 542H1224V88L1366.55 87.945C1371.76 87.945 1375.99 93.5054 1375.99 100.357H1376Z" fill="#0E0E11"/>
			</svg>
			<h1 class="huge">404</h1>
			<h2>page not found</h2>
			<nuxt-link to="/" class="black">Back Home</nuxt-link>
		</div>
		<div class="container">
			<nuxt-link to="/" class="green-contact">Back Home</nuxt-link>
		</div>
	</section>

</template>

<script>
export default {
  name: 'errorPage',
	layout: 'empty'
}
</script>

<style lang="scss" scoped>
	.error {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		.container {
			position: relative;
		}
		svg {
			display: block;
			width: 100%;
			@media (max-width: 991px) {
				max-width: 500px;
			}
		}
		h1, h2 {
			color: var(--white);
		}
		h1 {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(32px, 16px);
			@media (min-width: 992px) {
				transform: translate(44px, 32px);
			}
		}
		h2 {
			position: absolute;
			bottom: 0;
			left: 0;
			transform: translate(32px, -16px);
			@media (min-width: 992px) {
				transform: translate(44px, -32px);
			}
		}
		.black {
			position: absolute;
			display: none;
			@media (min-width: 992px) {
				display: block;
				bottom: 32px;
				left: 36.48%;
			}
		}
		.green-contact {
			display: block;
			margin-top: 32px;
			@media (min-width: 992px) {
				display: none;
			}
		}
	}
</style>

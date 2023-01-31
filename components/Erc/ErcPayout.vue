<template>
	
	<section class="erc-payout">
		<div class="container">
			<h1 class="tab-title">Estimate your ERC Payout</h1>
			<div class="bg-img">
				<svg class="pic-desktop" width="1376" height="347" viewBox="0 0 1376 347" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 337V10C0 4.47715 4.47715 0 10 0H1033.5L1203.33 253.028L1297.11 201.133V46.6036H1366C1371.52 46.6036 1376 51.0807 1376 56.6036V145.688C1376 152.963 1372.05 159.665 1365.68 163.187L1297.11 201.133V298.703C1297.11 304.226 1292.63 308.703 1287.11 308.703H1246.03C1242.69 308.703 1239.58 307.043 1237.72 304.276L1203.33 253.028L1038.02 344.5C1035.05 346.14 1031.72 347 1028.34 347H10C4.47715 347 0 342.523 0 337Z" fill="#1D3C86"/>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-duration="400"
						style="opacity: 1;"
						width="1203.33"
						height="253.03"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-delay="390"
            data-duration="300"
						style="opacity: 1;"
						x="1203.33"
						y="201"
						width="93.78"
						height="108"
						fill="#F4EFE5">
					</rect>
					<rect
						class="animate__animated"
						data-anim="heightOut"
            data-delay="680"
            data-duration="300"
						style="opacity: 1;"
						x="1297.11"
						y="46.6"
						width="79"
						height="154.55"
						fill="#F4EFE5">
					</rect>
					<defs>
						<clipPath id="clip0_212_2512">
							<rect width="1376" height="347" fill="white"/>
						</clipPath>
					</defs>
				</svg>
				<svg class="pic-mobile" width="343" height="150" viewBox="0 0 343 150" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 142V8C0 3.58172 3.58172 0 8 0H252.142C255.446 0 258.41 2.03116 259.603 5.11245L299.957 109.378L323.335 86.9449V20.1456H340.507C341.884 20.1456 343 21.2617 343 22.6384V65.9489C343 67.3067 342.446 68.6059 341.466 69.5461L323.335 86.9449V130.953C323.335 132.329 322.219 133.445 320.842 133.445H310.98C309.95 133.445 309.027 132.812 308.655 131.852L299.957 109.378L259.945 147.772C258.456 149.202 256.471 150 254.406 150H8C3.58172 150 0 146.418 0 142Z" fill="#1D3C86"/>
				</svg>
			</div>
			<div class="wrapper">
				<div class="desc animate__animated"
					data-anim="fadeInUp"
					data-delay="1000">
					<h1 class="title move">Estimate your ERC Payout</h1>
					<BtnEligibility class="blue">Check eligibility</BtnEligibility>
				</div>
				<div class="pay-cost animate__animated"
					data-anim="fadeInUp"
					data-delay="1000">
					<div class="wrap">
						<div class="text-group">
							<p class="medium">Numbers of Employees:</p>
							<p>20</p>
						</div>
						<input type="range">
						<h1 class="title"><span class="regular">$</span>312,000</h1>
					</div>
				</div>
			</div>
			<BtnEligibility
				class="green tab-btn animate__animated"
				data-anim="fadeInUp"
				data-delay="1000">
			</BtnEligibility>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'ErcPayout',
}
</script>

<style lang="scss" scoped>
.erc-payout {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	.tab-title, .tab-btn {
		display: block;
		@media(min-width:992px) {
			display: none;
  	}
	}
	.tab-title {
		max-width: 343px;
		width: 100%;
		margin-bottom: 32px;
	}
	.tab-btn {
		margin-top: 36px;
		width: 100%;
	}
	.wrapper {
		padding: 16px 0;
		display: grid;
		max-width: 300px;
		width: 100%;
		margin: 0 auto;
		@media(min-width:992px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 36px;
			max-width: 100%;
			
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
	.title, p {
		color: var(--white);
	}
	.title {
		max-width: 371px;
		width: 100%;
		&.move {
			margin-bottom: 30px;
			@media(min-width:1200px) {
				margin-bottom: 74px;
  		}
			@media(min-width:1440px) {
				margin-bottom: 86px;
  		}
		}
	}
	.desc {
		display: none;
		@media(min-width:992px) {
			display: grid;
  	}
	}
	.pay-cost {
		display: grid;
		align-items: end;
		max-width: 230px;
		width: 100%;
		@media(min-width:992px) {
			margin-left: -40px;
  	}
		@media(min-width:1200px) {
			max-width: 275px;
  	}
		@media(min-width:1440px) {
			max-width: 344px;
  	}
		.wrap {
			height: auto;
			span {
				margin-right: 8px;
			}
			input {
				margin-bottom: 14px;
			}
			.text-group {
				display: flex;
				justify-content: space-between;
				align-items: center;
				& p:last-child {
					margin-bottom: 8px;
				}
			}
		}
	}
}
</style>
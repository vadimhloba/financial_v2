<template>

	<section class="client-review">
		<div class="container">
			<div class="col-one">
				<h1>Client review</h1>
				<button class="next-review">
					<p class="medium">Next review</p>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
					</svg>
				</button>
			</div>
			<div class="col-two">
				<div class="block-tab">
					<div class="box-tab">
						<h3>Selena Giri</h3>
						<p class="medium">CEO Chess.com</p>
					</div>
					<div class="block">
						<div class="row-one red">
							<div class="box">
								<h3>Selena Giri</h3>
								<p class="medium">CEO Chess.com</p>
							</div>
							<div class="box">
								<h1><span class="regular">$</span>200,500</h1>
								<p class="medium">received to our clients</p>
							</div>
							<div class="box">
								<div>
									<h1>4</h1>
									<h2 class="regular">months</h2>
								</div>
								<p>from call to receiving money</p>
							</div>
						</div>
						<div class="row-two">
							<p class="medium">Our association with Financial Match have helped our short term visions delivered in form of reality thereby setting the perfect platform for medium and long terms objectives. With a superior and well structured team of leaders and advisors every project is treated distinctively with a progressive mindset and a methodology which is resourceful. Surely working with the team of Financial Match especially the driving leadership at the top has been an enriching experience both at a professional and personal level.</p>
						</div>
					</div>
				</div>
				<div class="block-tab">
					<div class="box-tab">
						<h3>Luka Doncic</h3>
						<p class="medium">Wilson.com</p>
					</div>
					<div class="block">
						<div class="row-one blue">
							<div class="box">
								<h3>Luka Doncic</h3>
								<p class="medium">Wilson.com</p>
							</div>
							<div class="box">
								<h1><span class="regular">$</span>713,000</h1>
								<p class="medium">received to our clients</p>
							</div>
							<div class="box">
								<div>
									<h1>4</h1>
									<h2 class="regular">months</h2>
								</div>
								<p>from call to receiving money</p>
							</div>
						</div>
						<div class="row-two">
							<p class="medium">Our association with Financial Match have helped our short term visions delivered in form of reality thereby setting the perfect platform for medium and long terms objectives. With a superior and well structured team of leaders and advisors every project is treated distinctively with a progressive mindset and a methodology which is resourceful. Surely working with the team of Financial Match especially the driving leadership at the top has been an enriching experience both at a professional and personal level.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'AboutReviews'
}
</script>

<style lang="scss" scoped>
.client-review {
	padding-top: 80px;
	@media (min-width: 992px) {
		padding-top: 160px;
	}
	.col-one {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 27px;
	}
	.col-two {
		display: flex;
		overflow-x: auto;
		.block-tab {
			margin-right: 32px;
			&:last-child {
				margin-right: 0;
			}
		}
		.box-tab {
			display: block;
			margin-bottom: 16px;
			@media (min-width: 992px) {
				display: none;
			}
		}
		.block {
			overflow: hidden;
			position: relative;
			display: flex;
			flex-direction: column;
			min-width: 380px;
			border-radius: 10px;
			@media (min-width: 576px) {
				min-width: 500px;
			}
			@media (min-width: 992px) {
				min-width: 1000px;
				flex-direction: row;
			}
			.row-one {
				display: flex;
				justify-content: space-between;
				order: 2;
				position: relative;
				color: var(--white);
				padding: 16px;
				@media (min-width: 992px) {
					display: block;
					order: 1;
					width: 100%;
					max-width: 344px;
					padding: 32px 63px 32px 32px;
				}
				&.red {
					background: var(--red);
				}
				&.blue {
					background: var(--blue);
				}
				.box {
					max-width: 160px;
					@media (min-width: 992px) {
						margin-bottom: 23px;
						max-width: 100%;
					}
					&:last-child {
						margin-bottom: 0;
					}
					&:first-child {
						display: none;
						@media (min-width: 992px) {
							display: block;
						}
					}
					div {
						display: flex;
						align-items: end;
						h2 {
							margin-bottom: 8px;
							margin-left: 12px;
							@media (min-width: 992px) {
								margin-bottom: 0;
							}
							@media (min-width: 1440px) {
								margin-bottom: 8px;
							}
						}
					}
					span {
						margin-right: 12px;
					}
				}
			}
			.row-two {
				order: 1;
				position: relative;
				padding: 32px;
				background: var(--lightblue);
				@media (min-width: 992px) {
					order: 2;
					width: 100%;
					max-width: 656px;
				}
			}
		}
	}
}
</style>
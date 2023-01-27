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
				<div class="block red">
					<div class="row-one">
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
				<div class="block blue">
					<div class="row-one">
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
		.block {
			display: flex;
			min-width: 1000px;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 32px;
			&:last-child {
				margin-right: 0;
			}
			&.red {
				background: var(--red);
			}
			&.blue {
				background: var(--blue);
			}
			.row-one {
				color: var(--white);
				width: 100%;
				max-width: 344px;
				padding: 32px 63px 32px 32px;
				.box {
					margin-bottom: 23px;
					&:last-child {
						margin-bottom: 0;
					}
					div {
						display: flex;
						align-items: end;
						h2 {
							margin-bottom: 8px;
							margin-left: 12px;
						}
					}
					span {
						margin-right: 12px;
					}
				}
			}
			.row-two {
				width: 100%;
				max-width: 656px;
				padding: 32px;
				background: var(--lightblue);
			}
		}
	}
}
</style>
<template>

	<section class="how-it-works">
		<div class="container">
			<h1>How it works</h1>
			<div class="column">
				<div class="item item-a">
					<div class="wrapper">
						<h2>01</h2>
						<p>Qualification Quiz</p>
					</div>
					<p class="medium item-desc">A boss who admits to having acted in their own interest may show honesty by rectifying the situation</p>
				</div>
				<div class="item item-b">
					<div class="wrapper">
						<h2>02</h2>
						<p>Fill Out Application</p>
					</div>
					<p class="medium item-desc">Online or phone</p>
				</div>
				<div class="item item-c">
					<div class="wrapper">
						<h2>03</h2>
						<p>Get Docs and Info</p>
					</div>
					<p class="medium item-desc">Work with our team</p>
				</div>
				<div class="item item-d">
					<div class="wrapper">
						<h2>04</h2>
						<p>Processing</p>
					</div>
					<p class="medium item-desc">A boss who admits to having acted in their own interest may show honesty by rectifying the situation</p>
				</div>
				<div class="item item-e">
					<div class="wrapper">
						<h2>05</h2>
						<p>Submission</p>
					</div>
					<p class="medium item-desc">Online or phone</p>
				</div>
				<div class="item item-f">
					<div class="wrapper">
						<h2>06</h2>
						<p>Payment from IRS</p>
					</div>
					<p class="medium item-desc">Work with our team</p>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeHowitworks'
}
</script>

<style lang="scss" scoped>
.how-it-works {
	padding-bottom: 80px;
	background-color: var(--green);
	@media(min-width:992px) {
		padding-bottom: 160px;
  }
	.container {
		padding-top: 80px;
		padding-bottom: 80px;
		@media(min-width:992px) {
			padding-top: 160px;
			padding-bottom: 160px;
  	}
	}
	h1, h2, p {
		color: var(--white);
	}
	h1 {
		margin-bottom: 32px;
	}
	.column {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media(min-width:768px) {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  	}
		.item {
			padding: 16px;
			max-width: 346px;
			border: 2px solid var(--lightgreen);
			margin: -1px;
			@media(min-width:576px) {
				padding: 24px;
  		}
			&:nth-child(2) .wrapper, &:nth-child(3) .wrapper,
			&:nth-child(5) .wrapper, &:nth-child(6) .wrapper {
					margin-bottom: 130px;
			}
			.wrapper {
				display: flex;
				align-items: center;
				margin-bottom: 64px;
				h2 {
					margin-right: 24px;
				}
			}
			.item-desc {
				max-width: 233px;
				width: 100%;
				margin-left: auto;
			}
			&.item-a {
				border-radius: 10px 0px 0px 0px;
				@media(min-width:1200px) {
					border-radius: 0;
					grid-column: 2;
  			}
			}
			&.item-b {
				border-radius: 0px 10px 0px 0px;
				@media(min-width:992px) {
					border-radius: 0;
  			}
			}
			&.item-c {
				border-radius: 0;
				@media(min-width:992px) {
					border-radius: 0px 10px 0px 0px;
  			}
				@media(min-width:1200px) {
					border-radius: 0px 10px 10px 0px;
  			}
			}
			&.item-d {
				border-radius: 0;
				@media(min-width:992px) {
					border-radius: 0px 0px 0px 10px;
  			}
				@media(min-width:1200px) {
					border-radius: 10px 0px 0px 10px;
  			}
			}
			&.item-e {
				border-radius: 0px 0px 0px 10px;
				@media(min-width:992px) {
					border-radius: 0;
  			}
			}
			&.item-f {
				border-radius: 0px 0px 10px 0px;
				@media(min-width:1200px) {
					border-radius: 0;
  			}
			}
		}
	}
}
</style>
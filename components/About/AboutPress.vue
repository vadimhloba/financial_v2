<template>

	<section class="press-about-us">
		<div class="container">
			<div class="col-one">
				<h1>Press about us</h1>
				<button class="read-more">
					<p class="medium">View more</p>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
					</svg>
				</button>
			</div>
			<div class="col-two">
				<div class="block">
					<img src="/img/offices/office-one.jpg">
					<p class="small">The Losangeles Tribune</p>
					<h3>Financial Match Continues Industry-Leading National ERC Services Expansion</h3>
					<p class="medium post">Financial Match has unique expertise in navigating the ERC (Employee Retention Credits) filing process, offering unparalleled access to ERC optimization and submission support for business owners across the country</p>
					<button class="read-more">
						<p class="medium">Read more</p>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
						</svg>
					</button>
				</div>
				<div class="block">
					<img src="/img/offices/office-two.jpg">
					<p class="small">Business First Online</p>
					<h3>My CPA didn't tell me about ERC</h3>
					<p class="medium post">Many businesses suffered as a result of the pandemic, whether due to supply chain issues, mandated operational limitations, or simply revenue reductions. ERC (Employee Retention Credits) was created as part of the Cares Act to help businesses overcome these challenges, recover, and continue operations</p>
					<button class="read-more">
						<p class="medium">Read more</p>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
						</svg>
					</button>
				</div>
				<div class="block">
					<img src="/img/offices/office-three.jpg">
					<p class="small">CEO Weekly</p>
					<h3>Maximizes Your ERC Credits</h3>
					<p class="medium post">ERC (Employee Retention Credits), part of the Cares Act, is widely misunderstood and not something many business owners know about. As an industry-leading government tax credit advisor</p>
					<button class="read-more">
						<p class="medium">Read more</p>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
						</svg>
					</button>
				</div>
				<div class="block">
					<img src="/img/offices/office-four.jpg">
					<p class="small">Disrupt Magazine</p>
					<h3>Can I get both PPP and ERC?</h3>
					<p class="medium post">The Cares Act was enacted to help individuals and businesses offset challenges experienced as a result of the pandemic. For businesses, these difficulties were due to supply chain disruptions, mandated operational limitations, or revenue reductions due to the economic calamity that resulted from COVID-19</p>
					<button class="read-more">
						<p class="medium">Read more</p>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
						</svg>
					</button>
				</div>
				<div class="block">
					<img src="/img/offices/office-five.jpg">
					<p class="small">USA today</p>
					<h3>Why choose Financial Match?</h3>
					<p class="medium post">The Cares Act was enacted to help individuals and businesses offset challenges experienced as a result of the pandemic. For businesses, these difficulties were due to supply chain disruptions, mandated operational limitations, or revenue reductions due to the economic calamity that resulted from COVID-19</p>
					<button class="read-more">
						<p class="medium">Read more</p>
						<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'AboutPress'
}
</script>

<style lang="scss" scoped>
.press-about-us {
	padding-top: 80px;
	@media (min-width: 992px) {
		padding-top: 160px;
	}
	.col-one {
		display: flex;
		justify-content: space-between;
		margin-bottom: 32px;
	}
	.col-two {
		display: flex;
		overflow-x: auto;
		.block {
			display: block;
			min-width: 312px;
			overflow: hidden;
			margin-right: 32px;
			&:last-child {
				margin-right: 0;
			}
			.small {
				margin: 8px 0;
			}
			.post {
				margin: 8px 0 16px;
			}
		}
	}
}
</style>
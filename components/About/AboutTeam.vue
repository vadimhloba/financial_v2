<template>

	<section class="our-team">
		<div class="container">
			<h1>Our Team</h1>
			<div class="col-one">
				<div class="links">
					<a>CEO</a>
					<a>Manager</a>
					<a>Designer</a>
				</div>
				<button class="read-more">
					<p class="medium">View more</p>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
					</svg>
				</button>
			</div>
			<div class="col-two">
				<div class="block">
					<div class="block-desc">
						<h3>Stephen Curry</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-one.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Lebron James</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-two.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Kevin Durant</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-three.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Kyrie Irving</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-four.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Stephen Curry</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-five.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Lebron James</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-six.jpg">
				</div>
				<div class="block">
					<div class="block-desc">
						<h3>Kevin Durant</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-seven.jpg">
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'AboutTeam'
}
</script>

<style lang="scss" scoped>
.our-team {
	padding-top: 80px;
	@media (min-width: 992px) {
		padding-top: 160px;
	}
	.col-one {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			padding: 32px 0 24px;
			a {
				margin-right: 48px;
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
	.col-two {
		display: flex;
		overflow-x: auto;
		.block {
			display: block;
			min-width: 344px;
			margin-right: 2px;
			overflow: hidden;
			&:first-child {
				border-radius: 10px 0px 0px 10px;
			}
			&:last-child {
				border-radius: 0px 10px 10px 0px;
				margin-right: 0;
			}
			.block-desc {
				color: var(--white);
				padding: 24px;
				background: var(--lightgreen);
				p {
					margin-top: 4px;
				}
			}
			img {
				width: 100%;
				transform: scale(101%);
			}
		}
	}
}
</style>
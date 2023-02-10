<template>

	<section class="our-team">
		<div class="container">
			<div class="title">
				<h1>Our Team</h1>
			</div>
			<div class="col-one">
				<div class="links">
					<a>CEO</a>
					<a>Manager</a>
					<a>Designer</a>
				</div>
				<button class="read-more" @click="nextSlide = !nextSlide">
					<span class="medium">View more</span>
					<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#41A280"/>
					</svg>
				</button>
			</div>
			<div class="col-two">
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Stephen Curry</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-one.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Lebron James</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-two.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Kevin Durant</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-three.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Kyrie Irving</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-four.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Stephen Curry</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-five.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
					<div class="block-desc">
						<h3>Lebron James</h3>
						<p class="medium">Manager</p>
					</div>
					<img src="/img/team/person-six.jpg">
				</div>
				<div class="block" :class="{'active': nextSlide}">
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
	data() {
    return {
      nextSlide: false
    }
  }
}
</script>

<style lang="scss" scoped>
.our-team {
	padding-top: 80px;
	@media (min-width: 992px) {
		padding-top: 160px;
	}
	.container {
		position: relative;
	}
	.links {
		padding: 32px 0 24px;
		a {
			margin-right: 48px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.read-more {
		position: absolute;
		top: 0;
		right: 0;
		padding: 10px 15px;
		@media (min-width: 576px) {
			position: relative;
		}
	}
	.block {
		display: block;
		min-width: 172px;
		margin-right: 2px;
		overflow: hidden;
		@media (min-width: 992px) {
			min-width: 344px;
		}
		&:first-child {
			border-radius: 10px 0px 0px 10px;
		}
		&:last-child {
			border-radius: 0px 10px 10px 0px;
			margin-right: 0;
		}
		&-desc {
			color: var(--white);
			padding: 8px;
			background: var(--lightgreen);
			@media (min-width: 992px) {
				padding: 24px;
			}
			p {
				font-size: 12px;
				@media (min-width: 992px) {
					font-size: 16px;
				}
			}
			h3 {
				font-size: 16px;
				@media (min-width: 992px) {
					font-size: 20px;
				}
			}
		}
		img {
			width: 100%;
			transform: scale(101%);
		}
	}
	.col{
		&-one {
			display: block;
			align-items: center;
			justify-content: space-between;
			@media (min-width: 576px) {
				display: flex;
			}
		}
		&-two {
			display: flex;
			overflow: hidden;
			.block {
				transform: translate3d(0%, 0px, 0px);
				transition: .4s;
				&.active {
					transform: translate3d(-500%, 0px, 0px);
					@media(min-width:576px) {
						transform: translate3d(-394%, 0px, 0px);
  				}
					@media(min-width:768px) {
						transform: translate3d(-295%, 0px, 0px);
  				}
					@media(min-width:992px) {
						transform: translate3d(-437%, 0px, 0px);
  				}
					@media(min-width:1200px) {
						transform: translate3d(-385%, 0px, 0px);
  				}
					@media(min-width:1440px) {
						transform: translate3d(-307%, 0px, 0px);
  				}
				}
			}
		}
	}
}
</style>
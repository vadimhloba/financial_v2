<template>

	<section class="client-review">
		<div class="container">
			<div class="col-one">
				<h1>Client review</h1>
				<div class="link">
					<div>
						<button class="next-review" @click="nextSlide = !nextSlide">
							<span class="medium">Next review</span>
							<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="col-two">
				<div class="row-one" :class="{'active': nextSlide}">
					<div class="video">
						<img src="/img/reviews/review-one.png">
						<a><svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M46.1043 33.3565L8.18522 56.4315C4.9672 58.3877 0.837402 56.019 0.837402 52.0752V5.92522C0.837402 1.98772 4.96124 -0.387279 8.18522 1.57522L46.1043 24.6502C46.8363 25.0885 47.4448 25.722 47.868 26.4865C48.2912 27.251 48.5142 28.1193 48.5142 29.0033C48.5142 29.8874 48.2912 30.7557 47.868 31.5202C47.4448 32.2847 46.8363 32.9182 46.1043 33.3565Z" fill="#FAFAFA"/>
							</svg></a>
					</div>
					<div class="video-desc">
						<div
							class="box animate__animated"
							data-anim="fadeInRight"
							data-parent="2"
							data-delay="100">
							<h3>Selena Giri</h3>
							<p class="medium">CEO Chess.com</p>
						</div>
						<div
							class="box animate__animated"
							data-anim="fadeInRight"
							data-parent="2"
							data-delay="200">
							<h1 class="cost"><span class="regular">$</span>200,500</h1>
							<p class="medium">received to our clients</p>
						</div>
						<div
							class="box animate__animated"
							data-anim="fadeInRight"
							data-parent="2"
							data-delay="300">
							<div>
								<h1>4</h1>
								<h2 class="regular">months</h2>
							</div>
							<p class="medium">from call to receiving money</p>
						</div>
					</div>
				</div>
				<div class="row-two" :class="{'active': nextSlide}">
					<div class="video">
						<a>
							<img src="/img/reviews/review-two.png">
							<svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M46.1043 33.3565L8.18522 56.4315C4.9672 58.3877 0.837402 56.019 0.837402 52.0752V5.92522C0.837402 1.98772 4.96124 -0.387279 8.18522 1.57522L46.1043 24.6502C46.8363 25.0885 47.4448 25.722 47.868 26.4865C48.2912 27.251 48.5142 28.1193 48.5142 29.0033C48.5142 29.8874 48.2912 30.7557 47.868 31.5202C47.4448 32.2847 46.8363 32.9182 46.1043 33.3565Z" fill="#FAFAFA"/>
							</svg>
						</a>
					</div>
					<div class="video-desc">
						<div class="box">
							<h3>Tom Hardy</h3>
							<p class="medium">CEO Chess.com</p>
						</div>
						<div class="box">
							<h1 class="cost"><span class="regular">$</span>200,500</h1>
							<p class="mediium">received to our clients</p>
						</div>
						<div>
							<h1>4</h1>
							<h2 class="regular">months</h2>
						</div>
						<p class="medium">from call to receiving money</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeReviews',
	data() {
    return {
      nextSlide: false
    }
  }
}
</script>

<style lang="scss" scoped>
.client-review {
	padding-top: 80px;
	@media(min-width:992px) {
		padding-top: 160px;
  }
	.col-one {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		margin-bottom: 32px;
		.link {
			display: grid;
			justify-content: end;
			@media(min-width:992px) {
				grid-template-columns: repeat(4, 1fr);
  		}
			& div {
				grid-column: 2;
			}
		}
	}
	.col-two {
		display: flex;
		overflow: hidden;
		.row-one, .row-two {
			min-width: 345px;
			display: block;
			overflow: hidden;
			border-radius: 10px;
			margin-right: 32px;
			transform: translate3d(0%, 0px, 0px);
			transition: .4s;
			&.active {
				transform: translate3d(-109%, 0px, 0px);
				@media(min-width:576px) {
					transform: translate3d(-53%, 0px, 0px);
  			}
				@media(min-width:768px) {
					transform: translate3d(-97%, 0px, 0px);
  			}
				@media(min-width:992px) {
					transform: translate3d(-67%, 0px, 0px);
  			}
			}
			@media(min-width:768px) {
				min-width: 654px;
  		}
			@media(min-width:992px) {
				min-width: 1000px;
				display: flex;
  		}
			.video {
				position: relative;
				a svg {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				img {
					min-width: 311px;
					width: 100%;
					min-height: 218px;
					@media(min-width:768px) {
						min-width: 656px;
						min-height: 332px;
  				}
				}
			}
			.video-desc {
				color: var(--white);
				padding: 32px 63px 31px 32px;
				.box {
					display: block;
				}
				div {
					display: flex;
					align-items: end;
					@media(min-width:992px) {
						margin-top: 30px;
						&:first-child {
							margin-top: 0;
						}
  				}
					@media(min-width:1440px) {
						margin-top: 0;
  				}
					h1 {
						margin-top: 11px;
					}
					span {
						margin-right: 12px;
					}
					h2 {
						margin-left: 12px;
						@media(min-width:1440px) {
							margin-bottom: 8px;
  					}
					}
				}
			}
		}
		.row-one {background: var(--red);}
		.row-two{background: var(--blue);}
	}
}
</style>
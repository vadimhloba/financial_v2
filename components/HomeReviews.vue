<template>

	<section class="client-review">
		<div class="container">
			<div class="col-one">
				<h1>Client review</h1>
				<div class="link">
					<div>
						<a href="#" class="next-review">
							<p class="medium">Next review</p>
							<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/>
							</svg></a>
					</div>
				</div>
			</div>
			<div class="col-two">
				<div class="row-one">
					<div class="video">
						<img src="/img/reviews/review-one.png">
						<a><svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M46.1043 33.3565L8.18522 56.4315C4.9672 58.3877 0.837402 56.019 0.837402 52.0752V5.92522C0.837402 1.98772 4.96124 -0.387279 8.18522 1.57522L46.1043 24.6502C46.8363 25.0885 47.4448 25.722 47.868 26.4865C48.2912 27.251 48.5142 28.1193 48.5142 29.0033C48.5142 29.8874 48.2912 30.7557 47.868 31.5202C47.4448 32.2847 46.8363 32.9182 46.1043 33.3565Z" fill="#FAFAFA"/>
							</svg></a>
					</div>
					<div class="video-desc">
						<h3>Selena Giri</h3>
						<p class="medium">CEO Chess.com</p>
						<div>
							<h1><span class="regular">$</span>200,500</h1>
						</div>
						<p class="mediium">received to our clients</p>
						<div>
							<h1>4</h1>
							<h2 class="regular">months</h2>
						</div>
						<p class="medium">from call to receiving money</p>
					</div>
				</div>
				<div class="row-two">
					<div class="video">
						<img src="/img/reviews/review-two.png">
						<a><svg width="49" height="58" viewBox="0 0 49 58" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M46.1043 33.3565L8.18522 56.4315C4.9672 58.3877 0.837402 56.019 0.837402 52.0752V5.92522C0.837402 1.98772 4.96124 -0.387279 8.18522 1.57522L46.1043 24.6502C46.8363 25.0885 47.4448 25.722 47.868 26.4865C48.2912 27.251 48.5142 28.1193 48.5142 29.0033C48.5142 29.8874 48.2912 30.7557 47.868 31.5202C47.4448 32.2847 46.8363 32.9182 46.1043 33.3565Z" fill="#FAFAFA"/>
							</svg></a>
					</div>
					<div class="video-desc">
						<h3>Tom Hardy</h3>
						<p class="medium">CEO Chess.com</p>
						<div>
							<h2 class="regular">$</h2>
							<h1>200,500</h1>
						</div>
						<p class="mediium">received to our clients</p>
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
	name: 'HomeReviews'
}
</script>

<style lang="scss" scoped>
.client-review {
	padding-bottom: 160px;
	.col-one {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		margin-bottom: 32px;
		.link {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-content: end;
			& div {
				grid-column: 2;
				display: flex;
				align-items: center;
				a {
					color: var(--red);
					margin-right: 4px;
				}
			}
		}
	}
	.col-two {
		display: flex;
		overflow-x: auto;
		.row-one, .row-two {
			min-width: 1000px;
			display: flex;
			overflow: hidden;
			border-radius: 10px;
			margin-right: 32px;
			.video {
				position: relative;
				a {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				img {
					min-width: 656px;
					width: 100%;
					min-height: 332px;
				}
			}
			.video-desc {
				color: var(--white);
				padding: 32px 63px 31px 32px;
				div {
					display: flex;
					align-items: end;
					span {
						margin-right: 8px;
					}
					h2 {
						margin-bottom: 8px;
					}
					& h2:last-child {
						margin-left: 10px;
					}
				}
			}
		}
		.row-one {background: var(--red);}
		.row-two{background: var(--blue);}
	}
}
</style>
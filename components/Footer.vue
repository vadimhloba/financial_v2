<template>
  <footer class="footer">
    <div class="container">
      <h1>How to contact us?</h1>
			<div class="wrapper wrap">
      	<div class="col-one">
      	  <div class="row-one">
      	    <p class="medium">call us</p>
      	    <a class="regular" href="tel:18558559365">(855) 855-9365</a>
      	  </div>
      	  <div class="row-two">
      	    <p class="medium">write to us</p>
      	    <a class="regular" href="mailto:financialmatch123@gmail.comFacebook">financialmatch@gmail.comFacebook</a>
      	  </div>
				</div>
      	<div class="col-two">
					<div class="row-one">
						<div class="pic-one">
      	  	  <p class="medium">Facebook</p>
      	  	  <img src="~/static/img/icons/facebook-icon.svg">
      	  	</div>
      	  	<div class="pic-two">
      	  	  <p class="medium">LinkedIn</p>
      	  	  <img src="~/static/img/icons/linkedin-icon.svg">
      	  	</div>
					</div>
					<div class="row-three">
						<p class="medium">© Financial Match 2022 All rights reserved.</p>
      			<div class="links">
      			  <nuxt-link to="/terms-and-conditions" href="#" class="medium">Terms and Conditions</nuxt-link>
      			  <nuxt-link to="/privacy-policy" href="#" class="medium">Privacy policy</nuxt-link>
      			</div>
					</div>
				</div>
			</div>
			<div class="wrapper col-three">
				<p class="medium">© Financial Match 2022 All rights reserved.</p>
      	<div class="links">
      	  <nuxt-link to="/terms-and-conditions" href="#" class="medium">Terms and Conditions</nuxt-link>
      	  <nuxt-link to="/privacy-policy" href="#" class="medium">Privacy policy</nuxt-link>
      	</div>
			</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
	padding: 80px 0 32px;
	background-color: var(--green);
	h1, h2, h3, p, a {
		color: var(--white);
	}
	h1 {
		padding-bottom: 32px;
		border-bottom: 1px solid var(--grayish);
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media (min-width: 992px) {
			flex-direction: row;
		}
		&.wrap {
			margin: 32px 0 80px;
		}
		.col-one {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			@media (min-width: 992px) {
				flex-direction: row;
				align-items: center;
			}
			.row-one {
				margin-bottom: 32px;
				@media (min-width: 992px) {
					margin-right: 104px;
					margin-bottom: 0;
				}
			}
			p {
				margin-bottom: 4px;
				@media (min-width: 992px) {
					margin-bottom: 8px;
				}
			}
		}
		.col-two {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			margin-top: 32px;
			@media (min-width: 992px) {
				margin-top: 0;
				align-items: center;
			}
			.row-one {
				display: flex;
				align-items: center;
				order: 2;
				.pic-one, .pic-two {
					img {
						margin: 8px auto 0;
					}
				}
				.pic-one {
					margin-right: 16px;
					@media (min-width: 992px) {
						margin-right: 32px;
					}
				}
			}
			.row-three {
				display: flex;
				flex-direction: column;
				@media (min-width: 992px) {
					display: none;
				}
				& .links {
					display: flex;
					flex-direction: column;
					order: 1;
					& a:first-child {
						order: 1;
						margin-bottom: 16px;
					}
					& a:last-child {
						margin-bottom: 16px;
					}
				}
				& p {
					order: 2;
					width: 50cqmin;
				}
			}
		}
		&.col-three {
			display: none;
			@media (min-width: 992px) {
				display: flex;
			}
		}
		.links {
			a{
				text-decoration: underline;
			}
			& a:first-child {
				margin-right: 32px;
			}
			& a:active {
				text-decoration: none;
			}
		}
	}
}
</style>
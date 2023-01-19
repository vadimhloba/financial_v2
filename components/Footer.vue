<template>
  <footer class="footer">
    <div class="container">
      <h1>How to contact us?</h1>
			<div class="wrapper wrap">
      	<div class="col-one">
      	  <div class="row-one">
      	    <p class="medium">call us</p>
      	    <h2 class="regular">(855) 855-9365</h2>
      	  </div>
      	  <div class="row-two">
      	    <p class="medium">write to us</p>
      	    <h2 class="regular">financialmatch@gmail.comFacebook</h2>
      	  </div>
				</div>
      	<div class="col-two">
      	  <div class="row-one">
      	    <p class="medium">Facebook</p>
      	    <img src="~/static/img/icons/facebook-icon.svg">
      	  </div>
      	  <div class="row-two">
      	    <p class="medium">LinkedIn</p>
      	    <img src="~/static/img/icons/linkedin-icon.svg">
      	  </div>
				</div>
			</div>
			<div class="wrapper">
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
	h1, h2, p, a {
		color: var(--white);
	}
	h1 {
		padding-bottom: 32px;
		border-bottom: 1px solid var(--grayish);
	}
	.wrapper {
		display: flex;
		justify-content: space-between;
		&.wrap {
			margin: 32px 0 80px;
		}
		.col-one {
			display: flex;
			align-items: center;
			.row-one {
				margin-right: 104px;
			}
			p {
				margin-bottom: 8px;
			}
		}
		.col-two {
			display: flex;
			align-items: center;
			.row-one, .row-two {
				img {
					margin: 8px auto 0;
				}
			}
			.row-one {
				margin-right: 32px;
			}
		}
		.links {
			& a:first-child {
				margin-right: 32px;
			}
			& a:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>
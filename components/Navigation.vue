<template>
	
	<div class="tab-appear">

		<header class="header">
  	  <div class="container">
  	    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M25.162 4.66176L25.9991 0.0519201C26.0046 0.0243031 25.9838 0 25.9564 0H1.90438C1.88359 0 1.86499 0.0154656 1.86171 0.0364545L0.0409225 10.6447C-0.249046 12.3338 1.03885 13.8781 2.73599 13.8781H6.43008L7.7322 6.92636H22.4714C23.7921 6.92636 24.9235 5.97412 25.162 4.66287V4.66176Z" fill="#FAFAFA"/>
					<path d="M6.38071 13.8214L4.1868 26.7738C3.9012 28.4607 5.18801 30.0006 6.88296 30.0006H10.5475C10.5683 30.0006 10.5869 29.9851 10.5902 29.9641L12.2446 20.7456H20.1996C21.5203 20.7456 22.6518 19.7933 22.8903 18.4821L23.7274 13.8722C23.7329 13.8446 23.7121 13.8203 23.6847 13.8203H6.38071V13.8214Z" fill="#FAFAFA"/>
				</svg>
			</div>
		</header>

			<nav class="nav">
				<div class="container">
					<div class="nav__links">
  	    		<nuxt-link to="/about-us" class="big">About us</nuxt-link>
						<nuxt-link to="/erc" class="big">ERC</nuxt-link>
  	    		<a class="lang big">
  	    		  Eng
							<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.35124 5.72652L0.215046 1.32977C-0.273086 0.812461 0.123629 2.94912e-07 0.864453 2.94912e-07H9.13683C9.30263 -0.000131902 9.46495 0.0441823 9.60437 0.127636C9.74378 0.211091 9.85437 0.330147 9.92289 0.470548C9.99142 0.610949 10.015 0.766743 9.99074 0.919273C9.9665 1.0718 9.8955 1.2146 9.78624 1.33057L5.65005 5.72572C5.5691 5.81187 5.46927 5.88091 5.35726 5.92822C5.24526 5.97552 5.12366 6 5.00064 6C4.87763 6 4.75603 5.97552 4.64402 5.92822C4.53202 5.88091 4.43219 5.81187 4.35124 5.72572V5.72652Z" fill="#FAFAFA"/>
							</svg>
  	    		</a>
						<a class="big" href="tel:18558559365">(855) 855-9365</a>
					</div>
					<div class="nav__desc">
						<div class="col-one">
							<p class="medium">© Financial Match 2022 All rights reserved.</p>
      				<div class="links">
      				  <nuxt-link to="/privacy-policy" href="#" class="medium">Privacy policy</nuxt-link>
      				</div>
						</div>
						<div class="col-two">
							<div class="pic-one">
      	  		  <p class="medium">Facebook</p>
      	  		  <img src="~/static/img/icons/facebook-icon.svg">
      	  		</div>
      	  		<div class="pic-two">
      	  		  <p class="medium">LinkedIn</p>
      	  		  <img src="~/static/img/icons/linkedin-icon.svg">
      	  		</div>
						</div>
					</div>
				</div>
			</nav>

	</div>

</template>

<style lang="scss" scoped>
.tab-appear{
  position: fixed;
  z-index: 99;
  left: 0; right: 0; top: 0; bottom: 0;
  background: var(--lightgreen);
  @media(min-width:768px){
    display: none;
  }
	.container {
		position: relative;
	}
	header {
		padding: 32px 0;
	}
	.nav {
		padding: 57px 0 128px;
		a, p {
			color: var(--white);
		}
		&__links {
			display: flex;
			flex-direction: column;
			a {
				margin-bottom: 48px;
			}
			.lang {
				display: flex;
				svg {
					margin-left: 4px;
				}
			}
		}
		&__desc {
			display: flex;
    	align-items: flex-start;
    	justify-content: space-between;
			.col-one {
				width: calc(50% - 16px);
				.links {
					margin-top: 16px;
				}
			}
			.col-two {
				display: flex;
				width: calc(50% - 39px);
				.pic-one, .pic-two {
					img {
						margin: 8px auto 0;
					}
				}
				.pic-one {
					margin-right: 16px;
				}
			}
		}
	}
}
</style>
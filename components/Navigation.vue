<template>
	
	<div class="tab-appear">

		<header class="header">

  	    <svg class="header--logo" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M25.162 4.66176L25.9991 0.0519201C26.0046 0.0243031 25.9838 0 25.9564 0H1.90438C1.88359 0 1.86499 0.0154656 1.86171 0.0364545L0.0409225 10.6447C-0.249046 12.3338 1.03885 13.8781 2.73599 13.8781H6.43008L7.7322 6.92636H22.4714C23.7921 6.92636 24.9235 5.97412 25.162 4.66287V4.66176Z" fill="#FAFAFA"/>
					<path d="M6.38071 13.8214L4.1868 26.7738C3.9012 28.4607 5.18801 30.0006 6.88296 30.0006H10.5475C10.5683 30.0006 10.5869 29.9851 10.5902 29.9641L12.2446 20.7456H20.1996C21.5203 20.7456 22.6518 19.7933 22.8903 18.4821L23.7274 13.8722C23.7329 13.8446 23.7121 13.8203 23.6847 13.8203H6.38071V13.8214Z" fill="#FAFAFA"/>
				</svg>

				<button class="header--btn" @click.prevent="$store.commit('setNavigation', false)">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_42_3815)">
						<path d="M28.6668 19.333L19.3335 28.6663M19.3335 19.333L28.6668 28.6663" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
						<rect x="1" y="1" width="46" height="46" rx="23" stroke="#FAFAFA" stroke-width="2"/>
						<defs>
						<clipPath id="clip0_42_3815">
						<rect width="16" height="16" fill="white" transform="translate(16 16)"/>
						</clipPath>
						</defs>
					</svg>
				</button>

		</header>

			<nav class="nav">
				<div class="nav__links">
					<nuxt-link to="/" class="big">Home</nuxt-link>
  	    	<nuxt-link to="/about-us" class="big">About us</nuxt-link>
					<nuxt-link to="/erc" class="big">ERC</nuxt-link>
					<a class="big" href="tel:18558559365">(855) 855-9365</a>
				</div>
			</nav>

			<div class="nav__desc">
				<div class="col-one">
					<p class="medium">© Financial Match 2022 All rights reserved.</p>
      		<div class="links">
      		  <nuxt-link to="/privacy-policy" href="#" class="medium">Privacy policy</nuxt-link>
						<nuxt-link to="/terms-conditions" href="#" class="medium">Terms Conditions</nuxt-link>
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

</template>

<style lang="scss" scoped>
.tab-appear{
  position: fixed;
  z-index: 99;
  left: 0; right: 0; top: 0; bottom: 0;
  background: var(--green);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px;
  @media(min-width:768px){
    display: none;
  }
	.container {
		position: relative;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav {
		a, p {
			color: var(--white);
		}
		&__links {
			display: flex;
			flex-direction: column;
			a {
				margin-bottom: 48px;
				&:last-child {
					margin-bottom: 0;
				}
			}
			.lang {
				display: flex;
				svg {
					margin-left: 4px;
				}
			}
		}
	}
	.nav__desc {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		a, p {
			color: var(--white);
		}
		.col-one {
			width: calc(50% - 16px);
			.links {
				margin-top: 16px;
				display: flex;
				flex-direction: column;
				a {
					margin-top: 8px;
					text-decoration: underline var(--white);
					&:hover {
						text-decoration: none;
					}
				}
			}
		}
		.col-two {
			display: flex;
			max-width: calc(50% - 35px);
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
</style>
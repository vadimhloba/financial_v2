<template>

  <header class="header">
    <div class="container">
      <img class="header__logo" src="/img/logo.svg">

			<div class="header__column">
				<button class="header__btn" @click.prevent="mobileNav = mobileNav ? false : true">
					<svg v-if="!mobileNav" class="header__btn-open" width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="24" height="2" rx="1" fill="#0E0E11"/>
						<rect y="4" width="24" height="2" rx="1" fill="#0E0E11"/>
						<rect y="8" width="16" height="2" rx="1" fill="#0E0E11"/>
					</svg>
					<svg v-else class="header__btn-close" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
				<div class="header__links">
					<nuxt-link v-if="$route.name !== 'index'" to="/" class="medium">Home</nuxt-link>
					<nuxt-link v-if="$route.name !== 'about-us'" to="/about-us" class="medium">About us</nuxt-link>
					<nuxt-link v-if="$route.name !== 'erc'" to="/erc" class="medium">ERC</nuxt-link>
        	<a class="header__lang medium">
        	  Eng
        	  <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        	    <path d="M4.35124 13.7265L0.215046 9.32977C-0.273086 8.81246 0.123629 8 0.864453 8H9.13683C9.30263 7.99987 9.46495 8.04418 9.60437 8.12764C9.74378 8.21109 9.85437 8.33015 9.92289 8.47055C9.99142 8.61095 10.015 8.76674 9.99074 8.91927C9.9665 9.0718 9.8955 9.2146 9.78624 9.33057L5.65005 13.7257C5.5691 13.8119 5.46927 13.8809 5.35726 13.9282C5.24526 13.9755 5.12366 14 5.00064 14C4.87763 14 4.75603 13.9755 4.64402 13.9282C4.53202 13.8809 4.43219 13.8119 4.35124 13.7257V13.7265Z" fill="#0E0E11"/>
        	  </svg>
        	</a>
				</div>
      </div>
      <a class="header__number" href="tel:18558559365">(855) 855-9365</a>
    </div>

    <Navigation v-if="mobileNav" />
  </header>

</template>

<script scoped>
export default {
	data() {
    return {
      mobileNav: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 32px 16px 16px 0;
	@media (min-width: 992px) {
		padding: 32px 0;
	}
  .container {
		position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	&__logo {
		order: -2;
		@media (min-width: 768px) {
			order: 0;
		}
	}
	&__btn {
		display: block;
    position: absolute;
    z-index: 100;
    right: 0; top: 50%;
    transform: translateY(-50%);
		@media (min-width: 768px) {
			display: none;
		}
    *{
      pointer-events: none;
    }
	}
  &__links {
		position: relative;
    display: none;
    align-items: center;
		@media (min-width: 768px) {
			display: flex;
		}
    a {
    margin-right: 32px;
		@media (min-width: 992px) {
			margin-right: 64px;
		}
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &__lang {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    svg {
      margin-left: 4px;
    }
  }
	&__number {
		order: -1;
		@media (min-width: 768px) {
			order: 0;
		}
	}
}
</style>
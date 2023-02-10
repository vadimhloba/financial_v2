<template>

  <header class="header">
    <div class="container">
      <img class="header__logo" src="/img/logo.svg">

			<div class="header__column">
				<button class="header__btn" @click.prevent="$store.commit('setNavigation', true)">
					<svg class="header__btn-open" width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="24" height="2" rx="1" fill="#0E0E11"/>
						<rect y="4" width="24" height="2" rx="1" fill="#0E0E11"/>
						<rect y="8" width="16" height="2" rx="1" fill="#0E0E11"/>
					</svg>
				</button>
				<div class="header__links">
					<nuxt-link v-if="$route.name !== 'index'" to="/" class="medium">Home</nuxt-link>
					<nuxt-link to="/about-us" class="medium">About us</nuxt-link>
					<nuxt-link to="/erc" class="medium">ERC</nuxt-link>
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
    z-index: 2;
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
	&__number {
		order: -1;
		@media (min-width: 768px) {
			order: 0;
		}
	}
}
</style>
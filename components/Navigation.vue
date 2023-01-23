<template>

  	<nav class="navigation">
  	  <div class="container">
				<svg class="navigation__logo" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M25.162 4.66176L25.9991 0.0519201C26.0046 0.0243031 25.9838 0 25.9564 0H1.90438C1.88359 0 1.86499 0.0154656 1.86171 0.0364545L0.0409225 10.6447C-0.249046 12.3338 1.03885 13.8781 2.73599 13.8781H6.43008L7.7322 6.92636H22.4714C23.7921 6.92636 24.9235 5.97412 25.162 4.66287V4.66176Z" fill="#FAFAFA"/>
					<path d="M6.38071 13.8214L4.1868 26.7738C3.9012 28.4607 5.18801 30.0006 6.88296 30.0006H10.5475C10.5683 30.0006 10.5869 29.9851 10.5902 29.9641L12.2446 20.7456H20.1996C21.5203 20.7456 22.6518 19.7933 22.8903 18.4821L23.7274 13.8722C23.7329 13.8446 23.7121 13.8203 23.6847 13.8203H6.38071V13.8214Z" fill="#FAFAFA"/>
				</svg>
				<div class="nav__links">
  	    	<nuxt-link to="/about-us" class="medium">About us</nuxt-link>
					<nuxt-link to="/erc" class="medium">ERC</nuxt-link>
  	    	<a class="header__lang medium">
  	    	  Eng
  	    	  <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  	    	    <path d="M4.35124 13.7265L0.215046 9.32977C-0.273086 8.81246 0.123629 8 0.864453 8H9.13683C9.30263 7.99987 9.46495 8.04418 9.60437 8.12764C9.74378 8.21109 9.85437 8.33015 9.92289 8.47055C9.99142 8.61095 10.015 8.76674 9.99074 8.91927C9.9665 9.0718 9.8955 9.2146 9.78624 9.33057L5.65005 13.7257C5.5691 13.8119 5.46927 13.8809 5.35726 13.9282C5.24526 13.9755 5.12366 14 5.00064 14C4.87763 14 4.75603 13.9755 4.64402 13.9282C4.53202 13.8809 4.43219 13.8119 4.35124 13.7257V13.7265Z" fill="#0E0E11"/>
  	    	  </svg>
  	    	</a>
				</div>
  	  </div>
  	</nav>

</template>

<style lang="scss" scoped>
.navigation{
  position: fixed;
  z-index: 99;
  left: 0; right: 0; top: 0; bottom: 0;
  background: var(--lightgreen);
  @media(min-width:768px){
    display: none;
  }
	&__logo {
		padding: 25px 16px;
	}
}
</style>
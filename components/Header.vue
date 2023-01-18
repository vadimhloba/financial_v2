<template>
  <header class="header">
    <div class="container">
      <img class="header__logo-desc" src="/img/logo.svg">
      <div class="header__links">
        <nuxt-link to="/about-us" class="medium">About us</nuxt-link>
        <nuxt-link to="/erc" class="medium">ERC</nuxt-link>
        <a class="header__lang medium">
          Eng
          <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.35124 13.7265L0.215046 9.32977C-0.273086 8.81246 0.123629 8 0.864453 8H9.13683C9.30263 7.99987 9.46495 8.04418 9.60437 8.12764C9.74378 8.21109 9.85437 8.33015 9.92289 8.47055C9.99142 8.61095 10.015 8.76674 9.99074 8.91927C9.9665 9.0718 9.8955 9.2146 9.78624 9.33057L5.65005 13.7257C5.5691 13.8119 5.46927 13.8809 5.35726 13.9282C5.24526 13.9755 5.12366 14 5.00064 14C4.87763 14 4.75603 13.9755 4.64402 13.9282C4.53202 13.8809 4.43219 13.8119 4.35124 13.7257V13.7265Z" fill="#0E0E11"/>
          </svg>
        </a>
      </div>
      <p class="header__number" href="tel:18558559365">(855) 855-9365</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 32px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__links {
    display: flex;
    align-items: center;
    a {
    margin-right: 64px;
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
}
</style>
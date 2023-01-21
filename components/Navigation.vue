<template>
  <nav class="navigation">
    <div class="container">
      green mobile nav content
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
}
</style>
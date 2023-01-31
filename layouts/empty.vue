<template>
  <main>
    <errorPage/>
  </main>
</template>

<script>
import errorPage from '@/pages/404.vue'

export default{
	name: 'empty',
	components: {errorPage},
}
</script>
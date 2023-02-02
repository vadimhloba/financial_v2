<template>

	<div class="thanks">
    <h1>Thank you, we will contact you shortly</h1>
    <button
			@click="'/'"
			class="link">
			<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
			</svg>
			<p>Back to the main page</p>
		</button>
  </div>

</template>

<script scoped>
export default {
	name: 'Thanks'
}
</script>
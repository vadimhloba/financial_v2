<template>

	<div class="thanks">
		<div class="thanks--inner">

			<button @click="$store.commit('setThanks', false)" class="thanks--close">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_31_2381)">
						<path d="M28.6663 19.333L19.333 28.6663M19.333 19.333L28.6664 28.6663" stroke="#0E0E11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
					<rect x="1" y="1" width="46" height="46" rx="23" stroke="#0E0E11" stroke-width="2"></rect>
					<defs>
						<clipPath id="clip0_31_2381"><rect width="16" height="16" fill="white" transform="translate(16 16)"></rect>
						</clipPath>
					</defs>
				</svg>
			</button>

    	<h1>Thank you, we will contact you shortly</h1>
    	<button class="read-more" @click.prevent="$store.commit('setThanks', false)">
				<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
				</svg>
				<span class="medium">Back to the main page</span>
			</button>

		</div>
  </div>

</template>

<script scoped>
export default {
	name: 'Thanks'
}
</script>

<style lang="scss" scoped>
.thanks {
	position: fixed;
	z-index: 999;
	background: rgba(14,14,17,.7);
	top: 0; left: 0;
	width: calc(100vw - 32px);
	min-height: calc(100vh - 32px);
	overflow-y: auto;
	padding: 16px;
	@media (min-width: 992px) {
		padding: 50px;
		width: calc(100vw - 100px);
		min-height: calc(100vh - 200px);
	}
	&--inner {
		background: var(--whitish);
		border-radius: 12px;
		min-height: calc(100vh - 200px);
		max-width: 1340px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		padding: 85px 16px 32px;
	}
	&--close {
		svg {
			position: absolute;
			top: 24px;
			right: 24px;
		}
	}
	.read-more {
		svg {
			margin-right: 4px;
		}
	}
}
</style>
<template>

	<section class="done-for-you">
		<div class="container">
			<div class="col-one">
				<h1>The Done-For-You ERC Service</h1>
			</div>
			<div class="col-two">
				<div class="row-one">
					<h2 class="regular">We make <br> the complicated simple</h2>
				</div>
				<div class="row-two">
					<div>
						<h2 class="regular">ERC regulations</h2>
						<p class="medium">We make sure all numbers are accurate and fit within ERC regulations so you can “sleep well at night”</p>
					</div>
					<div>
						<h2 class="regular">Experts</h2>
						<p class="medium">Our ERC experts will take care of the paperwork so you can focus on running your business</p>
					</div>
					<div class="wrapper">
						<h2 class="regular">A licensed CPA</h2>
						<p class="medium">Each account is overseen by a licensed CPA</p>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'HomeDone'
}
</script>

<style lang="scss" scoped>
.done-for-you {
	padding-bottom: 160px;
	.col-one {
		border-bottom: 2px solid var(--grayish);
		h1 {
			max-width: 494px;
			width: 100%;
			margin-bottom: 40px;
		}
	}
	.col-two {
		margin-top: 40px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		.row-one {
			h2 {
				color: var(--gray);
				max-width: 249px;
				width: 100%;
			}
		}
		.row-two {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 32px;
			p {
				margin-top: 8px;
			}
		}
	}
}
</style>
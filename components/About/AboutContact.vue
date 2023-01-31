<template>

	<section class="contact-us">
		<div class="container">
			<h1>Contact us</h1>
			<div class="wrapper">
				<div class="col-one">
					<svg width="656" height="407" viewBox="0 0 656 407" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 393.03V13.9695C0 6.25438 6.25438 0 13.9695 0H364.919C368.175 0 371.329 1.13733 373.836 3.21549L505.277 112.193L524.467 63.2835H591.136V183.379L650.947 232.968C654.148 235.622 656 239.564 656 243.722V393.03C656 400.746 649.746 407 642.03 407H591.136V183.379L505.277 112.193L389.604 407H13.9695C6.25437 407 0 400.746 0 393.03Z" fill="#41A280"/>
						<rect
							data-anim="heightOut"
							data-duration="400"
							data-parent="4"
							width="505.28"
							height="407"
							fill="#F4EFE5"
							class="animate__animated"
							style="opacity: 1;"/>
						<rect
							data-anim="heightOut"
							data-delay="390"
							data-duration="300"
							data-parent="4"
							x="505"
							y="63"
							width="88"
							height="120.35"
							fill="#F4EFE5"
							class="animate__animated"
							style="opacity: 1;"/>
						<rect
							data-anim="heightOut"
							data-delay="680"
							data-duration="300"
							data-parent="4"
							x="591"
							y="183.3" 
							width="65"
							height="224"
							fill="#F4EFE5"
							class="animate__animated"
							style="opacity: 1;"/>
						<defs>
							<clipPath id="clip0_248_2502">
								<rect width="656" height="407" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				</div>	
				<form class="col-two">
					<div class="contuctus-field">
						<input
							v-model="form.name"
							type="text"
							id="name"
							required>
						<label
							class="not-empty"
							for="name">Name</label>
					</div>
					<div class="contuctus-field">
						<input
							v-model="form.company"
							type="text"
							id="company"
							required>
						<label
							class="not-empty"
							for="company">Company name</label>
					</div>
					<div class="contuctus-field">
						<input
							v-model="form.email"
							type="text"
							id="email"
							required>
						<label
							class="not-empty"
							for="email">Email</label>
					</div>
					<div class="contuctus-field">
						<input
							v-model="form.phone"
							type="text"
							id="phone"
							required>
						<label
							class="not-empty"
							for="phone">Phone</label>
					</div>
					<input
						class="green-contact"
						type="submit"
						value="Send"
						:disabled="!valid">
				</form>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'AboutContact',
	data() {
		return {
			form: {
        name: '',
        company: '',
        email: '',
        phone: '',
      }
		}
	},
	method: {
		checkEmpty(e){
		  if(e.target.value.length > 0){
		    e.target.classList.add('not-empty')
		  } else {
		    e.target.classList.remove('not-empty')
		  }

			if(this.form.name.length > 1 && this.form.company.length > 1 && this.form.phone.length > 8){
				this.valid = true
			} else {
				this.valid = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.contact-us {
	padding-top: 80px;
	@media (min-width: 992px) {
		padding-top: 160px;
	}
	h1 {
		margin-bottom: 32px;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		@media (min-width: 992px) {
			flex-direction: row;
		}
		.col-one {
			width: 100%;
			@media (min-width: 992px) {
				width: calc((100% / 2) - 16px);
				margin-right: 32px;
			}
		}
		.col-two {
			width: 100%;
			@media (min-width: 992px) {
				width: calc((100% / 2) - 16px);
			}
			.contuctus-field {
				position: relative;
				height: 60px;
				display: flex;
				align-items: flex-end;
				padding-bottom: 1px;
				input[type=text] {
					font-weight: 600;
					font-size: 20px;
					line-height: 140%;
					display: block;
					width: 100%;
					background: none;
					border: none;
					border-bottom: 1px solid var(--gray);
					height: 36px;
					padding: 0;
					outline: none;
				}
				.not-empty {
					font-weight: 400;
					line-height: 140%;
					font-size: 16px;
					position: absolute;
					left: 0;
					transition: .2s ease;
					pointer-events: none;
				}
				input:focus + .not-empty, input:valid + .not-empty {
  				color: var(--gray);
  				transform: translateY(-30px);
					line-height: 120%;
					font-size: 14px;
				}
			}
			input[type=submit] {
				margin-top: 62px;
				width: 100%;
				@media (min-width: 992px) {
					width: 186px;
				}
			}
		}
	}
}
</style>
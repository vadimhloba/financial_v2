<template>

	<div class="quiz">
		<div class="quiz--inner">

			<button class="quiz--back read-more" v-if="step !== 1" @click.prevent="stepBack">
				<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
				</svg>
				<span class="medium">Back</span>
			</button>

			<div v-if="quiz.step = 1" class="quiz--slider">
				<div class="tab-move" :style="`width: ${counterLoad}%;`"></div>
			</div>

			<button @click="$store.commit('setQuiz', false)" class="quiz--close">
				<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="quiz--close">
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

			<div v-if="quiz.step = 1" class="quiz--item">

				<form
					v-if="step === 'form'"
					@submit.prevent="submitForm"
					class="quiz--form">
					<h2>Enter info below to get your results</h2>
					<div class="field">
						<input
							v-model="form.name"
							type="text"
							id="name"
							required>
						<label
							class="not-empty"
							for="name">
							Name
						</label>
					</div>
					<div class="field">
						<input
							v-model="form.company"
							type="text"
							id="company"
							required>
						<label
							class="not-empty"
							for="company">
							Company name
						</label>
					</div>
					<div class="field">
						<input
							v-model="form.email"
							type="text"
							id="email"
							required>
						<label
							class="not-empty"
							for="email">
							Email
						</label>
					</div>
					<div class="field">
						<input
							v-model="form.phone"
							type="text"
							id="phone"
							required>
						<label
							class="not-empty"
							for="phone">
							Phone
						</label>
					</div>
					<div class="field">
						<input class="green-contact" type="submit" value="Submit">
					</div>
					<div class="field">
						<p class="small">By clicking “Submit,” I am providing my prior express written consent to be contacted at the above telephone number with offers and marketing communications from Financial Match [if applicable, “and affiliated tax professionals”] via automated telephone dialing and texting systems and artificial or pre-recorded voice (including SMS and MMS) and/or email, even if the telephone number above is on a corporate, state or national Do Not Call list. Consent is not required as a condition to purchase any goods or services.</p>
					</div>
				</form>

				<div class="quiz--not" v-else-if="step === 'not'">
					<h2>You Do Not Qualify for ERC</h2>
					<p class="medium">Unfortunately, based on your answers it appears we can not help you at this time</p>
					<button class="read-more" @click.prevent="$store.commit('setQuiz', false)">
						<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
						</svg>
						<span class="medium">Back to the main page</span>
					</button>
				</div>

				<div class="default-q" v-else>
					<h2 v-html="quiz[step].question"></h2>
					<p v-html="quiz[step].desription" class="medium"></p>
					<p v-html="quiz[step].finishdesc"></p>
					<div class="user-choose">
						<div class="choose-number" v-if="quiz[step].options === 'number'">
							<input v-model="quiz[step].answer" id="number" type="number" min="2" step="1" max="100">
							<label class="not-empty" for="number">number of employees</label>
							<button @click="answer(quiz[step])" class="green-contact">Next</button>
						</div>
						<div v-else>
							<button
								v-for="(item, index) in Object.keys(quiz[step].options)"
								@click="answer(item)"
								:key="`button_${index}`"
								class="lightgreen">
								{{ item }}
							</button>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>

</template>

<script scoped>
export default {
	name: 'Quiz',
	data() {
		return {
			valid: false,
			thanks: false,
			step: 1,
			stepPrev: [],
			form: {
        name: '',
        company: '',
        email: '',
        phone: '',
			},
			quiz: {
				1: {
					question: 'I had W2 Employees in 2020 or 2021',
					desription: 'Please Select One',
					options: {
						'Yes': 2,
						'No': 'not',
					},
					answer: null
				},
				2: {
					question: 'How Many W2 EmployeesDo You Have?',
					post: 'number of employees',
					options: 'number',
					answer: 2
				},
				3: {
					question: 'Did You Experience a Supply Chain Disruptionin 2020 or 2021?',
					options: {
						'Yes': 4,
						'No': 6,
					},
					answer: null
				},
				4: {
					question: 'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
					options: {
						'Yes': 6,
						'No': 'form',
					},
					answer: null
				},
				5: {
					question: 'Are you the owner or decision maker for this business?',
					options: {
						'Yes': 6,
						'No': 'not',
					},
					answer: null
				},
				6: {
					question: 'Did You Receive PPP Money?',
					options: {
						'Yes': 'form',
						'No': 'form',
					},
					answer: null
				}
			}
		}
	},
	computed: {
    counterLoad() {
			if(this.step === 'not'){
				return this.counterLoad = 0
			} else if(this.step === 'form') {
				return this.counterLoad = 100
			} else {
				return (this.step / Object.keys(this.quiz).length) * 100;
			}
    },
  },
	methods: {
		answer(a){
			this.quiz[this.step].answer = a
			this.stepPrev.push(this.step)
			this.step = this.step === 2 ? 3 : this.quiz[this.step].options[a]
		},
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
		},
		submitForm(e){
			e.preventDefault()
			const formData = this.form
			formData.quiz = this.quiz
			this.$store.commit('setQuiz', false)
			this.$store.commit('setThanks', true)
		},
		stepBack(){
			this.step = this.stepPrev[this.stepPrev.length - 1]
			this.stepPrev.pop()
		}
	}
}
</script>

<style lang="scss" scoped>
.quiz {
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
	&--back {
		position: absolute;
		display: flex;
		align-items: center;
		top: 34px;
		left: 24px;
		& svg {
			margin-right: 4px;
		}
	}
	&--close {
		svg {
			position: absolute;
			top: 24px;
			right: 24px;
		}
	}
	&--slider {
		position: absolute;
		top: 40px;
		left: 27%;
		transform: translateY(-27%);
		border-radius: 20px;
		background: var(--grayish);
		max-width: 638px;
		width: 100%;
		height: 5px;
		overflow: hidden;
		.tab-move {
			position: absolute;
			background: var(--lightgreen);
			height: 5px;
			max-width: 100%;
			transition: width .3s ease;
		}
	}
	&--item {
		.default-q {
			text-align: center;
			h2 {
				max-width: 638px;
			}
			p {
				margin-top: 16px;
			}
			.user-choose {
				display: flex;
				margin-top: 40px;
				justify-content: center;
				button:first-child {
					margin-right: 32px;
				}
				.choose-number {
					display: flex;
					flex-direction: column;
					max-width: 332px;
					width: 100%;
					input {
						position: relative;
						margin-bottom: 22px;
						background: none;
						border: 0;
						padding-top: 4px;
						padding-bottom: 4px;
						font-weight: 600;
						font-size: 20px;
						line-height: 140%;
						border-bottom: 1px solid var(--gray);
						outline: none;
					}
					label {
						position: absolute;
						transform: translateY(-16px);
						pointer-events: none;
					}
					button {
						width: 100%;
					}
				}
			}
		}
	}
	&--form {
		h2 {
			margin-bottom: 40px;
		}
		.field {
			display: flex;
			max-width: 332px;
			width: 100%;
			margin: 0 auto;
			input[type=text] {
				position: relative;
				font-weight: 600;
				font-size: 20px;
				line-height: 140%;
				width: 100%;
				background: none;
				border: 0;
				border-bottom: 1px solid var(--gray);
				padding-bottom: 4px;
				margin-bottom: 62px;
				outline: none;
				&:last-child {
					margin-bottom: 0;
				}
			}
			input:focus + label, input:valid + label {
  			color: var(--gray);
  			transform: translateY(-16px);
				line-height: 120%;
				font-size: 14px;
			}
			input[type=submit] {
				margin: 0 auto;
				width: 100%;
			}
			label {
				position: absolute;
				transform: translateY(10px);
				font-weight: 400;
				font-size: 16px;
				line-height: 140%;
				transition: .2s ease;
				pointer-events: none;
			}
			p {
				margin-top: 48px;
			}
		}
	}
	&--not {
		h2 {
			max-width: 410px;
			margin: 0 auto;
			margin-bottom: 16px;
		}
		button {
			margin: 0 auto;
			margin-top: 40px;
			svg {
				margin-right: 4px; 
			}
		}
	}
}
</style>
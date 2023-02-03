<template>

	<div class="quiz">
		<div class="quiz--inner">

			<button class="quiz--back read-more">
				<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
				</svg>
				<p class="medium">Back</p>
			</button>

			<div class="quiz--slider">
				<div class="tab-move" :style="`width: ${step * (100 / quiz.length)}%;`"></div>
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

			<Thanks v-if="quiz.length === step"/>

			<div v-else class="quiz--item">

				<form
					v-if="step === 'form'"
					@submit.prevent="answer(quiz[step].answer)"
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
						<input type="submit">
					</div>
				</form>

				<div v-else-if="step === 'not'">
					<h2>You Do Not Qualify for ERC</h2>
					<p class="medium">Unfortunately, based on your answers it appears we can not help you at this time</p>
					<button class="link">
						<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65686 11.6567L1.41422 7.4141L6.19888e-06 5.99988L1.41422 4.58567L5.65686 0.34303L7.07107 1.75724L3.67696 5.15136L9.8995 4.58567L9.8995 7.4141L3.67696 6.84841L7.07107 10.2425L5.65686 11.6567Z" fill="#41A280"/>
						</svg>
						<p>Back to the main page</p>
					</button>
				</div>

				<div class="default-q" v-else>
					<h2 v-html="quiz[step].question"></h2>
					<p v-html="quiz[step].desription" class="medium"></p>
					<input v-if="quiz[step].options === 'Next'" type="number" min="2" step="1" max="1000000">
					<p v-html="quiz[step].finishdesc"></p>
					<div class="user-choose">
						<button
							v-for="(item, index) in quiz[step].options"
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

</template>

<script scoped>
export default {
	name: 'Quiz',
	data() {
		return {
			valid: false,
			step: 1,
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
					options: ['Yes', 'No'],
					next: {
						'Yes': 2,
						'No': 'not',
					},
					answer: null
				},
				2: {
					question: 'How Many W2 EmployeesDo You Have?',
					post: 'number of employees',
					options: ['Next'],
					answer: 2
				},
				3: {
					question: 'Did You Experience a Supply Chain Disruptionin 2020 or 2021?',
					options: ['Yes', 'No'],
					next: {
						'Yes': 4,
						'No': 5,
					},
					answer: null
				},
				4: {
					question: 'Did You Receive PPP Money?',
					options: ['Yes', 'No'],
					next: {
						'Yes': 'form',
						'No': 'form',
					},
					answer: null
				},
				5: {
					question: 'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
					options: ['Yes', 'No'],
					next: {
						'Yes': 6,
						'No': 'form',
					},
					answer: null
				},
				6: {
					question: 'Are you the owner or decision maker for this business?',
					options: ['Yes', 'No'],
					next: {
						'Yes': 4,
						'No': 'not',
					},
					answer: null
				}
			}
		}
	},
	methods: {
		answer(a){
			this.quiz[this.step].answer = a
			this.step = this.step + 1
			localStorage.step = this.step
			localStorage.quiz = JSON.stringify(this.quiz)
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
			}
		}
	}
}
</style>
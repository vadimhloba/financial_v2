<template>

	<section class="faq">
		<div class="container">
			<h1>Frequently Asked Questions</h1>
			<div class="column">
				<svg width="656" height="557" viewBox="0 0 656 557" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.00264e-05 492.874L0 68.9191C0 61.5628 5.96347 55.5993 13.3198 55.5993H60.3071L249.471 471.455L344 446.098V0H642.68C650.036 0 656 5.96346 656 13.3198V352.185C656 358.212 651.953 363.488 646.131 365.05L344 446.098V557H288.383L249.471 471.455L121.668 505.739C120.543 506.041 119.382 506.194 118.217 506.194H13.3198C5.9635 506.194 2.03633e-05 500.23 2.00264e-05 492.874Z" fill="#1D3C86"/>
					<rect
						class="animate__animated"
						data-parent="2"
						data-anim="heightOut"
						data-duration="400"
						style="opacity: 1"
						y="55"
						width="249.47"
						height="452"
						fill="#F4EFE5"/>
					<rect
						class="animate__animated"
						data-parent="2"
						data-anim="heightOut"
						data-delay="390"
						data-duration="300"
						style="opacity: 1"
						x="249.4"
						y="446"
						width="94.6"
						height="111"
						fill="#F4EFE5"/>
					<rect
						class="animate__animated"
						data-parent="2"
						data-anim="heightOut"
						data-delay="680"
						data-duration="300"
						style="opacity: 1"
						x="344"
						width="312"
						height="446.1"
						fill="#F4EFE5"/>
					<defs>
						<clipPath id="clip0_213_2517">
							<rect width="656" height="557" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>
				<div class="col-desc">
					<div class="links">
						<a @click="showDiv1 = true; showDiv2 = false" :class="{'active': showDiv1}">Qualification</a>
						<a @click="showDiv1 = false; showDiv2 = true" :class="{'active': showDiv2}">Tax Credit</a>
					</div>
					<div
						v-if="showDiv1"
						class="tab-appear qual">
						<div
							@click="clickEl"
							class="post">
							<h3 class="btn-tab">Can I qualify if I'm a 1099 contractor?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Unfortunately no. This program is only for companies who paid W2 wages to non-owners</p>
							</div>
						</div>
						<div
							@click="clickEl"
							class="post">
							<h3 class="btn-tab">Can I qualify if I don't have any W2 employees?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Unfortunately, no. This program is only for companies who paid W2 wages to non-owners.</p>
							</div>
						</div>
						<div
							@click="clickEl"
							class="post">
							<h3 class="btn-tab">Can I qualify for ERC when I got a PPP loan?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Yes! There are multiple quarters you can qualify for, even if you got a PP loan. Unfortunately, you can't use the same covered time period that you used for PPP, which may reduce your overall ERC amount, but you can still absolutely qualify for ERC credits.</p>
							</div>
						</div>
						<div
							@click="clickEl"
							class="post">
							<h3 class="btn-tab">What if my revenue went up in 2020 or 2021? Can I still qualify?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Absolutely! It's called the “Employee Retention” credit, not the “Revenue Reduction” credit. It is intended to help out the businesses that kept people employed during the height of the pandemic. This means you can qualify even if your revenue increased. You'll need to qualify using one of the other qualification checks - either shutdowns/mandates or supply chain disruptions.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(5)"
							:class="{'active': isActive(5)}"
							class="post">
							<h3 class="btn-tab">How long is the ERC program open for?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									For most businesses, this program will be open into 2024 (unless Congress changes the rules again). It is open as long as you can file amended 941-X returns, which is the latest of 3 years from the date you filed your original return, or 2 years from the date you paid the payroll tax.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(6)"
							:class="{'active': isActive(6)}"
							class="post">
							<h3 class="btn-tab">What if I have bad credit? Is there a credit check involved?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Doesn't matter! This is not a loan, it's a tax credit. There are no credit checks, collateral, or personal guarantees required.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(7)"
							:class="{'active': isActive(7)}"
							class="post">
							<h3 class="btn-tab">Can I qualify for ERC if my business is now closed</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Yes, there is a possibility. It will depend upon when your business closed, so contact Financial Match today and let us walk you through the process.</p>
							</div>
						</div>
					</div>
					<div
						v-if="showDiv2"
						class="tab-appear">
						<div
							@click="toggleDiv(8)"
							:class="{'active': isActive(8)}"
							class="post">
							<h3 class="btn-tab">What documents do I need to send you?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									The complete your tax credit, we'll work with you and your CPA to get the following documents:<br>
									Payroll Journals outlining all payments, deductions, contributions, and taxes for each employee, for each paycheck, during your ERC eligibility period.<br>
									Filed 941, 943, or 944 payroll reports.<br>
									Profit and Loss Statements (P&L's) for 2020 and 2021<br>
									Tax returns for 2020 and 2021<br>
									PPP Loan Forgiveness Application (if applicable)</p>
							</div>
						</div>
						<div
							@click="toggleDiv(9)"
							:class="{'active': isActive(9)}"
							class="post">
							<h3 class="btn-tab">Do I need to repay the tax credit?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Nope! There is nothing to repay with a tax credit. THIS IS NOT A LOAN.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(10)"
							:class="{'active': isActive(10)}"
							class="post">
							<h3 class="btn-tab">How long will it take to get my credit?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									We are generally telling clients between 7-9 months. We take a few weeks to do the work, and the IRS is taking a wide range of times to process these applications. Mostly, we are seeing responses from the IRS in the 7-9 month range.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(11)"
							:class="{'active': isActive(11)}"
							class="post">
							<h3 class="btn-tab">When will the ERC funds run out?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									There are currently tens of billions available in the program, there is no time table on when funds will run out.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(12)"
							:class="{'active': isActive(12)}"
							class="post">
							<h3 class="btn-tab">What if I owe back taxes on my account with the IRS?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									If you owe back taxes on your account to the IRS, they will deduct the amount you owe from the credit amount. You will be paid the difference. But getting ERC could eliminate back taxes!</p>
							</div>
						</div>
						<div
							@click="toggleDiv(13)"
							:class="{'active': isActive(13)}"
							class="post">
							<h3 class="btn-tab">Is the ERC credit taxable?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									The ERC credit is not considered taxable income for federal tax purposes. However, it could impact your company's deductible wage expenses by the tax credit amount, which will most likely increase your net profit. That could impact what you pay in taxes. Please provide the credit to your CPA or tax preparer when you file.</p>
							</div>
						</div>
						<div
							@click="toggleDiv(14)"
							:class="{'active': isActive(14)}"
							class="post">
							<h3 class="btn-tab">Will I get in trouble with the IRS for filing?</h3>
							<div>
								<p
									class="medium animate__animated animate__fadeInUp">
									Absolutely not! The IRS created this program and doubled-down on making it easier and more lucrative for businesses, so they want owners like you to file and use it.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script scoped>
export default {
	name: 'Faq',
	data() {
		return {
			showDiv1: true,
			showDiv2: false,
			activeDiv: null
		}
	},
	methods: {
		clickEl(e){
			e.target.classList.toggle('active')
		},
		toggleDiv(id) {
      if (this.activeDiv === id) {
        this.activeDiv = null
      } else {
        this.activeDiv = id
      }
    },
    isActive(id) {
      return this.activeDiv === id
    }
	},
	mounted(){
		for (let i = 0; i < 10; i++) {
			console.dir(i)
		}
	}
}
</script>

<style lang="scss" scoped>
.faq {
	padding-top: 80px;
	@media(min-width:1440px) {
		padding-top: 160px;
  }
	h1 {
		margin-bottom: 32px;
	}
	.column {
		display: grid;
		grid-gap: 32px;
		align-items: start;
		margin: 0 auto;
		@media(min-width:992px) {
			width: 65%;
  	}
		@media(min-width:1440px) {
			grid-template-columns: repeat(2, 1fr);
			width: 100%;
  	}
		svg {
			order: 2;
			margin-top: 58px;
			@media(min-width:1440px) {
				order: 0;
  		}
		}
		.col-desc {
			.links {
				margin-bottom: 32px;
				& a:first-child {
					margin-right: 48px;
				}
				& a {
					color: var(--gray);
				}
				& a.active {
					text-decoration: underline var(--blue);
					color: var(--blue);
				}
			}
			.tab-appear {
				.post {
					border-top: 2px solid var(--grayish);
					padding: 24px 0;
					display: block;
					&:last-child {
						padding-bottom: 0;
					}
					&:hover {
						opacity: .7;
						cursor: pointer;
						transition: .3s;
						& h3:after {
							transform: rotate(28deg);
						}
					}
					div {
						display: none;
						transition: 1s ease;
					}
					&.active {
						div {
							display: block;
						}
						& h3:after {
							transform: rotate(45deg);
						}
					}
					h3 {
						position: relative;
					}
					h3:after {
						content: '+';
						position: absolute;
						right: 0;
						color: var(--gray);
						transform: rotate(0deg);
						transition: .5s ease;
					}
					p {
						margin-top: 8px;
					}
					*{
						pointer-events: none;
					}
				}
			}
		}
	}
}
</style>
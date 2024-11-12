<script>
	import Button from '$components/Button.svelte';
	import ArrowDown from '$assets/chevron-down.svelte';
	import twitter from '$assets/twitter.webp';

	const faqs = [
		{
			question: 'What will I learn from this ebook?',
			answer:
				"This ebook provides a comprehensive guide to relocating to Spain, covering everything from securing the right visa and navigating Spain's legal system to finding the perfect place to live and integrating into the local culture. Whether you're moving for work, study, or retirement, this guide equips you with the essential knowledge and practical steps to make your transition as smooth as possible."
		},
		{
			question: 'Who is this ebook for?',
			answer:
				"This ebook is perfect for anyone considering a move to Spain, whether you're planning a short-term stay or a permanent relocation. It's designed for expats, retirees, students, and professionals who want to avoid common pitfalls and streamline their move. If you're looking for a detailed, step-by-step guide to help you every step of the way, this ebook is for you."
		},
		{
			question: 'How much does the ebook cost?',
			answer:
				'The ebook is priced at $10. This one-time purchase grants you immediate access to all the content, including detailed chapters, actionable checklists, and valuable resources that will save you time, money, and stress during your move to Spain.'
		},
		{
			question: 'Is the information in the ebook up-to-date?',
			answer:
				"Yes, the ebook is regularly updated to reflect the latest changes in Spanish immigration laws, visa requirements, and other relevant information. The author, John Smith, stays on top of these updates to ensure that you're receiving the most accurate and current guidance available."
		},
		{
			question: "Can I get a refund if I'm not satisfied?",
			answer:
				"Absolutely. We offer a 30-day money-back guarantee. If you feel that the ebook did not meet your expectations or didn't provide the value you were looking for, simply contact us within 30 days of your purchase, and we’ll issue a full refund—no questions asked."
		}
	];

	let selectedQuestion = $state(faqs.map(() => false));
</script>

<section
	class="container overflow-hidden py-10 text-center md:mx-auto lg:pb-24 lg:pt-36 lg:text-start xl:px-5"
>
	<h2 class="mb-5 font-anton text-4xl xl:text-5xl">Frequently asked questions</h2>
	<ul class="mt-14">
		{#each faqs as faq, index (faq)}
			<li class="mx-2 mt-2 border-b-2 border-b-gray-200 pb-3 lg:mx-0">
				<button
					aria-expanded={selectedQuestion[index]}
					class="w-full font-sans font-bold"
					onclick={() => {
						selectedQuestion = selectedQuestion.map((q, i) => {
							if (i !== index) return false;
							else return !q;
						});
					}}
				>
					<div class="flex grid-cols-2 items-center justify-between text-sm md:text-base lg:grid">
						<span class="justify-self-start">{faq.question} </span>
						<span
							class="transform justify-self-start lg:justify-self-end"
							class:rotate-180={selectedQuestion[index]}><ArrowDown /></span
						>
					</div>
				</button>
				<p
					class:hidden={!selectedQuestion[index]}
					class="mt-3 max-w-sm font-sans leading-7 tracking-wide lg:max-w-6xl"
				>
					{faq.answer}
				</p>
			</li>
		{/each}
	</ul>
	<div class="mt-10 flex flex-col items-center justify-center">
		<Button class="mx-auto !py-4 !text-xl">BUY NOW</Button>
		<p class="mt-5 font-sans text-gray-500">Any other questions?</p>
		<p class="flex items-center gap-2 font-sans text-gray-500">
			Hit me up on
			<a href="https://x.com" class="flex items-center gap-2">
				<span>twitter</span>
				<span class="block size-4">
					<img src={twitter} alt="twitter icon" class="h-full w-full object-cover" />
				</span>
			</a>
		</p>
	</div>
</section>

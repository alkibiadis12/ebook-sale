<script>
	import bookCover from '$assets/book_cover.png';
	import phoneCover from '$assets/phone_cover.png';
	import Button from '$components/Button.svelte';
</script>

<section class="grid overflow-hidden lg:h-screen lg:grid-cols-2">
	<div class="hero-left pb-10 pt-10 lg:pb-0">
		<div class="text-center font-anton">
			<h1 class=" text-8xl text-indigo-900">MOVE TO <span class="block">SPAIN</span></h1>
			<h4 class="mt-6 text-lg italic">There is no need to make the same mistakes I made</h4>
		</div>
		<div class="mt-24 flex size-64 md:mx-auto md:size-80 lg:mx-0 lg:size-auto lg:justify-center">
			<img
				class="md:mr-[-60px] lg:mr-[-110px] lg:object-none"
				src={phoneCover}
				alt="book cover inside a phone screen"
			/>
			<img class="lg:object-none" src={bookCover} alt="physical book cover" />
		</div>
	</div>
	<div class="bg-black pb-10 pt-10 text-center font-anton lg:pb-0">
		<h1 class="text-5xl uppercase text-white lg:text-7xl 2xl:text-8xl">
			This ebook will <span class="block">save you money,</span>
			<span class="block">time & nerves</span>
		</h1>
		<p
			class="mx-auto mt-6 max-w-xs font-sans text-sm leading-7 tracking-wide text-gray-300 md:max-w-md md:text-lg xl:max-w-xl 2xl:max-w-2xl"
		>
			I moved to Spain seven years ago. The process was painful and difficult. I learned most things
			the hard way: finding a job, getting a visa, calculating my cost of living, choosing an
			appartment. That's why I wrote this e-book, to tell you how I did it. No bullshit, no stress.
		</p>
		<Button class="mt-16">purchase e-book for $10</Button>
	</div>
</section>

<style>
	.hero-left {
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}
</style>

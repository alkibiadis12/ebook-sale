<script>
	import Button from '$components/Button.svelte';
</script>

<section class=" h-screen bg-black">
	<div class=" container mx-auto flex flex-col items-center gap-10 pt-10 text-center font-anton">
		<h1 class="text-5xl uppercase text-white lg:text-8xl">
			The payment failed!<span class="block">Please Try again!</span>
		</h1>

		<Button class="px-4 py-2">BUY NOW</Button>
		<a
			class="w-fit border-2 border-white px-4 py-2 text-4xl uppercase text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
			href="/">Return Home</a
		>
	</div>
</section>

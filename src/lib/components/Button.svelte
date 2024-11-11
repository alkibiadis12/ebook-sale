<script lang="ts">
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import type { Snippet } from 'svelte';
	import { goto } from '$app/navigation';

	interface ButtonInterface extends Record<string, any> {
		children: Snippet;
		class?: string;
	}

	let { children, class: propClass = '', ...props }: ButtonInterface = $props();
	const internalClass =
		'border-white border-2 font-anton bg-black px-5 py-6 text-3xl uppercase text-white transition-colors duration-300 hover:bg-white hover:text-black';
	const combinedClass = `${internalClass} ${propClass}`.trim();

	async function onclick() {
		try {
			const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

			const response = await fetch('/api/checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const { sessionId } = await response.json();

			await stripe?.redirectToCheckout({ sessionId });
		} catch (err) {
			goto('/checkout/failure');
		}
	}
</script>

<button {...props} class={combinedClass} {onclick}>
	{@render children()}
</button>

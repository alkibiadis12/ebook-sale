<script>
	import authorPic from '$assets/profile.jpg';
</script>

<section class="py-10 md:py-14 lg:h-screen lg:pb-0 lg:pt-36">
	<div class="container mx-auto grid-cols-2 justify-items-center md:grid">
		<div class="mb-5 flex flex-col items-center md:mb-0 md:block">
			<h2 class="font-anton text-4xl xl:text-5xl">About the author</h2>
			<div class="max-w-xs font-sans leading-7 tracking-wide xl:max-w-xl">
				<p class="mt-10">
					Alkiviads Spyridopoulos is a seasoned expatriate with over seven years of experience
					living in Spain. Originally from New York, John left behind the hustle of corporate
					America to embrace a more fulfilling life on the sun-soaked coasts of Spain. Through his
					own journey, he has navigated the challenges of securing visas, finding the perfect home,
					and adapting to a new culture, making him an expert in the field of relocation.
				</p>
				<p class="mt-2">
					Alkis’ practical advice is rooted in real-life experience, having learned firsthand the
					intricacies of moving to a new country. His goal is to help others avoid common pitfalls
					and make their transition to life in Spain as smooth as possible. When not sharing his
					expertise, John enjoys exploring Spain’s rich culture and history, fully embracing the
					lifestyle he once dreamed of.
				</p>
			</div>
		</div>
		<div
			class="mx-7 h-72 border-2 border-black md:mx-0 md:h-[30rem] md:place-self-center lg:h-[36rem] lg:place-self-start"
		>
			<img src={authorPic} alt="Author" class="h-full w-full object-cover" />
		</div>
	</div>
</section>

<style>
	section {
		background: linear-gradient(135deg, #e2cbff, #e2cbff 25%, #deeaff 50%, #ece5ff 75%, #927bce);
	}
</style>

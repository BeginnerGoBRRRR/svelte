<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Body from "$lib/components/Body.svelte";
    let productSection: HTMLElement;
</script>

<div class="min-h-screen pt-16">
    <Header/>
    <Body title="Live Better And Healthier" scrollTarget={productSection} />
    
    <section bind:this={productSection} class="py-12 px-4 md:px-8">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">OGAWA</h2>
            <p class="text-lg text-center mb-12 max-w-2xl mx-auto">
                OGAWA takes pride in creating revolutionary ideas to innovate and exceptional engineering practices to deliver the ultimate rejuvenating experiences.
            </p>

            <div class="space-y-24">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div class="w-full md:w-1/2">
                        <img src="massage-chair.png" alt="Master Drive Series" class="w-full"/>
                    </div>
                    <div class="w-full md:w-1/2 space-y-4">
                        <h3 class="text-2xl font-bold">MASTER DRIVE SERIES</h3>
                        <h4 class="text-xl text-gray-600">More than A.I</h4>
                        <p class="text-gray-700">
                            Discover the Technology of Tomorrow, for the Best Massage Today. Each Master Drive is built to be 'different'. Engineered with state-of-the-art technology, indulge in the best massage experience that is unique to each individual user.
                        </p>
                        <Button text="See More →" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                    <div class="w-full md:w-1/2">
                        <img src="massage-chair2.png" alt="Foot Series" class="w-full"/>
                    </div>
                    <div class="w-full md:w-1/2 space-y-4">
                        <h3 class="text-2xl font-bold">FOOT SERIES</h3>
                        <h4 class="text-xl text-gray-600">Safe & Caring</h4>
                        <p class="text-gray-700">
                            Innovative design and adaptive functionality, get total rejuvenation and maximum massage coverage for your entire legs.
                        </p>
                        <Button text="See More →" />
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div class="w-full md:w-1/2">
                        <img src="masage-chair3.png" alt="Mobile Series" class="w-full"/>
                    </div>
                    <div class="w-full md:w-1/2 space-y-4">
                        <h3 class="text-2xl font-bold">Excite your journey</h3>
                        <p class="text-gray-700">
                            Designed specifically to meet the demands of a digital and sedentary lifestyle.
                        </p>
                        <Button text="See More →" />
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
                <div class="relative aspect-square bg-black text-white overflow-hidden">
                    <img src="/chair1.png" alt="AI Collection" class="absolute inset-0 w-full h-full object-cover opacity-20"/>
                    <div class="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                        <h3 class="text-3xl font-bold mb-2">AI</h3>
                        <p class="mb-6">VIEW ALL COLLECTIONS</p>
                        <Button text="Discover More →" />
                    </div>
                </div>
                <div class="aspect-square bg-gray-100 overflow-hidden">
                    <img src="/chair2.png" alt="Chair 1" class="w-full h-full object-cover"/>
                </div>
                <div class="aspect-square bg-gray-100 overflow-hidden">
                    <img src="/chair2.png" alt="Chair 2" class="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</div>
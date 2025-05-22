<script lang="ts">
	export let logo = "OGAWA";
	let navOpen = false;
</script>

<header class="fixed top-0 left-0 right-0 bg-white z-50 px-4 md:px-8 py-2 shadow-sm">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<div class="flex items-center gap-2">
			<img src="/logo.png" alt="Logo" class="w-12 h-12 object-contain"/>
			<div class="text-xl font-bold text-[#51843C]">{logo}</div>
		</div>

		<nav class={`${navOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
			<ul class="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 md:p-0">
				<li><a href="#sanpham" class="nav-link">Bộ sưu tập</a></li>
				<li><a href="#vetrangweb" class="nav-link">Về chúng tôi</a></li>
				<li><a href="#muasam" class="nav-link">Mua sắm</a></li>
				<li><a href="#tintuc" class="nav-link">Tin tức</a></li>
				<li><a href="#cuahang" class="nav-link">Cửa hàng</a></li>
				<li><a href="#lienhe" class="nav-link">Liên hệ</a></li>
			</ul>
		</nav>

		<div class="hidden md:flex items-center gap-6">
			<button class="text-sm font-medium">VIE / ENG</button>
			<button class="p-2">
				<img src="/search.png" alt="Search" class="w-5 h-5"/>
			</button>
			<button class="p-2">
				<img src="/shop.png" alt="Shop" class="w-5 h-5"/>
			</button>
		</div>

		<button 
			class="md:hidden p-2" 
			on:click={() => navOpen = !navOpen}
			aria-label="Toggle menu"
		>
			<div class="w-6 h-4 flex flex-col justify-between">
				<span class="w-full h-0.5 bg-black"></span>
				<span class="w-full h-0.5 bg-black"></span>
				<span class="w-full h-0.5 bg-black"></span>
			</div>
		</button>
	</div>
</header>

<style>
	.nav-link {
		@apply text-sm uppercase font-light hover:text-[#51843C] transition-colors relative;
	}

	.nav-link::after {
		content: '';
		@apply absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300;
	}

	.nav-link:hover::after {
		@apply w-full;
	}
</style>
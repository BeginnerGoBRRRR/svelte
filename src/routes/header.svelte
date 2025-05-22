<script lang="ts">
	export let logo = "OGAWA";
</script>

<header class="fixed top-0 left-0 right-0 bg-white z-50">
  <div class="h-28"></div>
  <div class="px-40 py-4 flex items-center">
    <div class="flex items-center">
      <img src="/logo.png" alt="Logo" class="w-13 h-13 -mt-2 -ml-1.5"/>
      <div class="text-2xl font-bold text-primary tracking-tight">{logo}</div>
    </div>
    
    <nav class="ml-24">
      <ul class="flex gap-10">
        <li><a href="#sanpham" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Bộ sưu tập</a></li>
        <li><a href="#vetrangweb" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Về chúng tôi</a></li>
        <li><a href="#muasam" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Mua sắm</a></li>
        <li><a href="#tintuc" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Tin tức</a></li>
        <li><a href="#cuahang" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Cửa hàng</a></li>
        <li><a href="#lienhe" class="uppercase text-sm font-light hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-black after:transition-all relative pb-1">Liên hệ</a></li>
      </ul>
    </nav>

    <div class="flex items-center gap-5 ml-auto">
      <div class="text-sm font-medium cursor-pointer">VIE / ENG</div>
      <img src="/search.png" alt="Search" class="w-5 h-5 cursor-pointer"/>
      <img src="/shop.png" alt="Shop" class="w-5 h-5 cursor-pointer"/>
    </div>
  </div>
</header>
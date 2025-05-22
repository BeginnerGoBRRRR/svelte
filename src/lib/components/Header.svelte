<script lang="ts">
	export let logo = "OGAWA";
	let navOpen = false;

</script>
<header class = "header">
	<div class="brand">
    	<img src="/logo.png" alt="Logo" class="Img"/>
    	<div class="logo">{logo}</div>
		<nav class:open={navOpen}>
      <ul class = "selectionbar">
          <li><a href="#sanpham">Bộ sưu tập</a></li>
    	  <li><a href="#vetrangweb">Về chúng tôi</a></li>
    	  <li><a href="#muasam">Mua sắm</a></li>
    	  <li><a href="#tintuc">Tin tức</a></li>
    	  <li><a href="#cuahang">Cửa hàng</a></li>
    	  <li><a href="#lienhe">Liên hệ</a></li>
      </ul>
	  <div class="underline-indicator"></div> 
    </nav>
	<div class="header-icons">
      <div class="lang-switcher">VIE / ENG</div>
      <img src="/search.png" alt="Search" class="search-icon"/>
      <img src="/shop.png" alt="Shop" class="shop-icon"/>
    </div>
    <button class="hamburger" on:click={() => navOpen = !navOpen} aria-label="Open navigation">
      <span></span><span></span><span></span>
    </button>
  	</div>
</header>

<style>
	.header{
		position: relative;
        max-width: 1280px;
        width: 100%;
        max-width: 100%;
        height: 61px;
        background-color: #FFFFFF;
		padding-left: 25px;
		padding-right: 50px;
	}
	.brand {
        display: flex;
        align-items: center;
  	}
  	.logo {
        font-size: 22px;  
	    font-weight: bold;            
        line-height: 1;             
        color: #51843C;
        font-family: 'Arial', sans-serif;
	    letter-spacing: -0.02em;
  	}

	nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 40px;
        margin-left: 50px;
    }

	/* TaskBar style */
    .selectionbar a {
        color: #222222;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
        position: relative; /* để chứa pseudo-element */
        padding-bottom: 4px; /* tạo khoảng dưới để hiện underline */
        transition: color 0.3s ease;
    }

/* Pseudo-element tạo thanh đen */
.selectionbar a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5px;
  width: 0;
  background-color: black;
  transition: width 0.3s ease;
}

/* Khi hover thì mở rộng chiều ngang của thanh */
.selectionbar a:hover::after {
  width: 100%;
}
	/*logo*/
	.Img{
		width: 52px;
		height: 52px;
		top: -8.5px;
		left: -6px;
	}
	.header-icons {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 14px;
    }
    /* Icon ngôn ngữ */
    .lang-switcher {
	  margin-left:50px;
    cursor: pointer;
    user-select: none;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #fff;
    font-weight: 500;
    }
    /* Icon tìm kiếm */
    .search-icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
      fill: #333;
      transition: fill 0.3s ease;
    }
    .shop-icon {
      cursor: pointer;
      width: 20px;
      height: 20px;
      fill: #333;
      transition: fill 0.3s ease;
      
    }


	@media (min-width: 414px) {
		.header {
			/* width: 1280px; */
            max-width: 100%;
            margin: 0 auto;
            height: 92px
		}
	}

	.hamburger {
	  display: none;
	  flex-direction: column;
	  justify-content: center;
	  width: 32px;
	  height: 32px;
	  background: none;
	  border: none;
	  cursor: pointer;
	  margin-left: auto;
	}
	.hamburger span {
	  /* display: block; */
	  height: 3px;
	  width: 100%;
	  background: #222;
	  margin: 4px 0;
	  border-radius: 2px;
	  transition: 0.3s;
	}

	@media (max-width: 768px) {
	  .hamburger {
		display: flex;
	  }
	  nav ul,
	  .header-icons {
		display: none;
	  }
	  nav.open ul {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
		background: #fff;
		z-index: 100;
		gap: 0;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	  }
	}

</style>
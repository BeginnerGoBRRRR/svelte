<script lang="ts">
	export let logo = "OGAWA";

</script>
<header class = "header">

	<div class="brand">
    	<img src="/logo.png" alt="Logo" class="Img"/>
    	<div class="logo">{logo}</div>
	<nav>
      <ul class = "selectionbar">
        <li><a href="#sanpham">Bộ sưu tập</a></li>
    	  <li><a href="#vetrangweb">Về chúng tôi</a></li>
    	  <li><a href="#muasam">Mua sắm</a></li>
    	  <li><a href="#tintuc">Tin tức</a></li>
    	  <li><a href="#cuahang">Cửa hàng</a></li>
    	  <li><a href="#cuahang">Liên hệ</a></li>
      </ul>
	  <div class="underline-indicator"></div> 
    </nav>
	<div class="header-icons">
      <div class="lang-switcher">VIE / ENG</div>
      <img src="/search.png" alt="Search" class="search-icon"/>
      <img src="/shop.png" alt="Search" class="shop-icon"/>
    </div>
  	</div>
</header>

<style>
	.header{
		position: relative;
    height: 61px;
    background-color: #FFFFFF;
		padding-left: 160px;
		padding-right: 160px;
    margin-top: 110px;
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
  margin-left: 100px;
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
	  margin-left:100px;
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


	@media (min-width: 640px) {
		.header {
			max-width: 1920px;
		}
	}
</style>
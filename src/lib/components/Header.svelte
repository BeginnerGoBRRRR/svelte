<script>
	export let logo = "OGAWA";
</script>

<header class="header">
	<div class="top-spacer"></div>
	<div class="brand">
    	<img src="/logo.png" alt="Logo" class="Img"/>
    	<div class="logo">{logo}</div>
	<nav>
      <ul class="selectionbar">
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
      <svg class="search-icon" viewBox="0 0 24 24" >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 14a4 4 0 110-8 4 4 0 010 8z"/>
      </svg>
    </div>
  	</div>
</header>

<style>
	.header{
		position: relative;
    width: 100%;
    height: 45px;
    background-color: #FFFFFF;
		padding-left: 160px;
		padding-right: 160px;
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
    .top-spacer {
        height: 110px;   
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
  font-size: 16px;
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

.selectionbar a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: black;
  transition: width 0.3s ease;
}

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

	@media (min-width: 640px) {
		.header {
			max-width: 1920px;
		}
	}
</style> 
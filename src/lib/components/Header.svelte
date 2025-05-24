<script>
  let navOpen = false;

  function toggleMenu() {
    navOpen = !navOpen;
  }

  function closeMenu() {
    navOpen = false;
  }
</script>

<header class="header">
  <div class="brand">
    <img src="./src/assets/logo.png" alt="Logo" class="logo-img" />
    <div class="logo">OGAWA</div>
  </div>

  <!-- Hamburger -->
  <div class="hamburger" on:click={toggleMenu}>
    <img src="./src/assets/menu.png" alt="Menu" />
  </div>

  <!-- Navigation -->
  <nav class="md:block" class:open={navOpen}>
    <ul class="selectionbar" on:click={closeMenu}>
      <li><a href="#sanpham">Bộ sưu tập</a></li>
      <li><a href="#vetrangweb">Về chúng tôi</a></li>
      <li><a href="#muasam">Mua sắm</a></li>
      <li><a href="#tintuc">Tin tức</a></li>
      <li><a href="#cuahang">Cửa hàng</a></li>
      <li><a href="#lienhe">Liên hệ</a></li>
      <div class="header-icons">
        <div class="lang-switcher">VIE / ENG</div>
        <img src="./src/assets/search.png" alt="Search" class="search-icon" />
        <img src="./src/assets/shop.png" alt="Shop" class="shop-icon" />
      </div>
    </ul>
  </nav>
</header>

<style>
  
  header {
    background-color: white;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap:20px;
  }
  .header-icons {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 14px;
  }
  /* Icon ngôn ngữ */
  .lang-switcher {
    margin-left: 50px;
    cursor: pointer;
    user-select: none;
    padding: 5px 10px;
    border-radius: 4px;
    color: black;
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
  .logo {
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
    color: #51843c;
    font-family: "Arial", sans-serif;
    letter-spacing: -0.02em;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo-img {
    width: 40px;
    height: auto;
  }

  .selectionbar {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .selectionbar li a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  }

  .header-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    z-index: 30;
    margin-left: auto;
    background-color: gray;
  }
  .hamburger img {
    width: 50px;
    height: auto;
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 979px) {
    .selectionbar {
      flex-direction: column;
      background-color: #333;
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 70%;
      padding: 2rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 20;
    }

    nav.open .selectionbar {
      transform: translateX(0);
    }

    .hamburger {
      display: block;
    }

    .desktop-only {
      display: none;
    }
  }
</style>

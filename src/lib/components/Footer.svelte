<script lang="ts">
  let openSection = {
    products: false,
    shop: false,
    faq: false,
    promotion: false
  };
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <button
        class="collapsible"
        aria-expanded={openSection.products}
        on:click={() => openSection.products = !openSection.products}
        type="button"
      >
        PRODUCTS <span class="arrow">{openSection.products ? '▲' : '▼'}</span>
      </button>
      <ul class:open={openSection.products}>
        <li>Massage Chairs</li>
        <li>Foot Massager</li>
        <li>Sport Series</li>
        <li>Mobile Series</li>
        <li>Handy Massage</li>
        <li>Beauty Series</li>
        <li>Home Series</li>
      </ul>
    </div>

    <div class="footer-column">
      <button
        class="collapsible"
        aria-expanded={openSection.shop}
        on:click={() => openSection.shop = !openSection.shop}
        type="button"
      >
        SHOP <span class="arrow">{openSection.shop ? '▲' : '▼'}</span>
      </button>
      <ul class:open={openSection.shop}>
        <li>Our Showroom</li>
        <li>Shop Online</li>
      </ul>
      <button
        class="collapsible"
        aria-expanded={openSection.promotion}
        on:click={() => openSection.promotion = !openSection.promotion}
        type="button"
      >
        PROMOTION <span class="arrow">{openSection.promotion ? '▲' : '▼'}</span>
      </button>
      <ul class:open={openSection.promotion}>
        <li>Monthly Promo</li>
        <li>Experiential Program</li>
      </ul>
    </div>

    <div class="footer-column">
      <button
        class="collapsible"
        aria-expanded={openSection.faq}
        on:click={() => openSection.faq = !openSection.faq}
        type="button"
      >
        FAQ <span class="arrow">{openSection.faq ? '▲' : '▼'}</span>
      </button>
      <ul class:open={openSection.faq}>
        <li>Payments</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Trade In Policy</li>
      </ul>
    </div>

    <div class="footer-column logo-column">
      <img src="/bo-cong-thuong.png" alt="Bộ Công Thương" />
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #222;
    color: #ccc;
    padding: clamp(20px, 4vw, 40px) clamp(10px, 5vw, 40px);
    font-family: Arial, sans-serif;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
    gap: clamp(16px, 4vw, 40px);
    justify-content: space-between;
  }

  .footer-column {
    flex: 1 1 180px;
    min-width: 0;
    max-width: 345px;
    box-sizing: border-box;
  }

  .footer-column .collapsible {
    background: none;
    border: none;
    color: #aaa;
    font-size: clamp(13px, 1.2vw, 16px);
    font-weight: bold;
    margin-bottom: clamp(10px, 2vw, 18px);
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0;
  }
  .footer-column .collapsible:focus {
    outline: 2px solid #51843C;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column ul li {
    font-size: clamp(12px, 1vw, 14px);
    margin-bottom: clamp(6px, 1vw, 12px);
    cursor: pointer;
    position: relative;
    padding-left: 15px;
  }

  .footer-column ul li::before {
    content: "›";
    position: absolute;
    left: 0;
    color: #888;
  }

  .logo-column {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .logo-column img {
    width: clamp(80px, 15vw, 140px);
    height: auto;
  }

  @media (max-width: 1024px) {
    .footer-content {
      flex-direction: column;
      align-items: stretch;
      gap: clamp(12px, 3vw, 24px);
    }
    .logo-column {
      justify-content: flex-start;
      margin-top: 20px;
    }
  }
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
      gap: clamp(10px, 2vw, 18px);
    }
    .logo-column {
      justify-content: flex-start;
      margin-top: 20px;
    }
    .footer-column ul {
      display: none;
      transition: max-height 0.3s;
    }
    /* .footer-column ul.open {
      display: block;
    } */
    .footer-column .arrow {
      margin-left: 8px;
      font-size: 16px;
      display: inline;
    }
  }
  @media (min-width: 769px) {
    /* .footer-column ul {
      display: block !important;
    } */
    .footer-column .arrow {
      display: none;
    }
  }
</style>

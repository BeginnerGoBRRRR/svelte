<script lang="ts">
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-column">
      <h3>PRODUCTS</h3>
      <ul>
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
      <h3>SHOP</h3>
      <ul>
        <li>Our Showroom</li>
        <li>Shop Online</li>
      </ul>

      <h3>PROMOTION</h3>
      <ul>
        <li>Monthly Promo</li>
        <li>Experiential Program</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>FAQ</h3>
      <ul>
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
    padding: 40px 20px;
    font-family: Arial, sans-serif;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    gap: 40px;
    justify-content: space-between;
  }

  .footer-column {
    min-width: 150px;
    flex: 1;
  }

  .footer-column h3 {
    font-size: 14px;
    font-weight: bold;
    color: #aaa;
    margin-bottom: 15px;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-column ul li {
    font-size: 14px;
    margin-bottom: 10px;
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
  }

  .logo-column img {
    width: 120px;
    height: auto;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .logo-column {
      justify-content: flex-start;
      margin-top: 20px;
    }
  }
</style>

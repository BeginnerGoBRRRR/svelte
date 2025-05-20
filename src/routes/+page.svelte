<script lang="ts">
    import Header from "./header.svelte";
    import Body from "./body.svelte";
    let productSection: HTMLElement;
    import Footer from "./footer.svelte";

</script>

<Header/>

<Body title="Live Better And Healthier" scrollTarget={productSection} />
<section bind:this={productSection} class="product-sections">
    <h2>OGAWA</h2>
    <p>OGAWA takes pride in creating revolutionary ideas to innovate and exceptional engineering practices to deliver the ultimate rejuvenating experiences.​</p>
    <img src="massage-chair.png" alt="Massage Chair" class = " chair">


    <section class="product-section">
  <div class="product-container">
    <div class="product-image">
      <img src="massage-chair.png" alt="Master Drive Series" />
    </div>  
    <div class="product-info">
      <h2>MASTER DRIVE SERIES</h2>
      <h3>More than A.I</h3>
      <p>
        Discover the Technology of Tomorrow, for the Best Massage Today. Each Master Drive is built to be ‘different’. Engineered with state-of-the-art technology, indulge in the best massage experience that is unique to each individual user.
      </p>
      <button class="See-more">See More →</button>
    </div>
  </div>
    </section>

    <section class="product-section ">
    <div class="product-container reverse">
        <div class="product-image">
        <img src="massage-chair2.png" alt="Master Drive Series" />
        </div>  
        <div class="product-info">
            <h2>Foot SERIES</h2>
            <h3>Safe & Caring</h3>
            <p>
            Innovative design and adaptive functionality, get total rejuvenation and maximum massage coverage for your entire legs​
            </p>
        <button class="See-more">See More →</button>
        </div>
    </div>
    </section>
    <section class="product-section">
  <div class="product-container">
    <div class="product-image">
      <img src="masage-chair3.png" alt="Mobile Series" />
    </div>  
    <div class="product-info">
      <h2>Excite your journey​</h2>
      <p>
      Designed specifically to meet the demands of a​ digital and sedentary lifestyle.      
      </p>
      <button class="See-more">See More →</button>
    </div>
  </div>

<section class="collections-grid">
  <div class="collection-card dark">
    <img src="/chair1.png" alt="AI Collection" />
    <div class="overlay-content">
      <h2>AI</h2>
      <p>VIEW ALL COLLECTIONS</p>
      <button>Discover More →</button>
    </div>
  </div>

  <div class="collection-card">
    <img src="/chair2.png" alt="Chair 1" />
  </div>
  <div class="collection-card">
    <img src="/chair2.png" alt="Chair 2" />
  </div>
  </section>
</section>
</section>

<Footer/>

    
<body></body>

<style>
    .collections-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 40px;
    background: white;
  }

  .collection-card {
    flex: 1;
    max-width: 280px;
    aspect-ratio: 1 / 1;
    background: #f0f0f0;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .collection-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .collection-card.dark {
    background: #333;
    color: white;
    flex-direction: column;
  }

  .collection-card.dark img {
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .overlay-content {
    position: absolute;
    text-align: center;
    z-index: 1;
  }

  .overlay-content h2 {
    font-size: 2rem;
    margin: 0;
  }

  .overlay-content p {
    margin: 5px 0 15px;
    font-weight: 300;
  }

  .overlay-content button {
    padding: 10px 20px;
    font-size: 0.9rem;
    border-radius: 50px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }

  .overlay-content button:hover {
    background-color: #ddd;
  }


    body{
        font-family: Arial, Helvetica, sans-serif;

    }
    .product-sections {
        font-size: 32px;
        padding: 50px;
        background-color: white;
        text-align: center;
        min-height: 100vh;
        letter-spacing: -0.02em;
        line-height: 100%;
    }
    .product-sections p{
        font-size:20px;
        font-weight: 100;
    }
    body{
        font-family: Arial, Helvetica, sans-serif;

    }
    .product-container.reverse {
    flex-direction: row-reverse;
}
    .product-section {
    padding: 0 60px;
    background-color: white;
    }

    .product-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    
    }  

    .product-info {
    flex: 1;
    max-width: 600px;
    text-align: left;
    }

    .product-info h2 {
    font-size: 24px;
    margin-bottom: 10px;
    }

    .product-info h3 {
    font-weight: 400;
    color: #777;
    margin-bottom: 20px;
    }

    .product-info p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 30px;
    }
    .See-more{
        padding: 10px 20px;
        background-color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1em;
        border-radius: 100px; 
        border: 2px solid
    }
    .chair{
        transform: scaleX(-1);
    }
    img {
        width: 80%;
        max-width: 600px;
    }
</style>

<script lang="ts">
  import Button from "./lib/components/Button.svelte";
  import Header from "./lib/components/Header.svelte";
  import Footer from "./lib/components/Footer.svelte";
  let productSection: HTMLElement;
  import Body from "./lib/components/Body.svelte";
</script>

<section class="page-container">
  <Header />
  <Body title="Live Better And Healthier" scrollTarget={productSection} />
  <section bind:this={productSection} class="product-sections">
    <h2>OGAWA</h2>
    <p>
      OGAWA takes pride in creating revolutionary ideas to innovate and
      exceptional engineering practices to deliver the ultimate rejuvenating
      experiences.​
    </p>
    <img
      src="./src/assets/massage-chair.png"
      alt="Massage Chair"
      class="chair"
    />

    <section class="product-section">
      <div class="product-container">
        <div class="product-image">
          <img src="./src/assets/massage-chair.png" alt="Master Drive Series" />
        </div>
        <div class="product-info">
          <h2>MASTER DRIVE SERIES</h2>
          <h3>More than A.I</h3>
          <p>
            Discover the Technology of Tomorrow, for the Best Massage Today.
            Each Master Drive is built to be ‘different’. Engineered with
            state-of-the-art technology, indulge in the best massage experience
            that is unique to each individual user.
          </p>
          <Button text="See More →" />
        </div>
      </div>
    </section>

    <section class="product-section">
      <div class="product-container reverse">
        <div class="product-image">
          <img
            src="./src/assets/massage-chair2.png"
            alt="Master Drive Series"
          />
        </div>
        <div class="product-info">
          <h2>Foot SERIES</h2>
          <h3>Safe & Caring</h3>
          <p>
            Innovative design and adaptive functionality, get total rejuvenation
            and maximum massage coverage for your entire legs​
          </p>
          <Button text="See More →" />
        </div>
      </div>
    </section>
    <section class="product-section">
      <div class="product-container">
        <div class="product-image">
          <img src="./src/assets/masage-chair3.png" alt="Mobile Series" />
        </div>
        <div class="product-info">
          <h2>Excite your journey​</h2>
          <p>
            Designed specifically to meet the demands of a​ digital and
            sedentary lifestyle.
          </p>
          <Button text="See More →" />
        </div>
      </div>

      <section class="collections-grid ">
        <div class="collection-card dark ">
          <h2 class="text-lg md:text-2xl font-bold">AI</h2>
          <p class="text-sm md:text-base mt-2">VIEW ALL COLLECTIONS</p>
          <img src="./src/assets/chair1.png" alt="AI Collection" />
          <div class="overlay-content ">
            <Button
              text="Discover More →"
              className="mt-4 text-xs md:text-sm px-3 py-2 md:px-4 md:py-3 "
            />
          </div>
        </div>

        <div class="collection-card">
          <img src="./src/assets/chair2.png" alt="Chair 1" />
        </div>
        <div class="collection-card">
          <img src="./src/assets/chair2.png" alt="Chair 2" />
        </div>
      </section>
    </section>
    <div
      id="default-carousel"
      class="relative w-full md:hidden"
      data-carousel="slide"
    >
      <h1>OUR COLLECTION</h1>

      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./src/assets/chair1.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./src/assets/chair2.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./src/assets/chair2.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./src/assets/chair2.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="./src/assets/chair2.png"
            class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <h1 class="md:hidden">AI</h1>
    <p class="md:hidden">VIEW ALL COLLECTION</p>
  </section>

  <Footer />
</section>

<style>
  .page-container {
    max-width: 100%;
    overflow-x: hidden;
  }
  .collections-grid {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
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
    flex-direction: column;
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

  .product-sections {
    font-size: 32px;
    padding: 50px;
    background-color: white;
    text-align: center;
    min-height: 100vh;
    letter-spacing: -0.02em;
    line-height: 100%;
  }
  .product-sections p {
    font-size: 20px;
    font-weight: 100;
  }
  .product-container.reverse {
    flex-direction: row-reverse;
  }
  .product-section {
    padding: 25px 25px;
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
  /* .See-more{
      padding: 10px 20px;
      background-color: #fff;
      border: none;
      cursor: pointer;
      font-size: 1em;
      border-radius: 100px; 
      border: 2px solid
  } */
  .chair {
    transform: scaleX(-1);
  }
  img {
    width: 80%;
    max-width: 600px;
    display: inline !important;
    vertical-align: baseline;
  }
  @media (max-width: 600px) {
    .overlay-content h2 {
      font-size: 18px;
    }

    .overlay-content p {
      font-size: 12px;
    }
    .collection-card {
      max-width: 90%; /* hoặc 100% tùy ý */
    }

    .collection-card img {
      width: 100%;
      height: auto;
    }
    .overlay-content h2 {
      font-size: 1.2rem; /* nhỏ hơn */
    }

    .overlay-content p {
      font-size: 0.85rem;
    }

    .overlay-content {
      padding: 0 10px; /* tránh sát mép */
    }
  }
  @media (max-width: 767px) {
    .collections-grid {
      display: none;
    }
  }
</style>
